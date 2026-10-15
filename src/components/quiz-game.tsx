import { useEffect, useRef, useState } from "react";
import { drawFresh, mulberry32, pickQuestions, type PlayCard } from "@/data/questions";
import { playCheer, playFart, primeQuizAudio } from "@/lib/quiz-sounds";
import { useTr } from "@/i18n/locale";
import { cn } from "@/lib/cn";

type Team = { id: string; name: string; size: number; score: number };
type Miss = { prompt: string; answer: string };
type LengthMode = "quick" | "mega";
type WhoMode = "solo" | "teams";

type MainState = {
  who: WhoMode;
  teams: Team[];
  cards: PlayCard[];
  index: number;
  phase: "ask" | "feedback";
  picked: string | null;
  soloScore: number;
  misses: Miss[];
};

type PlayoffState = {
  ids: string[];
  card: PlayCard;
  cursor: number;
  answers: Record<string, string>;
  clean: number;
  phase: "ask" | "feedback";
};

type DoneNote = { key: string; name?: string };

type Screen =
  | { name: "setup" }
  | { name: "main"; main: MainState }
  | { name: "playoff"; main: MainState; playoff: PlayoffState }
  | { name: "done"; main: MainState; draw: boolean; note: DoneNote };

function leaders(teams: Team[]) {
  const top = Math.max(...teams.map((team) => team.score));
  return teams.filter((team) => team.score === top);
}

function teamName(teams: Team[], id: string) {
  return teams.find((team) => team.id === id)?.name ?? "Team";
}

export function QuizGame() {
  const tr = useTr();
  const [length, setLength] = useState<LengthMode>("quick");
  const [who, setWho] = useState<WhoMode>("solo");
  const [draft, setDraft] = useState<Team[]>([
    { id: "t1", name: "Team 1", size: 4, score: 0 },
    { id: "t2", name: "Team 2", size: 4, score: 0 },
  ]);
  const [screen, setScreen] = useState<Screen>({ name: "setup" });
  const rngRef = useRef<(() => number) | null>(null);
  const usedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    primeQuizAudio();
  }, []);

  useEffect(() => {
    if (screen.name === "main" && screen.main.phase === "feedback") {
      const timer = window.setTimeout(() => {
        setScreen((current) => {
          if (current.name !== "main" || current.main.phase !== "feedback") return current;
          return afterMain(current.main);
        });
      }, 1000);
      return () => window.clearTimeout(timer);
    }
    if (screen.name === "playoff" && screen.playoff.phase === "feedback") {
      const timer = window.setTimeout(() => {
        setScreen((current) => {
          if (current.name !== "playoff" || current.playoff.phase !== "feedback") return current;
          return afterPlayoff(current.main, current.playoff);
        });
      }, 1000);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [screen]);

  function afterMain(main: MainState): Screen {
    const nextIndex = main.index + 1;
    if (nextIndex < main.cards.length) {
      return { name: "main", main: { ...main, index: nextIndex, phase: "ask", picked: null } };
    }
    if (main.who === "teams") {
      const tied = leaders(main.teams);
      if (tied.length > 1) {
        const card = freshCard();
        if (!card) {
          return { name: "done", main, draw: true, note: { key: "It is a draw. Every team did careful work." } };
        }
        return {
          name: "playoff",
          main,
          playoff: { ids: tied.map((team) => team.id), card, cursor: 0, answers: {}, clean: 0, phase: "ask" },
        };
      }
      const leader = tied[0];
      return {
        name: "done",
        main,
        draw: false,
        note: leader
          ? { key: "{name} is ahead. Every team did careful work.", name: leader.name }
          : { key: "Every team did careful work." },
      };
    }
    return { name: "done", main, draw: false, note: { key: "" } };
  }

  function afterPlayoff(main: MainState, playoff: PlayoffState): Screen {
    const correct = playoff.card.answer;
    const teams = main.teams.map((team) => {
      if (!playoff.ids.includes(team.id)) return team;
      return playoff.answers[team.id] === correct ? { ...team, score: team.score + 1 } : team;
    });
    const missed = playoff.ids.some((id) => playoff.answers[id] !== correct);
    const misses = missed ? [...main.misses, { prompt: playoff.card.prompt, answer: correct }] : main.misses;
    const nextMain: MainState = { ...main, teams, misses };
    const pool = teams.filter((team) => playoff.ids.includes(team.id));
    const tied = leaders(pool);
    const first = playoff.ids[0];
    const allSame =
      first !== undefined &&
      playoff.ids.every((id) => (playoff.answers[id] === correct) === (playoff.answers[first] === correct));
    if (tied.length <= 1) {
      const leader = tied[0];
      return {
        name: "done",
        main: nextMain,
        draw: false,
        note: leader
          ? { key: "{name} is ahead. Every team did careful work.", name: leader.name }
          : { key: "Every team did careful work." },
      };
    }
    const clean = allSame ? playoff.clean + 1 : 0;
    if (clean >= 3) {
      return {
        name: "done",
        main: nextMain,
        draw: true,
        note: { key: "It is a draw after three tied rounds. Every team did careful work." },
      };
    }
    const card = freshCard();
    if (!card) {
      return { name: "done", main: nextMain, draw: true, note: { key: "It is a draw. Every team did careful work." } };
    }
    return {
      name: "playoff",
      main: nextMain,
      playoff: {
        ids: tied.map((team) => team.id),
        card,
        cursor: 0,
        answers: {},
        clean,
        phase: "ask",
      },
    };
  }

  function freshCard() {
    const rng = rngRef.current;
    if (!rng) return null;
    const card = drawFresh(usedRef.current, rng);
    if (card) usedRef.current.add(card.id);
    return card;
  }

  function start() {
    const rng = mulberry32(Date.now() >>> 0);
    rngRef.current = rng;
    const count = length === "quick" ? 10 : 25;
    const cards = pickQuestions(count, rng);
    usedRef.current = new Set(cards.map((card) => card.id));
    const teams =
      who === "teams"
        ? draft.map((team) => ({ ...team, score: 0, name: team.name.trim() || "Team" }))
        : [];
    setScreen({
      name: "main",
      main: { who, teams, cards, index: 0, phase: "ask", picked: null, soloScore: 0, misses: [] },
    });
  }

  function chooseMain(choice: string) {
    if (screen.name !== "main" || screen.main.phase !== "ask") return;
    const card = screen.main.cards[screen.main.index];
    if (!card) return;
    if (choice === card.answer) playCheer();
    else playFart();
    setScreen((current) => {
      if (current.name !== "main" || current.main.phase !== "ask") return current;
      const card = current.main.cards[current.main.index];
      if (!card) return current;
      const correct = choice === card.answer;
      const misses = correct ? current.main.misses : [...current.main.misses, { prompt: card.prompt, answer: card.answer }];
      if (current.main.who === "solo") {
        return {
          name: "main",
          main: {
            ...current.main,
            phase: "feedback",
            picked: choice,
            soloScore: current.main.soloScore + (correct ? 1 : 0),
            misses,
          },
        };
      }
      const turn = current.main.index % current.main.teams.length;
      const teams = current.main.teams.map((team, index) =>
        index === turn && correct ? { ...team, score: team.score + 1 } : team,
      );
      return { name: "main", main: { ...current.main, teams, phase: "feedback", picked: choice, misses } };
    });
  }

  function choosePlayoff(choice: string) {
    if (screen.name !== "playoff" || screen.playoff.phase !== "ask") return;
    const id = screen.playoff.ids[screen.playoff.cursor];
    if (!id) return;
    const answers = { ...screen.playoff.answers, [id]: choice };
    const last = screen.playoff.cursor + 1 >= screen.playoff.ids.length;
    if (last) {
      screen.playoff.ids.forEach((teamId, index) => {
        const right = answers[teamId] === screen.playoff.card.answer;
        window.setTimeout(() => (right ? playCheer() : playFart()), index * 750);
      });
    }
    setScreen((current) => {
      if (current.name !== "playoff" || current.playoff.phase !== "ask") return current;
      const id = current.playoff.ids[current.playoff.cursor];
      if (!id) return current;
      const answers = { ...current.playoff.answers, [id]: choice };
      const last = current.playoff.cursor + 1 >= current.playoff.ids.length;
      return {
        name: "playoff",
        main: current.main,
        playoff: {
          ...current.playoff,
          answers,
          cursor: last ? current.playoff.cursor : current.playoff.cursor + 1,
          phase: last ? "feedback" : "ask",
        },
      };
    });
  }

  if (screen.name === "setup") {
    return (
      <section className="mt-5 space-y-5">
        <fieldset>
          <legend className="font-display text-2xl text-sky">{tr("How long?")}</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Choice on={length === "quick"} onClick={() => setLength("quick")} label={tr("Quick 10")} />
            <Choice on={length === "mega"} onClick={() => setLength("mega")} label={tr("Mega 25")} />
          </div>
        </fieldset>
        <fieldset>
          <legend className="font-display text-2xl text-sky">{tr("Who plays?")}</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Choice on={who === "solo"} onClick={() => setWho("solo")} label={tr("Solo")} />
            <Choice on={who === "teams"} onClick={() => setWho("teams")} label={tr("Teams")} />
          </div>
        </fieldset>
        {who === "teams" ? (
          <div className="space-y-3">
            <p>{tr("Up to 10 teams. Each team can have up to 4 children.")}</p>
            {draft.map((team, index) => (
              <div key={team.id} className="rounded-2xl bg-sand p-3 ring-1 ring-ink/15">
                <label className="text-sm font-extrabold" htmlFor={`team-${team.id}`}>
                  {tr("Team name")}
                </label>
                <input
                  id={`team-${team.id}`}
                  value={tr(team.name)}
                  maxLength={40}
                  onChange={(event) =>
                    setDraft((list) => list.map((item) => (item.id === team.id ? { ...item, name: event.target.value } : item)))
                  }
                  className="mt-1 w-full rounded-xl border-2 border-ink/15 bg-sand px-3 py-3 text-ink"
                />
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="font-bold">{tr("Children")}</span>
                  <span className="flex items-center gap-2">
                    <button
                      type="button"
                      className="size-11 rounded-xl bg-sky font-extrabold text-sand"
                      onClick={() =>
                        setDraft((list) =>
                          list.map((item) => (item.id === team.id ? { ...item, size: Math.max(1, item.size - 1) } : item)),
                        )
                      }
                      aria-label={tr("Fewer children in {name}", { name: tr(team.name) })}
                    >
                      −
                    </button>
                    <span className="w-6 text-center font-extrabold tabular-nums">{team.size}</span>
                    <button
                      type="button"
                      className="size-11 rounded-xl bg-sky font-extrabold text-sand"
                      onClick={() =>
                        setDraft((list) =>
                          list.map((item) => (item.id === team.id ? { ...item, size: Math.min(4, item.size + 1) } : item)),
                        )
                      }
                      aria-label={tr("More children in {name}", { name: tr(team.name) })}
                    >
                      +
                    </button>
                  </span>
                </div>
                {draft.length > 2 ? (
                  <button
                    type="button"
                    className="mt-2 min-h-11 text-sm font-extrabold text-sky underline"
                    onClick={() => setDraft((list) => list.filter((item) => item.id !== team.id))}
                  >
                    {tr("Remove {name}", {
                      name: team.name.trim() ? tr(team.name) : tr("team {n}", { n: index + 1 }),
                    })}
                  </button>
                ) : null}
              </div>
            ))}
            {draft.length < 10 ? (
              <button
                type="button"
                className="min-h-11 rounded-xl bg-olive px-4 py-3 font-extrabold text-sand"
                onClick={() =>
                  setDraft((list) => [
                    ...list,
                    { id: `t${list.length + 1}-${Date.now()}`, name: `Team ${list.length + 1}`, size: 4, score: 0 },
                  ])
                }
              >
                {tr("Add a team")}
              </button>
            ) : null}
          </div>
        ) : null}
        <p>{tr("If teams tie, a playoff begins. After three tied playoff rounds, it is a draw.")}</p>
        <button type="button" onClick={start} className="min-h-12 w-full rounded-xl bg-gold px-4 py-3 text-lg font-extrabold text-ink">
          {tr("Start")}
        </button>
      </section>
    );
  }

  if (screen.name === "done") {
    const total = screen.main.cards.length;
    return (
      <section className="mt-5 space-y-4">
        {screen.main.who === "solo" ? (
          <p className="font-display text-3xl text-sky">
            {tr("You answered {score} out of {total}.", { score: screen.main.soloScore, total })}
          </p>
        ) : (
          <p className="font-display text-3xl text-sky">
            {tr(screen.note.key, screen.note.name ? { name: tr(screen.note.name) } : undefined)}
          </p>
        )}
        {screen.main.who === "teams" ? (
          <ul className="space-y-2">
            {screen.main.teams.map((team) => (
              <li key={team.id} className="flex items-center justify-between rounded-xl bg-sand px-3 py-3 ring-1 ring-ink/15">
                <span className="min-w-0 truncate font-bold">
                  {tr(team.name)} · {team.size}
                </span>
                <span className="font-extrabold tabular-nums">{team.score}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {screen.main.misses.length > 0 ? (
          <div>
            <h2 className="text-2xl text-sky">{tr("Facts to remember")}</h2>
            <ul className="mt-2 space-y-2">
              {screen.main.misses.map((miss) => (
                <li key={`${miss.prompt}-${miss.answer}`} className="rounded-xl bg-gold px-3 py-3 text-ink">
                  <p className="font-bold">{tr(miss.prompt)}</p>
                  <p>{tr(miss.answer)}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>{tr("Every answer matched.")}</p>
        )}
        <button
          type="button"
          className="min-h-12 w-full rounded-xl bg-sky px-4 py-3 font-extrabold text-sand"
          onClick={() => setScreen({ name: "setup" })}
        >
          {tr("Play again")}
        </button>
      </section>
    );
  }

  const card = screen.name === "main" ? screen.main.cards[screen.main.index] : screen.playoff.card;
  if (!card) return null;
  const total = screen.name === "main" ? screen.main.cards.length : screen.main.cards.length;
  const indexLabel = screen.name === "main" ? screen.main.index + 1 : "Playoff";
  const locked = screen.name === "main" ? screen.main.phase === "feedback" : screen.playoff.phase === "feedback";
  const picked = screen.name === "main" ? screen.main.picked : null;
  const turn =
    screen.name === "main" && screen.main.who === "teams"
      ? screen.main.teams[screen.main.index % screen.main.teams.length]
      : null;
  const playoffTeam =
    screen.name === "playoff" ? teamName(screen.main.teams, screen.playoff.ids[screen.playoff.cursor] ?? "") : null;

  return (
    <section className="mt-5" aria-live="polite">
      <p className="text-sm font-extrabold text-olive tabular-nums">
        {screen.name === "main"
          ? tr("Question {n} of {total}", { n: indexLabel, total })
          : tr("Playoff · tied round {n}", { n: screen.playoff.clean + 1 })}
      </p>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink/10">
        <div
          className="h-full w-full origin-left bg-olive"
          style={{
            transform: `scaleX(${screen.name === "main" ? (screen.main.index + 1) / total : 1})`,
          }}
        />
      </div>
      {turn ? (
        <p className="mt-3 rounded-xl bg-gold px-3 py-3 font-extrabold text-ink">
          {tr("Your turn: {name}", { name: tr(turn.name) })}
        </p>
      ) : null}
      {screen.name === "playoff" && screen.playoff.phase === "ask" && playoffTeam ? (
        <p className="mt-3 rounded-xl bg-gold px-3 py-3 font-extrabold text-ink">
          {tr("Tied teams. Your turn: {name}. The answer waits until each tied team has chosen.", {
            name: tr(playoffTeam),
          })}
        </p>
      ) : null}
      {screen.name === "main" && screen.main.who === "teams" ? (
        <ul className="mt-3 grid grid-cols-2 gap-2">
          {screen.main.teams.map((team) => (
            <li key={team.id} className="truncate rounded-lg bg-sand px-2 py-2 text-sm ring-1 ring-ink/15">
              <span className="font-bold">{tr(team.name)}</span>
              <span className="float-right tabular-nums">{team.score}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <h2 className="mt-4 text-2xl text-sky">{tr(card.prompt)}</h2>
      <div className="mt-3 flex flex-col gap-2">
        {card.choices.map((choice) => {
          const show = locked;
          const isAnswer = choice === card.answer;
          return (
            <button
              key={choice}
              type="button"
              disabled={locked}
              onClick={() => (screen.name === "main" ? chooseMain(choice) : choosePlayoff(choice))}
              className={cn(
                "min-h-12 rounded-xl px-3 py-3 text-left font-bold",
                show && isAnswer ? "bg-olive text-sand" : "bg-sand text-ink ring-1 ring-ink/15",
                show && picked === choice && !isAnswer ? "ring-2 ring-ink" : "",
              )}
            >
              {tr(choice)}
              {show && picked === choice && !isAnswer ? (
                <span className="mt-1 block text-sm font-extrabold">{tr("Your choice")}</span>
              ) : null}
            </button>
          );
        })}
      </div>
      {locked && screen.name === "main" ? <p className="mt-3 font-bold">{tr(card.answer)}</p> : null}
      {locked && screen.name === "playoff" ? <p className="mt-3 font-bold">{tr(card.answer)}</p> : null}
    </section>
  );
}

function Choice({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-12 rounded-xl px-3 py-3 font-extrabold",
        on ? "bg-sky text-sand" : "bg-sand text-ink ring-1 ring-ink/15",
      )}
      aria-pressed={on}
    >
      {label}
    </button>
  );
}

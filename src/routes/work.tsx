import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CALENDAR_SLOTS, CALENDAR_WORDS, HOLIDAY_PROJECTS, PLACE_PAIRS } from "@/data/projects";
import { useTr } from "@/i18n/locale";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [{ title: "Work · Every Religion Ever" }] }),
  component: WorkPage,
});

const FAITH_CHOICES = ["Buddhism", "Christianity", "Hinduism", "Islam", "Judaism", "Sikhism"];

function WorkPage() {
  const tr = useTr();
  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 py-6">
      <div className="no-print flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-4xl text-sky">{tr("Work")}</h1>
          <p className="mt-2 max-w-2xl">
            {tr("Holy day pages, a festival calendar, and a places match. Year projects are on")}{" "}
            <Link to="/projects" className="font-extrabold text-sky underline">
              {tr("Projects")}
            </Link>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            delete document.body.dataset.printSheet;
            document.querySelectorAll(".print-keep").forEach((node) => node.classList.remove("print-keep"));
            window.print();
          }}
          className="min-h-11 rounded-xl bg-gold px-4 py-3 font-extrabold text-ink"
        >
          {tr("Print")}
        </button>
      </div>
      <HolidayProjects />
      <CalendarSheet />
      <MatchSheet />
    </main>
  );
}

function CalendarSheet() {
  const tr = useTr();
  const [selected, setSelected] = useState<string | null>(null);
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const used = new Set(Object.values(placed));
  const allFilled = CALENDAR_SLOTS.every((slot) => placed[slot.id]);
  const allRight = CALENDAR_SLOTS.every((slot) => placed[slot.id] === slot.answer);

  function place(slotId: string) {
    if (!selected) return;
    setPlaced((current) => {
      const next = { ...current };
      for (const key of Object.keys(next)) {
        if (next[key] === selected) delete next[key];
      }
      next[slotId] = selected;
      return next;
    });
    setSelected(null);
    setChecked(false);
  }

  return (
    <section className="print-sheet mt-6 rounded-3xl bg-sand p-5 ring-1 ring-ink/15">
      <h2 className="text-3xl text-sky">{tr("Festival calendar")}</h2>
      <p className="mt-2">{tr("Label each time. Some dates move. Shabbat comes every week.")}</p>
      <div className="no-print mt-4">
        <p className="font-bold">{tr("Word bank. Choose a word, then choose a time.")}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {CALENDAR_WORDS.map((word) => (
            <button
              key={word}
              type="button"
              disabled={used.has(word)}
              onClick={() => setSelected(word)}
              className={cn(
                "min-h-11 rounded-xl px-3 py-2 font-extrabold",
                selected === word ? "bg-gold text-ink" : "bg-sand text-ink ring-1 ring-ink/20",
                used.has(word) ? "opacity-40" : "",
              )}
            >
              {tr(word)}
            </button>
          ))}
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {CALENDAR_SLOTS.map((slot) => {
          const value = placed[slot.id];
          const right = checked && value === slot.answer;
          const off = checked && value !== slot.answer;
          return (
            <li key={slot.id}>
              <button
                type="button"
                onClick={() => place(slot.id)}
                className={cn(
                  "flex min-h-11 w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left ring-1",
                  right ? "bg-olive text-sand ring-olive" : "bg-sand text-ink ring-ink/20",
                  off ? "ring-2 ring-ink" : "",
                )}
              >
                <span className="min-w-0">{tr(slot.label)}</span>
                <span className="shrink-0 font-extrabold">{value ? tr(value) : "______"}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="no-print mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          className="min-h-11 rounded-xl bg-sky px-4 py-2 font-extrabold text-sand"
          onClick={() => setChecked(true)}
          disabled={!allFilled}
        >
          {tr("Check")}
        </button>
        <button
          type="button"
          className="min-h-11 rounded-xl bg-sand px-4 py-2 font-extrabold text-ink ring-1 ring-ink/20"
          onClick={() => {
            setPlaced({});
            setChecked(false);
            setSelected(null);
          }}
        >
          {tr("Clear")}
        </button>
      </div>
      {checked ? (
        <p className="mt-3 font-bold">{allRight ? tr("These labels match.") : tr("Look again. Some labels need a new place.")}</p>
      ) : null}
      <div className="print-only mt-4">
        <p className="font-bold">{tr("Word bank")}: {CALENDAR_WORDS.map((word) => tr(word)).join(", ")}</p>
      </div>
    </section>
  );
}

function MatchSheet() {
  const tr = useTr();
  const [place, setPlace] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const allFilled = PLACE_PAIRS.every((pair) => pairs[pair.place]);
  const allRight = PLACE_PAIRS.every((pair) => pairs[pair.place] === pair.faith);

  return (
    <section className="print-sheet mt-6 rounded-3xl bg-sand p-5 ring-1 ring-ink/15">
      <h2 className="text-3xl text-sky">{tr("Places of worship")}</h2>
      <p className="mt-2">{tr("Match the place to the faith. On paper, draw a line.")}</p>
      <div className="no-print mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="font-display text-xl text-olive">{tr("Place")}</h3>
          <div className="mt-2 flex flex-col gap-2">
            {PLACE_PAIRS.map((pair) => (
              <button
                key={pair.place}
                type="button"
                onClick={() => setPlace(pair.place)}
                className={cn(
                  "min-h-11 rounded-xl px-3 py-2 text-left font-extrabold",
                  place === pair.place ? "bg-gold text-ink" : "bg-sand text-ink ring-1 ring-ink/20",
                )}
              >
                {tr(pair.place)}
                {pairs[pair.place] ? (
                  <span className="mt-1 block text-sm font-bold">{tr("with {name}", { name: tr(pairs[pair.place]) })}</span>
                ) : null}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl text-olive">{tr("Faith")}</h3>
          <div className="mt-2 flex flex-col gap-2">
            {FAITH_CHOICES.map((faith) => (
              <button
                key={faith}
                type="button"
                onClick={() => {
                  if (!place) return;
                  setPairs((current) => ({ ...current, [place]: faith }));
                  setPlace(null);
                  setChecked(false);
                }}
                className="min-h-11 rounded-xl bg-sand px-3 py-2 text-left font-extrabold text-ink ring-1 ring-ink/20"
              >
                {tr(faith)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="print-only mt-4 grid grid-cols-2 gap-8">
        <ul>
          {PLACE_PAIRS.map((pair) => (
            <li key={pair.place} className="border-b border-black py-3">
              {tr(pair.place)}
            </li>
          ))}
        </ul>
        <ul>
          {FAITH_CHOICES.map((faith) => (
            <li key={faith} className="border-b border-black py-3">
              {tr(faith)}
            </li>
          ))}
        </ul>
      </div>
      <div className="no-print mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          disabled={!allFilled}
          onClick={() => setChecked(true)}
          className="min-h-11 rounded-xl bg-sky px-4 py-2 font-extrabold text-sand"
        >
          {tr("Check")}
        </button>
        <button
          type="button"
          onClick={() => {
            setPairs({});
            setChecked(false);
            setPlace(null);
          }}
          className="min-h-11 rounded-xl bg-sand px-4 py-2 font-extrabold text-ink ring-1 ring-ink/20"
        >
          {tr("Clear")}
        </button>
      </div>
      {checked ? (
        <ul className="mt-3 space-y-1">
          {PLACE_PAIRS.map((pair) => (
            <li key={pair.place}>
              {pairs[pair.place] === pair.faith
                ? tr("{place} matches.", { place: tr(pair.place) })
                : tr("{place}: look again.", { place: tr(pair.place) })}
            </li>
          ))}
          {allRight ? <li className="font-bold">{tr("These places match.")}</li> : null}
        </ul>
      ) : null}
    </section>
  );
}

function HolidayProjects() {
  const tr = useTr();
  const [open, setOpen] = useState(HOLIDAY_PROJECTS[0].id);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!HOLIDAY_PROJECTS.some((project) => project.id === id)) return;
    setOpen(id);
    requestAnimationFrame(() => {
      document.getElementById("holiday-projects")?.scrollIntoView();
    });
  }, []);

  function choose(id: string) {
    setOpen(id);
    const next = `${window.location.pathname}${window.location.search}#${id}`;
    window.history.replaceState(null, "", next);
  }

  function printThis(id: string) {
    const sheet = document.querySelector(`[data-sheet="${id}"]`);
    document.querySelectorAll(".print-keep").forEach((node) => node.classList.remove("print-keep"));
    sheet?.classList.add("print-keep");
    document.body.dataset.printSheet = id;
    const cleanup = () => {
      delete document.body.dataset.printSheet;
      sheet?.classList.remove("print-keep");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    window.print();
  }

  return (
    <section id="holiday-projects" className="mt-6">
      <h2 className="hide-single-print text-3xl text-sky">{tr("Holy day projects")}</h2>
      <p className="hide-single-print mt-2 max-w-2xl">
        {tr("One project for each major holy day. Shabbat comes every week.")}
      </p>
      <div className="no-print mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {HOLIDAY_PROJECTS.map((project) => (
          <button
            key={project.id}
            type="button"
            aria-pressed={open === project.id}
            onClick={() => choose(project.id)}
            className={cn(
              "min-h-11 rounded-xl px-2 py-2 text-sm font-extrabold",
              open === project.id ? "bg-sky text-sand" : "bg-sand text-ink ring-1 ring-ink/15",
            )}
          >
            {tr(project.name)}
          </button>
        ))}
      </div>
      {HOLIDAY_PROJECTS.map((project) => (
        <article
          key={project.id}
          id={project.id}
          data-sheet={project.id}
          className={cn(
            "print-sheet mt-4 rounded-3xl bg-sand p-5 ring-1 ring-ink/15",
            open === project.id ? "" : "holiday-closed",
          )}
        >
          <p className="text-sm font-extrabold text-olive">Every Religion Ever</p>
          <h2 className="mt-1 text-3xl text-sky">{tr(project.name)}</h2>
          <p className="mt-2 font-bold">
            {tr(project.faith)}. {tr(project.when)}
          </p>
          <p>{tr(project.who)}</p>
          <p className="mt-3">{tr(project.note)}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <p>
              {tr("Name")} <span className="inline-block min-w-40 border-b border-ink/40">{"\u00a0"}</span>
            </p>
            <p>
              {tr("Class")} <span className="inline-block min-w-40 border-b border-ink/40">{"\u00a0"}</span>
            </p>
          </div>
          <h3 className="mt-4 text-xl text-olive">{tr("On your own")}</h3>
          <p className="mt-1">{tr(project.own)}</p>
          <div className="mt-3 h-24 rounded-xl border-2 border-dashed border-ink/30" />
          <ul className="mt-3 space-y-3">
            {project.prompts.map((prompt) => (
              <li key={prompt}>
                <p>{tr(prompt)}</p>
                <div className="mt-1 h-10 border-b border-ink/40" />
              </li>
            ))}
          </ul>
          <h3 className="mt-4 text-xl text-olive">{tr("With a team")}</h3>
          <p className="mt-1">{tr(project.team)}</p>
          <ol className="mt-3 space-y-3">
            {project.steps.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-ink" aria-hidden="true" />
                <span className="min-w-0">{tr(step)}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 rounded-xl bg-gold px-3 py-3 font-bold text-ink">{tr(project.care)}</p>
          <button
            type="button"
            onClick={() => printThis(project.id)}
            className="no-print mt-4 min-h-11 rounded-xl bg-gold px-4 py-2 font-extrabold text-ink"
          >
            {tr("Print this project")}
          </button>
        </article>
      ))}
    </section>
  );
}

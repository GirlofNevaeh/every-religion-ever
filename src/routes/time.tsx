import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { YEAR_PROJECT_LINKS } from "@/data/projects";
import { YEAR_STEPS } from "@/data/year";

export const Route = createFileRoute("/time")({
  head: () => ({ meta: [{ title: "Time · Every Religion Ever" }] }),
  component: TimePage,
});

function TimePage() {
  const [day, setDay] = useState(0);
  const step = YEAR_STEPS[day] ?? YEAR_STEPS[0];
  if (!step) return null;

  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 py-6">
      <h1 className="text-4xl text-sky">A walk through the year</h1>
      <p className="mt-2">
        Seven stops, from spring to winter. Dates can move.
      </p>
      <p className="mt-4 rounded-2xl bg-olive px-4 py-3 text-sand">
        Every week, many Jews keep Shabbat. It is a rest from Friday evening to Saturday evening. It is not once a year.
      </p>
      <article className="mt-5 rounded-3xl bg-sand p-5 ring-1 ring-ink/15">
        <p className="text-sm font-extrabold text-olive tabular-nums">
          Day {step.day} of {YEAR_STEPS.length}
        </p>
        <h2 className="mt-2 text-4xl text-sky">{step.name}</h2>
        <p className="mt-2 font-bold">{step.when}</p>
        <p className="mt-1">{step.who}</p>
        <p className="mt-4 text-lg">{step.body}</p>
        <div className="mt-4 flex flex-col items-start gap-2">
          <Link
            to="/faiths/$faithId"
            params={{ faithId: step.faith }}
            className="inline-flex min-h-11 items-center font-extrabold text-sky underline"
          >
            Open the faith page
          </Link>
          {(YEAR_PROJECT_LINKS[step.id] ?? []).map((project) => (
            <Link
              key={project.id}
              to="/work"
              hash={project.id}
              className="inline-flex min-h-11 items-center font-extrabold text-olive underline"
            >
              {project.label}
            </Link>
          ))}
        </div>
      </article>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          className="min-h-11 rounded-xl bg-sky px-3 py-3 font-extrabold text-sand disabled:opacity-40"
          disabled={day === 0}
          onClick={() => setDay((value) => Math.max(0, value - 1))}
        >
          Back
        </button>
        <button
          type="button"
          className="min-h-11 rounded-xl bg-gold px-3 py-3 font-extrabold text-ink disabled:opacity-40"
          disabled={day === YEAR_STEPS.length - 1}
          onClick={() => setDay((value) => Math.min(YEAR_STEPS.length - 1, value + 1))}
        >
          Next
        </button>
      </div>
      <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {YEAR_STEPS.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setDay(index)}
              className={
                index === day
                  ? "min-h-11 w-full rounded-xl bg-sky px-2 py-2 text-sm font-extrabold text-sand"
                  : "min-h-11 w-full rounded-xl bg-sand px-2 py-2 text-sm font-extrabold text-ink ring-1 ring-ink/15"
              }
            >
              {item.name}
            </button>
          </li>
        ))}
      </ol>
    </main>
  );
}

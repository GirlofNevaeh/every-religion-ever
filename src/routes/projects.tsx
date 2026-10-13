import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { YEAR_PROJECTS } from "@/data/projects";
import { useTr } from "@/i18n/locale";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects · Every Religion Ever" }] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const tr = useTr();
  const [open, setOpen] = useState(YEAR_PROJECTS[0].id);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!YEAR_PROJECTS.some((project) => project.id === id)) return;
    setOpen(id);
  }, []);

  function choose(id: string) {
    setOpen(id);
    const next = `${window.location.pathname}${window.location.search}#${id}`;
    window.history.replaceState(null, "", next);
  }

  function printAll() {
    delete document.body.dataset.printSheet;
    document.querySelectorAll(".print-keep").forEach((node) => node.classList.remove("print-keep"));
    window.print();
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

  const ages = YEAR_PROJECTS.reduce<string[]>((list, project) => {
    if (!list.includes(project.label)) list.push(project.label);
    return list;
  }, []);
  const current = YEAR_PROJECTS.find((project) => project.id === open) ?? YEAR_PROJECTS[0];
  const inAge = YEAR_PROJECTS.filter((project) => project.label === current.label);

  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 py-6">
      <div className="no-print flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-4xl text-sky">{tr("Projects")}</h1>
          <p className="mt-2 max-w-2xl">
            {tr("Age 5-6 to Age 11-12. Six projects for each age. One task on your own. One task with a team.")}
          </p>
        </div>
        <button
          type="button"
          onClick={printAll}
          className="min-h-11 rounded-xl bg-gold px-4 py-3 font-extrabold text-ink"
        >
          {tr("Print")}
        </button>
      </div>
      <div className="no-print mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {ages.map((label) => (
          <button
            key={label}
            type="button"
            aria-pressed={current.label === label}
            onClick={() => {
              const first = YEAR_PROJECTS.find((project) => project.label === label);
              if (first) choose(first.id);
            }}
            className={cn(
              "min-h-11 rounded-xl px-2 py-2 text-sm font-extrabold",
              current.label === label ? "bg-sky text-sand" : "bg-sand text-ink ring-1 ring-ink/15",
            )}
          >
            {tr(label)}
          </button>
        ))}
      </div>
      <div className="no-print mt-2 grid gap-2 sm:grid-cols-2">
        {inAge.map((project) => (
          <button
            key={project.id}
            type="button"
            aria-pressed={open === project.id}
            onClick={() => choose(project.id)}
            className={cn(
              "min-h-11 rounded-xl px-3 py-2 text-left text-sm font-extrabold",
              open === project.id ? "bg-olive text-sand" : "bg-sand text-ink ring-1 ring-ink/15",
            )}
          >
            {tr(project.ownTitle)}
          </button>
        ))}
      </div>
      {YEAR_PROJECTS.map((project) => (
        <article
          key={project.id}
          id={project.id}
          data-sheet={project.id}
          className={cn(
            "print-sheet mt-4 rounded-3xl bg-sand p-5 ring-1 ring-ink/15",
            open === project.id ? "" : "sheet-closed",
          )}
        >
          <p className="text-sm font-extrabold text-olive">Every Religion Ever</p>
          <p className="mt-1 text-sm font-extrabold text-olive">{tr(project.label)}</p>
          <h2 className="mt-1 text-3xl text-sky">{tr(project.ownTitle)}</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <p>
              {tr("Name")} <span className="inline-block min-w-40 border-b border-ink/40">{"\u00a0"}</span>
            </p>
            <p>
              {tr("Class")} <span className="inline-block min-w-40 border-b border-ink/40">{"\u00a0"}</span>
            </p>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <section>
              <h3 className="text-xl text-olive">{tr("On your own")}</h3>
              <p className="mt-1 font-bold">{tr(project.ownTitle)}</p>
              <p className="mt-1">{tr(project.own)}</p>
              <ol className="mt-3 list-decimal space-y-1 pl-5">
                {project.ownSteps.map((step) => (
                  <li key={step}>{tr(step)}</li>
                ))}
              </ol>
              {project.draw ? (
                <div className="mt-3 h-36 rounded-xl border-2 border-dashed border-ink/30" />
              ) : null}
              <ul className="mt-3 space-y-3">
                {project.prompts.map((prompt, index) => (
                  <li key={`${prompt}-${index}`}>
                    <p>{tr(prompt)}</p>
                    <div className="mt-1 h-10 border-b border-ink/40" />
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xl text-olive">{tr("With a team")}</h3>
              <p className="mt-1 font-bold">{tr(project.teamTitle)}</p>
              <p className="mt-1">{tr(project.team)}</p>
              <ol className="mt-3 space-y-3">
                {project.teamSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-ink" aria-hidden="true" />
                    <span className="min-w-0">{tr(step)}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
          <p className="mt-5 rounded-xl bg-gold px-3 py-3 font-bold text-ink">{tr(project.care)}</p>
          <button
            type="button"
            onClick={() => printThis(project.id)}
            className="no-print mt-4 min-h-11 rounded-xl bg-gold px-4 py-2 font-extrabold text-ink"
          >
            {tr("Print this project")}
          </button>
        </article>
      ))}
      <p className="no-print mt-6 text-sm">
        {tr("Holy day pages are on")}{" "}
        <Link to="/work" className="font-extrabold text-sky underline">
          {tr("Work")}
        </Link>
        .
      </p>
    </main>
  );
}

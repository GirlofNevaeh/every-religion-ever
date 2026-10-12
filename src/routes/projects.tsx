import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { YEAR_PROJECTS } from "@/data/projects";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects · Every Religion Ever" }] }),
  component: ProjectsPage,
});

function ProjectsPage() {
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

  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 py-6">
      <div className="no-print flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-4xl text-sky">Projects</h1>
          <p className="mt-2 max-w-2xl">
            Primary 1 to Primary 7. One task on your own. One task with a team.
          </p>
        </div>
        <button
          type="button"
          onClick={printAll}
          className="min-h-11 rounded-xl bg-gold px-4 py-3 font-extrabold text-ink"
        >
          Print
        </button>
      </div>
      <div className="no-print mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {YEAR_PROJECTS.map((project) => (
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
            {project.label}
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
          <h2 className="mt-1 text-3xl text-sky">{project.label}</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <p>
              Name <span className="inline-block min-w-40 border-b border-ink/40">{"\u00a0"}</span>
            </p>
            <p>
              Class <span className="inline-block min-w-40 border-b border-ink/40">{"\u00a0"}</span>
            </p>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <section>
              <h3 className="text-xl text-olive">On your own</h3>
              <p className="mt-1 font-bold">{project.ownTitle}</p>
              <p className="mt-1">{project.own}</p>
              <ol className="mt-3 list-decimal space-y-1 pl-5">
                {project.ownSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              {project.draw ? (
                <div className="mt-3 h-36 rounded-xl border-2 border-dashed border-ink/30" />
              ) : null}
              <ul className="mt-3 space-y-3">
                {project.prompts.map((prompt, index) => (
                  <li key={`${prompt}-${index}`}>
                    <p>{prompt}</p>
                    <div className="mt-1 h-10 border-b border-ink/40" />
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xl text-olive">With a team</h3>
              <p className="mt-1 font-bold">{project.teamTitle}</p>
              <p className="mt-1">{project.team}</p>
              <ol className="mt-3 space-y-3">
                {project.teamSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-ink" aria-hidden="true" />
                    <span className="min-w-0">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
          <p className="mt-5 rounded-xl bg-gold px-3 py-3 font-bold text-ink">{project.care}</p>
          <button
            type="button"
            onClick={() => printThis(project.id)}
            className="no-print mt-4 min-h-11 rounded-xl bg-gold px-4 py-2 font-extrabold text-ink"
          >
            Print this project
          </button>
        </article>
      ))}
      <p className="no-print mt-6 text-sm">
        Holy day pages are on{" "}
        <Link to="/work" className="font-extrabold text-sky underline">
          Work
        </Link>
        .
      </p>
    </main>
  );
}

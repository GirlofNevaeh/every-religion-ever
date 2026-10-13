import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PhotoCredit } from "@/components/photo-credit";
import { FIGURES } from "@/data/figures";
import { FAITHS } from "@/data/faiths";
import { useTr } from "@/i18n/locale";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/people")({
  head: () => ({ meta: [{ title: "People · Every Religion Ever" }] }),
  component: PeoplePage,
});

function PeoplePage() {
  const tr = useTr();
  const [open, setOpen] = useState(FIGURES[0].id);

  useEffect(() => {
    const apply = () => {
      const id = window.location.hash.slice(1);
      if (FIGURES.some((figure) => figure.id === id)) setOpen(id);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  function choose(id: string) {
    setOpen(id);
    const next = `${window.location.pathname}${window.location.search}#${id}`;
    window.history.replaceState(null, "", next);
  }

  const figure = FIGURES.find((item) => item.id === open) ?? FIGURES[0];

  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 py-6">
      <h1 className="text-4xl text-sky">{tr("People")}</h1>
      <p className="mt-2 max-w-2xl">
        {tr(
          "Choose a name. Some Christian pictures show God as a kind wise man. Many Jews, Muslims, and Sikhs do not draw God. Muhammad is not drawn.",
        )}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7" role="tablist" aria-label={tr("Profiles")}>
        {FIGURES.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`tab-${item.id}`}
            aria-selected={open === item.id}
            aria-controls={`panel-${item.id}`}
            onClick={() => choose(item.id)}
            className={cn(
              "min-h-11 rounded-xl px-2 py-2 text-sm font-extrabold",
              open === item.id ? "bg-sky text-sand" : "bg-sand text-ink ring-1 ring-ink/15",
            )}
          >
            {tr(item.name)}
          </button>
        ))}
      </div>
      <article
        id={`panel-${figure.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${figure.id}`}
        className="mt-4 overflow-hidden rounded-3xl bg-sand ring-1 ring-ink/15 lg:grid lg:grid-cols-2"
      >
        <img src={figure.image} alt={tr(figure.imageAlt)} className="aspect-[3/4] w-full bg-sand object-contain" />
        <div className="p-4 sm:p-6">
          <p className="text-sm font-extrabold text-olive">{tr(figure.faithName)}</p>
          <h2 className="text-3xl text-sky">{tr(figure.name)}</h2>
          <div className="mt-3 space-y-3">
            {figure.paragraphs.map((paragraph) => (
              <p key={paragraph}>{tr(paragraph)}</p>
            ))}
          </div>
          {figure.drawn ? (
            <p className="mt-3 text-xs leading-snug">{tr("A drawing for this page. Not a photograph.")}</p>
          ) : figure.credit ? (
            <PhotoCredit credit={figure.credit} />
          ) : null}
          <p className="mt-3">
            <Link to="/faiths/$faithId" params={{ faithId: figure.faithId }} className="font-extrabold text-sky underline">
              {tr("Read about {name}", { name: tr(FAITHS.find((faith) => faith.id === figure.faithId)?.name ?? "") })}
            </Link>
          </p>
        </div>
      </article>
      <p className="mt-6 max-w-2xl text-sm">
        {tr(
          "Many Jews, Christians, and Muslims also tell stories of Abraham. He is not drawn here. Many Bahá’í families do not show a picture of Bahá’u’lláh.",
        )}
      </p>
    </main>
  );
}

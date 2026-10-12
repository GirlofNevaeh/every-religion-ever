import { createFileRoute, Link } from "@tanstack/react-router";
import { PhotoCredit } from "@/components/photo-credit";
import { FIGURES } from "@/data/figures";

export const Route = createFileRoute("/people")({
  head: () => ({ meta: [{ title: "People · Every Religion Ever" }] }),
  component: PeoplePage,
});

function PeoplePage() {
  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 py-6">
      <h1 className="text-4xl text-sky">People</h1>
      <p className="mt-2 max-w-2xl">
        Each faith has teachers and stories. Some Christian pictures show God as a kind wise man. Many Jews, Muslims, and Sikhs do not draw God. Muhammad is not drawn.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {FIGURES.map((figure) => (
          <article
            key={figure.id}
            id={figure.id}
            className="scroll-mt-28 overflow-hidden rounded-3xl bg-sand ring-1 ring-ink/15"
          >
            <img src={figure.image} alt={figure.imageAlt} className="aspect-[3/4] w-full bg-sand object-contain" />
            <div className="p-4">
              <p className="text-sm font-extrabold text-olive">{figure.faithName}</p>
              <h2 className="text-3xl text-sky">{figure.name}</h2>
              <div className="mt-3 space-y-3">
                {figure.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {figure.drawn ? (
                <p className="mt-3 text-xs leading-snug">A drawing for this page. Not a photograph.</p>
              ) : figure.credit ? (
                <PhotoCredit credit={figure.credit} />
              ) : null}
              <p className="mt-3">
                <Link
                  to="/faiths/$faithId"
                  params={{ faithId: figure.faithId }}
                  className="font-extrabold text-sky underline"
                >
                  Read about {figure.faithName}
                </Link>
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-sm">
        Many Jews, Christians, and Muslims also tell stories of Abraham. He is not drawn here. Many Bahá’í families do
        not show a picture of Bahá’u’lláh.
      </p>
    </main>
  );
}

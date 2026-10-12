import { createFileRoute, Link, stripSearchParams } from "@tanstack/react-router";
import { SearchForm } from "@/components/search-form";
import { searchCatalog } from "@/data/catalog";
import { FAITHS } from "@/data/faiths";

export const Route = createFileRoute("/faiths/")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  search: {
    middlewares: [stripSearchParams({ q: "" })],
  },
  head: () => ({ meta: [{ title: "Faiths · Every Religion Ever" }] }),
  component: FaithsPage,
});

function FaithsPage() {
  const { q } = Route.useSearch();
  const query = q.trim();
  const hits = query ? searchCatalog(query) : [];

  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 py-6">
      <h1 className="text-4xl text-sky">Faiths</h1>
      <p className="mt-2 max-w-2xl">Find a faith, a place, a festival, or a kind act.</p>
      <div className="mt-4">
        <SearchForm id="faith-search" initial={query} />
      </div>
      {query ? (
        <section className="mt-6" aria-live="polite">
          <h2 className="text-2xl text-sky">Results</h2>
          {hits.length === 0 ? (
            <p className="mt-3">Nothing matches those words. Try mosque, Diwali, or kindness.</p>
          ) : (
            <ul className="mt-3 divide-y divide-ink/10 overflow-hidden rounded-2xl ring-1 ring-ink/15">
              {hits.map((hit) => (
                <li key={`${hit.href}-${hit.title}`}>
                  <a href={hit.href} className="flex min-h-11 flex-col gap-1 px-4 py-3">
                    <span className="text-xs font-extrabold tracking-wide text-olive uppercase">{hit.kind}</span>
                    <span className="font-display text-xl text-sky">{hit.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : (
        <>
        <ul className="mt-6 flex flex-col gap-3">
          {FAITHS.map((faith) => (
            <li key={faith.id}>
              <Link
                to="/faiths/$faithId"
                params={{ faithId: faith.id }}
                className="grid grid-cols-[6.5rem_1fr] gap-3 overflow-hidden rounded-2xl bg-sand ring-1 ring-ink/15"
              >
                <img src={faith.image} alt="" className="h-full w-full object-cover" />
                <span className="flex min-w-0 flex-col justify-center py-3 pr-3">
                  <span className="font-display text-2xl text-sky">{faith.name}</span>
                  <span className="text-sm">{faith.placeTitle}</span>
                  <span className="text-sm">{faith.bookTitle}</span>
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/faiths/$faithId"
              params={{ faithId: "more" }}
              className="flex min-h-16 flex-col justify-center rounded-2xl bg-olive px-4 py-4 text-sand"
            >
              <span className="font-display text-2xl">More faiths and none</span>
              <span className="text-sm">Bahá’í, Jainism, and families with no religion</span>
            </Link>
          </li>
        </ul>
        <p className="mt-4 text-sm">
          <Link to="/about" hash="photos" className="font-extrabold text-sky underline">
            Photo credits
          </Link>{" "}
          name each maker. Each photo is a smaller copy.
        </p>
        </>
      )}
    </main>
  );
}

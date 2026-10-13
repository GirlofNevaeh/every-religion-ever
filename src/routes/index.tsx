import { createFileRoute, Link } from "@tanstack/react-router";
import { SearchForm } from "@/components/search-form";
import { FAITHS } from "@/data/faiths";
import { useTr } from "@/i18n/locale";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Home · Every Religion Ever" }] }),
  component: Home,
});

function Home() {
  const tr = useTr();
  return (
    <main id="content">
      <section className="bg-sky text-sand">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-4 py-8">
          <h1 className="max-w-xl text-4xl text-sand sm:text-5xl">Every Religion Ever</h1>
          <p className="max-w-xl text-lg">
            {tr("Many families trust, celebrate, and rest in different ways. Some families do not follow a religion.")}
          </p>
          <SearchForm id="home-search" tone="sand" />
        </div>
      </section>
      <div className="mx-auto w-full max-w-5xl px-4 py-6">
        <h2 className="text-2xl text-sky">{tr("Six faiths")}</h2>
        <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {FAITHS.map((faith) => (
            <li key={faith.id} className="min-w-0">
              <Link
                to="/faiths/$faithId"
                params={{ faithId: faith.id }}
                className="flex h-full flex-col overflow-hidden rounded-2xl bg-sand ring-1 ring-ink/15"
              >
                <img src={faith.image} alt={tr(faith.imageAlt)} className="aspect-[4/3] w-full object-cover" />
                <span className="flex flex-1 flex-col gap-2 p-3">
                  <span className="font-display text-xl text-sky">{tr(faith.name)}</span>
                  <span className="text-sm leading-snug">{tr(faith.card)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm">
          <Link to="/about" hash="photos" className="font-extrabold text-sky underline">
            {tr("Photo credits")}
          </Link>{" "}
          {tr("name each maker. Each photo is a smaller copy.")}
        </p>
        <p className="mt-5 max-w-2xl text-sm">
          {tr("Other faiths, and families with no religion, are real parts of the world too.")}{" "}
          <Link to="/faiths/$faithId" params={{ faithId: "more" }} className="font-extrabold text-sky underline">
            {tr("More faiths and none")}
          </Link>
        </p>
      </div>
    </main>
  );
}

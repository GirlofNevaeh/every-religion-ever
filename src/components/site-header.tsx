import { Link, useRouterState } from "@tanstack/react-router";
import { LanguageButton } from "@/components/language-button";
import { useTr } from "@/i18n/locale";
import { cn } from "@/lib/cn";

const NAV = [
  { to: "/", label: "Home", exact: true },
  { to: "/faiths", label: "Faiths", exact: false },
  { to: "/people", label: "People", exact: true },
  { to: "/places", label: "Places", exact: true },
  { to: "/practice", label: "Practice", exact: true },
  { to: "/time", label: "Time", exact: true },
  { to: "/quiz", label: "Quiz", exact: true },
  { to: "/projects", label: "Projects", exact: true },
  { to: "/work", label: "Work", exact: true },
  { to: "/about", label: "About", exact: true },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const tr = useTr();

  return (
    <header className="no-print sticky top-0 z-40 border-b border-ink/10 bg-sand">
      <div className="mx-auto w-full max-w-5xl px-3 py-2">
        <LanguageButton />
        <Link to="/" className="font-display mt-2 block text-xl leading-none text-sky sm:text-2xl">
          Every Religion Ever
        </Link>
        <nav aria-label={tr("Pages")} className="mt-2 grid grid-cols-3 gap-1 sm:grid-cols-5 lg:grid-cols-10">
          {NAV.map((item) => {
            const active = item.exact
              ? pathname === item.to
              : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.label}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-11 min-w-0 items-center justify-center rounded-lg px-1 text-center text-[11px] leading-tight font-extrabold sm:text-xs",
                  active ? "bg-sky text-sand" : "bg-sand text-ink ring-1 ring-ink/15",
                )}
              >
                {tr(item.label)}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

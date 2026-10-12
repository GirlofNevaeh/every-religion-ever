import { Link } from "@tanstack/react-router";
import type { FaithId } from "@/data/faiths";
import { CrossIcon, DavidStar, DomeIcon, GurdwaraIcon, ShikharaIcon, StupaIcon } from "@/components/symbols";

type Stop = {
  id: FaithId;
  label: string;
  left: string;
  top: string;
  icon: typeof CrossIcon;
};

const STOPS: Stop[] = [
  { id: "christianity", label: "Church", left: "16%", top: "42%", icon: CrossIcon },
  { id: "judaism", label: "Synagogue", left: "40%", top: "30%", icon: DavidStar },
  { id: "islam", label: "Mosque", left: "48%", top: "62%", icon: DomeIcon },
  { id: "sikhism", label: "Gurdwara", left: "66%", top: "30%", icon: GurdwaraIcon },
  { id: "hinduism", label: "Mandir", left: "74%", top: "58%", icon: ShikharaIcon },
  { id: "buddhism", label: "Temple", left: "88%", top: "40%", icon: StupaIcon },
];

export function WorldMap() {
  return (
    <div>
      <div className="relative rounded-3xl bg-sky">
        <svg viewBox="0 0 800 460" className="block h-auto w-full" role="img" aria-label="A simple world diagram">
          <rect width="800" height="460" className="fill-sky" />
          <ellipse cx="140" cy="170" rx="46" ry="78" className="fill-olive" />
          <ellipse cx="190" cy="270" rx="36" ry="48" className="fill-olive" />
          <ellipse cx="330" cy="140" rx="70" ry="40" className="fill-olive" />
          <ellipse cx="360" cy="270" rx="52" ry="90" className="fill-olive" />
          <ellipse cx="560" cy="160" rx="130" ry="72" className="fill-olive" />
          <ellipse cx="640" cy="270" rx="40" ry="58" className="fill-olive" />
          <ellipse cx="700" cy="340" rx="52" ry="26" className="fill-olive" />
        </svg>
        {STOPS.map((stop) => {
          const Icon = stop.icon;
          return (
            <Link
              key={stop.id}
              to="/faiths/$faithId"
              params={{ faithId: stop.id }}
              aria-label={stop.label}
              style={{ left: stop.left, top: stop.top }}
              className="absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-ink ring-2 ring-sand"
            >
              <Icon className="size-6" />
            </Link>
          );
        })}
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {STOPS.map((stop) => (
          <li key={stop.id}>
            <Link
              to="/faiths/$faithId"
              params={{ faithId: stop.id }}
              className="flex min-h-11 items-center justify-center rounded-xl bg-gold px-2 py-2 text-center text-sm font-extrabold text-ink"
            >
              {stop.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

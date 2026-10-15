import { useEffect, useState } from "react";
import { useTr } from "@/i18n/locale";

const STORAGE_KEY = "ere-cookie-ok";

const NOTICE =
  "This site stores one cookie after you enter an access key. It lets this browser open the other pages. The site also remembers your language on this browser. These are not used for ads.";

export function CookieNotice() {
  const tr = useTr();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) !== "1") setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="no-print mx-auto w-full max-w-5xl px-3 pt-3" role="region" aria-label={tr("Cookie notice")}>
      <div className="flex flex-col gap-3 rounded-2xl bg-ink px-4 py-3 text-sand sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold">{tr(NOTICE)}</p>
        <button
          type="button"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-gold px-4 py-2 text-sm font-extrabold text-ink"
          onClick={() => {
            window.localStorage.setItem(STORAGE_KEY, "1");
            setOpen(false);
          }}
        >
          {tr("OK")}
        </button>
      </div>
    </div>
  );
}

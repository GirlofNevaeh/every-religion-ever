import { useEffect, useId, useRef, useState } from "react";
import { LOCALES } from "@/i18n/locales";
import { useLocale } from "@/i18n/locale";
import { cn } from "@/lib/cn";

export function LanguageButton() {
  const { locale, setLocale, tr } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = LOCALES.find((item) => item.id === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!open) return;
    function onPointer(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("pointerdown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-sky px-3 py-2 text-sm font-extrabold text-sand"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        {tr("Language")}: {tr(current.name)}
      </button>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={tr("Language")}
          className="absolute left-0 z-50 mt-1 w-56 overflow-hidden rounded-2xl bg-sand py-1 text-ink ring-1 ring-ink/15"
        >
          {LOCALES.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                role="option"
                aria-selected={item.id === locale}
                className={cn(
                  "flex min-h-11 w-full items-center px-3 text-left text-sm font-extrabold",
                  item.id === locale ? "bg-sky text-sand" : "text-ink",
                )}
                onClick={() => {
                  setLocale(item.id);
                  setOpen(false);
                }}
              >
                {tr(item.name)}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

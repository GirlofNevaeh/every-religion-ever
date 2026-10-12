import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function SearchForm({
  initial = "",
  id = "site-search",
  tone = "ink",
}: {
  initial?: string;
  id?: string;
  tone?: "ink" | "sand";
}) {
  const navigate = useNavigate();
  const [value, setValue] = useState(initial);

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  return (
    <form
      className="flex flex-col gap-2"
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        const q = value.trim();
        void navigate({
          to: "/faiths",
          search: { q },
        });
      }}
    >
      <label htmlFor={id} className={cn("text-sm font-extrabold", tone === "sand" ? "text-sand" : "text-ink")}>
        Search
      </label>
      <div className="flex gap-2">
        <input
          id={id}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Try mosque, Diwali, kindness"
          className="min-w-0 flex-1 rounded-xl border-2 border-ink/15 bg-sand px-3 py-3 text-base text-ink placeholder:text-ink/50"
          autoComplete="off"
          suppressHydrationWarning
        />
        <button type="submit" className="shrink-0 rounded-xl bg-gold px-4 py-3 text-base font-extrabold text-ink">
          SEARCH
        </button>
      </div>
    </form>
  );
}

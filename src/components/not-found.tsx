import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useTr } from "@/i18n/locale";

export function NotFoundPage() {
  const tr = useTr();

  useEffect(() => {
    document.title = `${tr("That page is not here")} · Every Religion Ever`;
  }, [tr]);

  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="text-3xl text-sky">{tr("That page is not here")}</h1>
      <Link to="/" className="mt-4 inline-flex min-h-11 items-center font-extrabold text-sky underline">
        {tr("Home")}
      </Link>
    </main>
  );
}

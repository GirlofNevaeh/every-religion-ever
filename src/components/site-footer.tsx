import { Link } from "@tanstack/react-router";
import { InstallDialog } from "@/components/install-dialog";

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-ink/10 bg-sand">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-bold text-ink">Same care for every family.</p>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/about"
            className="inline-flex min-h-11 items-center rounded-xl bg-olive px-3 py-2 text-sm font-extrabold text-sand"
          >
            Be a good guest
          </Link>
          <Link
            to="/about"
            hash="photos"
            className="inline-flex min-h-11 items-center rounded-xl px-3 py-2 text-sm font-extrabold text-sky underline"
          >
            Photo credits
          </Link>
          <InstallDialog />
        </div>
      </div>
    </footer>
  );
}

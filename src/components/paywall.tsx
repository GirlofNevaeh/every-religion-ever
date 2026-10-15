import { useState, type FormEvent } from "react";
import { useRouter } from "@tanstack/react-router";
import { unlockWithKey } from "@/lib/access";
import { useTr } from "@/i18n/locale";

const PARTS = ["Faiths", "People", "Places", "Practice", "Time", "Quiz", "Projects", "Work"] as const;
const PRICING_URL = "https://www.everyschoolever.com/pricing?plan=";

export function Paywall() {
  const tr = useTr();
  const router = useRouter();
  const [key, setKey] = useState("");
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(false);
    try {
      const result = await unlockWithKey({ data: { key } });
      if (!result.ok) {
        setError(true);
        return;
      }
      await router.invalidate();
    } catch {
      setError(true);
    } finally {
      setPending(false);
    }
  }

  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 py-6">
      <h1 className="text-4xl text-sky sm:text-5xl">Every Religion Ever</h1>
      <p className="mt-3 max-w-2xl text-lg">
        {tr(
          "A calm site for children about Christianity, Islam, Judaism, Hinduism, Buddhism, Sikhism, other faiths, and no religion.",
        )}
      </p>
      <p className="mt-3 max-w-2xl">
        {tr("It is for ages about 5 to 12. Schools use it to learn about faiths, places, practice, the year, a quiz, and class projects.")}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {PARTS.map((part) => (
          <li key={part} className="rounded-xl bg-sand px-3 py-2 text-sm font-extrabold text-ink ring-1 ring-ink/15">
            {tr(part)}
          </li>
        ))}
      </ul>

      <section className="mt-6 rounded-2xl bg-sand p-4 ring-1 ring-ink/15 sm:p-5">
        <h2 className="text-2xl text-sky">{tr("This site opens with an access key.")}</h2>
        <p className="mt-2 max-w-2xl">
          {tr("Get an access key from Every School Ever. Then come back to this page and enter the key.")}
        </p>
        <a
          href={PRICING_URL}
          className="mt-4 inline-flex min-h-11 items-center rounded-xl bg-sky px-4 py-2 text-sm font-extrabold text-sand"
        >
          {tr("Get an access key")}
        </a>
        <p className="mt-2 break-all text-sm">{PRICING_URL}</p>

        <form onSubmit={onSubmit} className="mt-5 grid gap-2">
          <label htmlFor="access-key" className="text-sm font-extrabold">
            {tr("Access key")}
          </label>
          <input
            id="access-key"
            name="key"
            value={key}
            onChange={(event) => setKey(event.target.value)}
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            className="min-h-11 rounded-xl bg-sand px-3 text-base text-ink ring-1 ring-ink/15"
          />
          <button
            type="submit"
            disabled={pending}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-olive px-4 py-2 text-sm font-extrabold text-sand disabled:opacity-60"
          >
            {pending ? tr("Opening…") : tr("Open the site")}
          </button>
          {error ? (
            <p role="alert" className="text-sm font-bold">
              {tr("That key does not open the site. Check it, or get a key from Every School Ever.")}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}

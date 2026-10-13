import { createFileRoute } from "@tanstack/react-router";
import { PhotoCredit } from "@/components/photo-credit";
import { PHOTO_CREDITS } from "@/data/photos";
import { useTr } from "@/i18n/locale";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About · Every Religion Ever" }] }),
  component: AboutPage,
});

const STEPS = [
  {
    title: "Use a quiet voice",
    body: "People may be praying. Sit still. If you do not pray, that is all right. Do not copy a prayer as a joke. Do not talk over it.",
  },
  {
    title: "Ask where to sit",
    body: "Follow the host. Do not run. Do not climb on furniture. Do not sit on a holy book.",
  },
  {
    title: "Shoes off when that is the custom",
    body: "Many mosques, gurdwaras, mandirs, and temples ask you to remove your shoes. Many churches do not. If you are not sure, ask.",
  },
  {
    title: "Cover your head if you are asked",
    body: "In a gurdwara, people cover their heads. Some synagogues, churches, and mosques offer a covering too. If someone offers you one, wear it while you are inside. It is not a costume.",
  },
  {
    title: "Ask before you photograph",
    body: "Some places say no photos. Some say no photos during prayer. Wait for a yes. Do not take a photo of a person who looks away.",
  },
  {
    title: "Leave holy things in their place",
    body: "Do not touch a holy book, a statue, or a scroll unless a host shows you how. Do not put a sacred book on the floor. Do not touch a kirpan.",
  },
  {
    title: "Food",
    body: "If food is offered and you can eat it, you may say thank you. If you cannot eat it, say “No thank you.” Do not call the food strange.",
  },
  {
    title: "Leave kindly",
    body: "Thank the host. Walk slowly. A good guest makes the next guest welcome too.",
  },
];

function AboutPage() {
  const tr = useTr();
  return (
    <main id="content" className="mx-auto w-full max-w-3xl px-4 py-6">
      <h1 className="text-4xl text-sky">{tr("Be a good guest")}</h1>
      <p className="mt-2">{tr("In a place of worship, watch, ask, and be calm.")}</p>
      <ol className="mt-6 space-y-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-3 rounded-2xl bg-sand p-4 ring-1 ring-ink/15">
            <span className="flex size-12 items-center justify-center rounded-full bg-gold font-display text-xl text-ink tabular-nums">
              {index + 1}
            </span>
            <span className="min-w-0">
              <h2 className="text-2xl text-sky">{tr(step.title)}</h2>
              <p className="mt-1">{tr(step.body)}</p>
            </span>
          </li>
        ))}
      </ol>
      <section id="photos" className="mt-8 scroll-mt-4">
        <h2 className="text-3xl text-sky">{tr("Photo credits")}</h2>
        <p className="mt-2">
          {tr(
            "Buildings and objects are real photos. Each photo names its maker and its licence. People are drawn, not photographed. The drawings show God, Jesus, Moses, Krishna, the Buddha, Guru Nanak, and a family sharing food. Muhammad is not drawn. Many Jews, Muslims, and Sikhs do not draw God.",
          )}
        </p>
        <ul className="mt-4 space-y-3">
          {PHOTO_CREDITS.map((credit) => (
            <li key={credit.id} className="rounded-2xl bg-sand p-4 ring-1 ring-ink/15">
              <PhotoCredit credit={credit} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

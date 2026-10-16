import { createFileRoute, Link } from "@tanstack/react-router";
import { BookStandIcon, KhandaIcon } from "@/components/symbols";
import { PhotoCredit } from "@/components/photo-credit";
import { faithById, type Faith } from "@/data/faiths";
import { figureForFaith } from "@/data/figures";
import { useTr } from "@/i18n/locale";

export const Route = createFileRoute("/faiths/$faithId")({
  head: ({ params }) => {
    const faith = faithById(params.faithId);
    const title = params.faithId === "more" ? "More faiths and none" : (faith?.name ?? "Faith");
    return { meta: [{ title: `${title} · Every Religion Ever` }] };
  },
  component: FaithRoute,
});

function FaithRoute() {
  const tr = useTr();
  const { faithId } = Route.useParams();
  if (faithId === "more") return <MoreFaiths />;
  const faith = faithById(faithId);
  if (!faith) {
    return (
      <main id="content" className="mx-auto w-full max-w-3xl px-4 py-8">
        <h1 className="text-3xl text-sky">{tr("That page is not here")}</h1>
        <Link to="/faiths" search={{ q: "" }} className="mt-4 inline-flex min-h-11 items-center font-extrabold text-sky underline">
          {tr("Back to faiths")}
        </Link>
      </main>
    );
  }
  return <FaithPage faith={faith} />;
}

function FaithPage({ faith }: { faith: Faith }) {
  const tr = useTr();
  const figure = figureForFaith(faith.id);
  const facts = [
    { label: tr("What many people call it"), body: tr(faith.called) },
    { label: tr("A belief many people hold"), body: tr(faith.belief) },
    { label: tr(faith.bookTitle), body: tr(faith.book) },
    { label: tr(faith.placeTitle), body: tr(faith.place) },
    { label: tr(faith.festivalTitle), body: tr(faith.festival) },
    { label: tr("A kind act"), body: tr(faith.kind) },
    { label: tr("Food, dress, or another rule"), body: tr(faith.rule) },
    { label: tr("Pictures"), body: tr(faith.pictures) },
  ];

  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 py-6">
      <p className="text-sm font-extrabold text-olive">{tr(faith.people)}</p>
      <h1 className="mt-1 text-4xl text-sky">{tr(faith.name)}</h1>
      <figure className="mt-4">
        <img
          src={faith.image}
          alt={tr(faith.imageAlt)}
          className="aspect-[4/3] w-full rounded-3xl object-cover"
        />
        <PhotoCredit credit={faith.credit} />
      </figure>
      <p className="mt-4">
        <Link to="/people" hash={figure.id} className="font-extrabold text-sky underline">
          {tr("Profile: {name}", { name: tr(figure.name) })}
        </Link>
      </p>
      <p className="mt-4 flex items-center gap-3 text-base">
        <BookStandIcon className="size-10 shrink-0 text-olive" />
        <span>{tr(faith.greeting)}</span>
      </p>
      {faith.id === "sikhism" ? (
        <p className="mt-3 flex items-center gap-3">
          <KhandaIcon className="size-12 shrink-0 text-ink" />
          <span>{tr("The Khanda is a Sikh symbol.")}</span>
        </p>
      ) : null}
      <section className="mt-6 rounded-3xl bg-sand p-4 ring-1 ring-ink/15">
        <h2 className="text-2xl text-sky">{tr("Stories people tell")}</h2>
        <div className="mt-3 space-y-3">
          {figure.facts.map((fact) => (
            <p key={fact}>{tr(fact)}</p>
          ))}
        </div>
      </section>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {facts.map((fact) => (
          <section key={fact.label} className="rounded-2xl bg-sand p-4 ring-1 ring-ink/15">
            <h2 className="text-xl text-sky">{fact.label}</h2>
            <p className="mt-2">{fact.body}</p>
          </section>
        ))}
      </div>
    </main>
  );
}

function MoreFaiths() {
  const tr = useTr();
  const blocks = [
    {
      title: "Bahá’í Faith",
      body: [
        "Many people call this faith the Bahá’í Faith. Bahá’ís worship one God. They follow the teachings of Bahá’u’lláh.",
        "He taught that all people belong to one human family. Sacred writings guide prayer and daily life. Many Bahá’í families do not use pictures of Bahá’u’lláh.",
        "Bahá’u’lláh was born in Persia, now called Iran. He wrote many texts about peace, justice, and one human family.",
        "Many Bahá’ís meet in homes. A Bahá’í House of Worship is open to everyone. Many have nine sides and a quiet garden.",
        "Many adults fast for nineteen days in the year. Children are not asked to fast. A kind act is to tell the truth and to work for peace. Practices differ from family to family.",
      ],
    },
    {
      title: "Jainism",
      body: [
        "Many people call this faith Jainism. A central teaching is ahimsa. That means non-violence towards living beings.",
        "Many Jains follow the path taught by Mahavira and other teachers called Tirthankaras.",
        "Stories say Mahavira lived in India. He left a rich home and taught people not to harm living beings.",
        "A place of worship may be called a derasar or a temple. Many Jains are vegetarian. Some also avoid honey or root vegetables. Some do not. Practices differ.",
        "Many Jains mark Diwali. People tell the story of Mahavira at that time. A kind act is to walk carefully, and to speak in a way that does not hurt people.",
      ],
    },
    {
      title: "No religion",
      body: [
        "Some people do not follow a religion. Some say they are atheist, which means they do not believe in a god. Some say they are agnostic, which means they do not claim to know. Some say they are humanist, which means they care about human kindness and fairness. Some simply say they have none.",
        "These families are a real part of the world. They may still have rest days, birthdays, and meals together. Some mark a public holiday. Some do not.",
        "There is no one sacred book and no one place of worship. Some people love a library, a park, or home. There is no shared food rule. Never call their food strange.",
        "They can be kind. They are not a mistake. A class includes them with the same respect.",
      ],
    },
  ];

  return (
    <main id="content" className="mx-auto w-full max-w-5xl px-4 py-6">
      <h1 className="text-4xl text-sky">{tr("More faiths and none")}</h1>
      <p className="mt-2 max-w-2xl">{tr("Bahá’í, Jainism, and people who do not follow a religion.")}</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {blocks.map((block) => (
          <article key={block.title} className="rounded-3xl bg-sand p-4 ring-1 ring-ink/15">
            <h2 className="text-2xl text-olive">{tr(block.title)}</h2>
            <div className="mt-3 space-y-3">
              {block.body.map((paragraph) => (
                <p key={paragraph}>{tr(paragraph)}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

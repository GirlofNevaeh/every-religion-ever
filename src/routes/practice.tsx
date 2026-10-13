import { createFileRoute } from "@tanstack/react-router";
import meal from "@/assets/meal.jpg";
import { useTr } from "@/i18n/locale";

export const Route = createFileRoute("/practice")({
  head: () => ({ meta: [{ title: "Practice · Every Religion Ever" }] }),
  component: PracticePage,
});

const BANDS = [
  {
    id: "prayer",
    title: "Prayer and worship",
    tone: "bg-sky text-sand",
    paragraphs: [
      "Many families pray or worship. Some do this in a building. Some do this at home. Some sit in silence. Some sing. Some do not pray at all.",
      "Many Christians read the Bible and mark Sunday. Some mark Saturday. Prayer in church is often calm.",
      "Many Muslims pray facing Mecca. Prayer in a mosque is calm. Shoes come off.",
      "Many Jews rest on Shabbat and may pray in a synagogue.",
      "Many Hindus worship at a mandir and at home.",
      "Many Buddhists follow the Buddha’s teaching. Many do not pray to a creator. Some meditate in a temple or at home.",
      "Sikhs worship one God. Many pray and sing in a gurdwara. The Guru Granth Sahib rests on a raised seat.",
    ],
  },
  {
    id: "days",
    title: "Holy days",
    tone: "bg-sand text-ink",
    paragraphs: [
      "Christmas and Easter are Christian festivals. People tell the story of Jesus at both. Some families celebrate Christmas in December. Some celebrate it in January. The date of Easter moves.",
      "Ramadan and Eid are Muslim festivals. In Ramadan, many Muslims fast from dawn to sunset. Young children often do not fast. Eid is a joyful day of prayer, food, and giving. The dates move.",
      "Shabbat and Hanukkah are Jewish festivals. Shabbat is every week, from Friday evening to Saturday evening. Many Jews rest. Hanukkah is a festival of lights for eight nights.",
      "Diwali is a festival many Hindus, Sikhs, and Jains mark. It is not only one religion’s day. Many families light lamps. People tell different stories.",
      "Vesak is a festival for many Buddhists. People tell the story of the Buddha’s birth, awakening, and death. The date can differ.",
      "Vaisakhi is a festival for many Sikhs. It comes in April. People tell the story of the Khalsa.",
      "Some families with no religion still share a public holiday. Some do not. Practices differ from family to family.",
    ],
  },
  {
    id: "food",
    title: "Food",
    tone: "bg-olive text-sand",
    paragraphs: [
      "Halal and kosher are food rules. Halal is a rule many Muslims follow. Many do not eat pork. Kosher is a rule many Jews follow. Many do not eat pork or shellfish, and many do not mix meat and milk.",
      "Some families follow these rules every day. Some do not. Both can belong to the faith.",
      "Many Hindus are vegetarian. Some are not. Many Buddhists are vegetarian. Some are not. Langar, the shared meal at many gurdwaras, is often vegetarian so more people can eat.",
      "Some families fast. Some do not. A fast can mean no food and no drink for part of a day. It can mean eating less. Children are often not asked to fast.",
      "Never tell a child their food is strange. If you cannot eat something, say “No thank you.”",
    ],
  },
  {
    id: "kindness",
    title: "Kindness",
    tone: "bg-gold text-ink",
    paragraphs: [
      "Many faiths ask people to be kind. The words differ. The care can look alike.",
      "Many Christians try to love their neighbour. Many Muslims try to be honest and to give help. Many Jews give tzedakah. Many Hindus and many Jains try not to harm. Many Buddhists practise compassion. Many Sikhs offer seva, which is service, and share langar.",
      "Many Bahá’ís work for peace. Many people with no religion still try to be fair.",
      "A kind class leaves room for all of these, and for families who do not follow a religion.",
    ],
  },
];

function PracticePage() {
  const tr = useTr();
  return (
    <main id="content">
      <div className="mx-auto w-full max-w-5xl px-4 py-6">
        <h1 className="text-4xl text-sky">{tr("Practice")}</h1>
        <p className="mt-2 max-w-2xl">{tr("What many families do. Not every family does each thing.")}</p>
      </div>
      {BANDS.map((band) => (
        <section key={band.id} id={band.id} className={band.tone}>
          <div className="mx-auto w-full max-w-5xl px-4 py-8">
            <h2 className="text-3xl">{tr(band.title)}</h2>
            <div className="mt-4 max-w-3xl space-y-3 text-lg">
              {band.paragraphs.map((paragraph) => (
                <p key={paragraph}>{tr(paragraph)}</p>
              ))}
            </div>
            {band.id === "kindness" ? (
              <figure className="mt-6 max-w-3xl">
                <img
                  src={meal}
                  alt={tr("A drawing of an adult and two children sharing bread, watermelon, and water.")}
                  className="aspect-[3/2] w-full rounded-3xl object-cover"
                />
                <p className="mt-2 text-xs leading-snug">
                  {tr("Drawing of an adult and two children sharing food. Not a photograph.")}
                </p>
              </figure>
            ) : null}
          </div>
        </section>
      ))}
    </main>
  );
}

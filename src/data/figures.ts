import type { FaithId } from "@/data/faiths";
import type { PhotoCredit } from "@/data/photos";
import { photoCredit } from "@/data/photos";
import buddha from "@/assets/people/buddha.jpg";
import god from "@/assets/people/god.jpg";
import jesus from "@/assets/people/jesus.jpg";
import krishna from "@/assets/people/krishna.jpg";
import lamp from "@/assets/people/lamp.jpg";
import moses from "@/assets/people/moses.jpg";
import nanak from "@/assets/people/nanak.jpg";

export type Figure = {
  id: string;
  faithId: FaithId;
  name: string;
  faithName: string;
  image: string;
  imageAlt: string;
  drawn: boolean;
  credit?: PhotoCredit;
  paragraphs: string[];
  facts: string[];
};

export const FIGURES: Figure[] = [
  {
    id: "christianity",
    faithId: "christianity",
    name: "Jesus",
    faithName: "Christianity",
    image: jesus,
    imageAlt: "A drawing of Jesus with light skin, blue eyes, brown hair, and a blue mantle.",
    drawn: true,
    paragraphs: [
      "Many Christians tell the story of Jesus. Many call him the Son of God.",
      "Stories say he taught people to love their neighbour. He welcomed people who were left out.",
      "Many churches show a picture of him with light skin and blue eyes. Some churches do not use a picture. Practices differ.",
    ],
    facts: [
      "Stories say Jesus was born in Bethlehem. Mary was his mother. He grew up in Nazareth.",
      "He told stories, shared meals, and cared for people who were ill or left out. The Easter story says he died and rose again.",
    ],
  },
  {
    id: "god",
    faithId: "christianity",
    name: "God",
    faithName: "Some Christian pictures",
    image: god,
    imageAlt: "A drawing of God as a kindly wise man with white hair, a white beard, and a gold mantle.",
    drawn: true,
    paragraphs: [
      "Some Christian pictures show God as a kindly wise man with a white beard.",
      "Many Christians do not use a picture of God. They may show a cross, a church, or Jesus instead.",
      "Many Jews, Muslims, and Sikhs do not draw God. Their practice is different.",
    ],
    facts: [
      "Many Christians say God loves people and made the world. Some speak of the Father, the Son, and the Holy Spirit. Practices differ.",
      "Jews and Muslims also worship one God. They do not use this picture. The drawing is one Christian way of showing a kind wise man. It is not a photograph.",
    ],
  },
  {
    id: "islam",
    faithId: "islam",
    name: "Muhammad",
    faithName: "Islam",
    image: lamp,
    imageAlt: "A glass mosque lamp with coloured patterns and Arabic writing.",
    drawn: false,
    credit: photoCredit("lamp"),
    paragraphs: [
      "Many Muslims follow the teachings of Muhammad. They believe God gave him the Qur'an.",
      "Muslims often say “peace be upon him” after his name.",
      "Many Muslims do not make a picture of Muhammad, or of any prophet, or of God. This card shows a mosque lamp. It is an object, not a person.",
    ],
    facts: [
      "Stories say Muhammad was born in Mecca and was trusted for his honesty. He later lived in Medina.",
      "Muslims believe he was a prophet. They also honour earlier prophets, including Abraham, Moses, and Jesus. He taught prayer, honesty, and care for people in need.",
    ],
  },
  {
    id: "judaism",
    faithId: "judaism",
    name: "Moses",
    faithName: "Judaism",
    image: moses,
    imageAlt: "A drawing of Moses, an older man with a beard, holding two blank stone tablets.",
    drawn: true,
    paragraphs: [
      "Many Jews tell the story of Moses. The Torah says he led the people out of Egypt.",
      "Stories say he received teaching from God. The tablets are a reminder of that story. No writing is shown on them here.",
      "Some books draw Moses. Some families do not draw people. Many Jews do not make a picture of God.",
    ],
    facts: [
      "A story says Moses was born in Egypt when his people were not free. Later, God called him from a burning bush.",
      "Stories say he led the people across the sea and through the desert. At a mountain, he received teaching from God, including the Ten Commandments. Jews, Christians, and Muslims all tell stories of Moses.",
    ],
  },
  {
    id: "hinduism",
    faithId: "hinduism",
    name: "Krishna",
    faithName: "Hinduism",
    image: krishna,
    imageAlt: "A drawing of Krishna with blue skin, a yellow cloth, a flute, and a peacock feather.",
    drawn: true,
    paragraphs: [
      "Many Hindus love Krishna. Stories say he is an avatar of Vishnu. Hinduism has many sacred figures. Krishna is one of them.",
      "He is often shown with blue skin, a yellow cloth, a flute, and a peacock feather.",
      "A picture in a home or a mandir is treated with care. It is not a toy. Some families use a different sacred image.",
    ],
    facts: [
      "Stories of Krishna's childhood say he lived among cowherds, played a flute, and loved butter. Many families mark his birthday at Janmashtami.",
      "In the Bhagavad Gita he speaks with Arjuna about courage and doing what is right. Some families tell other stories, or show a different sacred figure.",
    ],
  },
  {
    id: "buddhism",
    faithId: "buddhism",
    name: "The Buddha",
    faithName: "Buddhism",
    image: buddha,
    imageAlt: "A drawing of the Buddha seated in orange robes, with a calm face.",
    drawn: true,
    paragraphs: [
      "The Buddha was a teacher. His name was Siddhartha Gautama.",
      "He taught a calm way to understand suffering, and to be kind.",
      "Many Buddhists use a picture or a statue as a reminder. The figure wears robes. It is not a toy.",
    ],
    facts: [
      "Stories say the Buddha was born a prince in Lumbini. He left the palace to understand why people suffer.",
      "He sat under a bodhi tree and became awake. Buddha means the Awakened One. He then taught a careful path of kind speech, kind acts, and kind thought.",
    ],
  },
  {
    id: "sikhism",
    faithId: "sikhism",
    name: "Guru Nanak",
    faithName: "Sikhism",
    image: nanak,
    imageAlt: "A drawing of Guru Nanak seated, with a beard, an orange turban, and prayer beads.",
    drawn: true,
    paragraphs: [
      "Guru Nanak was the first Sikh Guru. He taught that there is one God, and that people are equal.",
      "Some homes keep a picture of him. The picture is not worshipped. Some families do not use a picture.",
      "Sikhs today treat the Guru Granth Sahib as their Guru. That book is kept with great care. Many Sikhs do not draw God.",
    ],
    facts: [
      "Stories say Guru Nanak was born in Punjab. He travelled far, spoke with people of many faiths, and ate with everyone.",
      "He taught honest work and sharing. He sang his teachings. Later Gurus carried them on. The tenth Guru named the Guru Granth Sahib as the Guru that would remain.",
    ],
  },
];

export function figureForFaith(id: FaithId): Figure {
  const figure = FIGURES.find((item) => item.id === id);
  if (!figure) throw new Error(`Missing figure: ${id}`);
  return figure;
}

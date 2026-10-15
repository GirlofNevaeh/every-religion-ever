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
  },
];

export function figureForFaith(id: FaithId): Figure {
  const figure = FIGURES.find((item) => item.id === id);
  if (!figure) throw new Error(`Missing figure: ${id}`);
  return figure;
}

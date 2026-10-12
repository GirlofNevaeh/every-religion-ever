import type { FaithId } from "@/data/faiths";

export type YearStep = {
  id: string;
  day: number;
  when: string;
  name: string;
  who: string;
  faith: FaithId;
  body: string;
};

export const YEAR_STEPS: YearStep[] = [
  {
    id: "easter",
    day: 1,
    when: "Spring. The date moves.",
    name: "Easter",
    who: "Many Christians",
    faith: "christianity",
    body: "People tell the story that Jesus died and rose again. Many families go to church. Some share a meal. Some keep the day quiet.",
  },
  {
    id: "vaisakhi",
    day: 2,
    when: "April",
    name: "Vaisakhi",
    who: "Many Sikhs",
    faith: "sikhism",
    body: "People tell the story of the Khalsa, a community that promised courage, honesty, and care. Some families also mark a harvest. Many people go to a gurdwara and share langar.",
  },
  {
    id: "vesak",
    day: 3,
    when: "Late spring. The date can differ.",
    name: "Vesak",
    who: "Many Buddhists",
    faith: "buddhism",
    body: "People tell the story of the Buddha’s birth, his awakening, and his death. Many people offer lamps or flowers. Some places use another day. The day stays calm.",
  },
  {
    id: "ramadan-eid",
    day: 4,
    when: "The dates move through the year.",
    name: "Ramadan and Eid",
    who: "Many Muslims",
    faith: "islam",
    body: "In Ramadan, many Muslims fast from dawn to sunset. Young children, and people who are ill, often do not fast. Eid comes after Ramadan. It is a festival of prayer, food, and giving. There is more than one Eid. The Muslim calendar follows the moon, so the dates move.",
  },
  {
    id: "diwali",
    day: 5,
    when: "Autumn",
    name: "Diwali",
    who: "Many Hindus, many Sikhs, and many Jains",
    faith: "hinduism",
    body: "Diwali is a festival of lights. It is not only one religion’s day. Many Hindus light lamps and share sweets. People tell stories, and families do not all tell the same one. Many Sikhs mark Bandi Chhor Divas around this time. Many Jains remember the teacher Mahavira.",
  },
  {
    id: "hanukkah",
    day: 6,
    when: "Late autumn or winter. The date moves.",
    name: "Hanukkah",
    who: "Many Jews",
    faith: "judaism",
    body: "Hanukkah lasts eight nights. Many families light a hanukkiah. People tell a story of a small amount of oil that burned for eight days. Shabbat is different. It is not once a year. Many Jews rest every week, from Friday evening to Saturday evening.",
  },
  {
    id: "christmas",
    day: 7,
    when: "Winter. Some families use January.",
    name: "Christmas",
    who: "Many Christians",
    faith: "christianity",
    body: "People tell the story of the birth of Jesus. Many families go to church, share food, and give gifts. Some celebrate in December. Some celebrate in January. Some families with no religion still share a meal on this public day. Some do not.",
  },
];

import { FAITHS } from "@/data/faiths";
import { HOLIDAY_PROJECTS } from "@/data/projects";
import { YEAR_STEPS } from "@/data/year";

export type CatalogHit = {
  title: string;
  kind: string;
  href: string;
  text: string;
};

const EXTRA: CatalogHit[] = [
  {
    title: "Prayer and worship",
    kind: "Practice",
    href: "/practice#prayer",
    text: "prayer worship sunday mecca shabbat mandir temple gurdwara mosque church synagogue calm",
  },
  {
    title: "Holy days",
    kind: "Practice",
    href: "/practice#days",
    text: "christmas easter ramadan eid shabbat hanukkah diwali vesak vaisakhi festival holy day",
  },
  {
    title: "Food",
    kind: "Practice",
    href: "/practice#food",
    text: "halal kosher vegetarian fast fasting food langar pork beef meal",
  },
  {
    title: "Kindness",
    kind: "Practice",
    href: "/practice#kindness",
    text: "kindness seva tzedakah ahimsa compassion neighbour guest welcome",
  },
  {
    title: "A walk through the year",
    kind: "Time",
    href: "/time",
    text: "year seasons easter vaisakhi vesak ramadan eid diwali hanukkah christmas shabbat",
  },
  {
    title: "Places of worship",
    kind: "Places",
    href: "/places",
    text: "church mosque synagogue mandir temple gurdwara map world",
  },
  {
    title: "How to be a guest",
    kind: "Guest",
    href: "/about",
    text: "guest shoes quiet photograph head covering visit worship custom",
  },
  {
    title: "Bahá’í Faith",
    kind: "Faith",
    href: "/faiths/more",
    text: "baha'i bahai bahaullah house of worship peace unity nineteen",
  },
  {
    title: "Jainism",
    kind: "Faith",
    href: "/faiths/more",
    text: "jain jainism ahimsa mahavira diwali non-violence derasar",
  },
  {
    title: "No religion",
    kind: "Faith",
    href: "/faiths/more",
    text: "none no religion atheist agnostic humanist kindness fairness family",
  },
];

export function catalog(): CatalogHit[] {
  const faiths: CatalogHit[] = FAITHS.map((faith) => ({
    title: faith.name,
    kind: "Faith",
    href: `/faiths/${faith.id}`,
    text: `${faith.name} ${faith.people} ${faith.card} ${faith.bookTitle} ${faith.placeTitle} ${faith.festivalTitle} ${faith.keywords}`,
  }));
  const steps: CatalogHit[] = YEAR_STEPS.map((step) => ({
    title: step.name,
    kind: "Festival",
    href: "/time",
    text: `${step.name} ${step.when} ${step.who} ${step.body}`,
  }));
  const projects: CatalogHit[] = HOLIDAY_PROJECTS.map((project) => ({
    title: `${project.name} project`,
    kind: "Work",
    href: `/work#${project.id}`,
    text: `${project.name} ${project.faith} ${project.when} ${project.who} ${project.note} ${project.own} ${project.team} holiday holy day project class work`,
  }));
  return [...faiths, ...steps, ...projects, ...EXTRA];
}

export function searchCatalog(query: string): CatalogHit[] {
  const words = query
    .toLowerCase()
    .replace(/['’]/g, "")
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean);
  if (words.length === 0) return [];
  return catalog().filter((item) => {
    const hay = `${item.title} ${item.kind} ${item.text}`.toLowerCase().replace(/['’]/g, "");
    return words.every((word) => hay.includes(word));
  });
}

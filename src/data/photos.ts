export type PhotoCredit = {
  id: string;
  title: string;
  author: string;
  authorUrl?: string;
  license: string;
  licenseUrl?: string;
  sourceUrl: string;
  note?: string;
};

export const PHOTO_CREDITS: PhotoCredit[] = [
  {
    id: "church",
    title: "Church of St Andrew, Greensted — nave and south porch",
    author: "Acabashi",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:%27Church_of_St_Andrew%27_Greensted,_Ongar,_Essex_England_-_nave_and_south_porch.JPG",
    note: "Shown here smaller. The lower churchyard was cropped.",
  },
  {
    id: "mosque",
    title: "Sultan Ahmed Mosque, Istanbul",
    author: "kallerna",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sultan_Ahmed_Mosque_2022_2.jpg",
    note: "Shown here smaller. The right edge was cropped.",
  },
  {
    id: "synagogue",
    title: "New West End Synagogue exterior",
    author: "Chesdovi",
    authorUrl: "https://en.wikipedia.org/wiki/User:Chesdovi",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:New_West_End_Synagogue_exterior.JPG",
    note: "Shown here smaller. The steps were cropped.",
  },
  {
    id: "mandir",
    title: "BAPS Shri Swaminarayan Mandir, London",
    author: "Mark Ahsmann",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:BAPS_Shri_Swaminarayan_Mandir_London.jpg",
  },
  {
    id: "stupa",
    title: "Jetavanaramaya Stupa, Anuradhapura",
    author: "A.Savin",
    license: "Free Art License",
    licenseUrl: "https://artlibre.org/licence/lal/en",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:SL_Anuradhapura_asv2020-01_img24_Jetavanaramaya_Stupa.jpg",
  },
  {
    id: "gurdwara",
    title: "Golden Temple, Amritsar",
    author: "shankar s.",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:The_Golden_Temple-_Harmandir_Sahib_is_the_holiest_place_for_the_Sikhs_(38222811534).jpg",
  },
];

export function photoCredit(id: string): PhotoCredit {
  const credit = PHOTO_CREDITS.find((item) => item.id === id);
  if (!credit) throw new Error(`Missing photo credit: ${id}`);
  return credit;
}

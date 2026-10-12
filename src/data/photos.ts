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
    title: "Parish Church of St Michael the Archangel, Cuckmere Valley",
    author: "Michael Coppins",
    authorUrl: "https://commons.wikimedia.org/wiki/User:Michael_Coppins",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Cuckmere_Valley_-_The_Parish_Church_of_St_Michael_the_Archangel_-_20230417133233.jpg",
    note: "Shown here smaller.",
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
  {
    id: "lamp",
    title: "Mosque lamp, Syria or Egypt, about 1360",
    author: "Vassil",
    authorUrl: "https://commons.wikimedia.org/wiki/User:Vassil",
    license: "CC0",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:British_Museum_The_Islamic_world_Mosque_lamp_Enamelled_and_gilded_glass_Syria_or_Egypt_About_1360_21022019_7585.jpg",
    note: "Shown here smaller. The museum label was cropped.",
  },
];

export function photoCredit(id: string): PhotoCredit {
  const credit = PHOTO_CREDITS.find((item) => item.id === id);
  if (!credit) throw new Error(`Missing photo credit: ${id}`);
  return credit;
}

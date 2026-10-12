export type Stage = {
  id: string;
  label: string;
  own: string;
  team: string;
};

export const STAGES: Stage[] = [
  {
    id: "p1",
    label: "Primary 1",
    own: "Draw a pattern of stars, leaves, or lamps. Do not draw God. Do not draw Muhammad. Do not draw a Guru.",
    team: "Practise a kind class welcome. Say hello. Offer a chair. Use a quiet voice.",
  },
  {
    id: "p2",
    label: "Primary 2",
    own: "Draw one place of worship from the outside. Choose a church, a mosque, a synagogue, a mandir, a temple, or a gurdwara. Draw the building, not a holy person.",
    team: "Match each building to its name. Say one calm sentence about it.",
  },
  {
    id: "p3",
    label: "Primary 3",
    own: "Learn one greeting a family may use. You may choose Peace be with you, As-salamu alaykum, Shalom, Namaste, Sat Sri Akal, or Hello.",
    team: "Make a list of kind acts that any class can do.",
  },
  {
    id: "p4",
    label: "Primary 4",
    own: "Label the festival calendar. Use the word bank. Remember that some dates move.",
    team: "Plan a quiet visit list: voice, shoes, photos, and questions to ask.",
  },
  {
    id: "p5",
    label: "Primary 5",
    own: "Write three sentences about one place of worship. Use the words “many people”.",
    team: "Plan a shared snack. Include a choice for friends who do not eat some foods. Do not call any food strange.",
  },
  {
    id: "p6",
    label: "Primary 6",
    own: "Choose two festivals. Write what many families do. Do not say which festival is better.",
    team: "Make a guest card. Include a quiet voice, shoes when that is the custom, and asking before photos.",
  },
  {
    id: "p7",
    label: "Primary 7",
    own: "Write a short paragraph that shows Diwali is marked by many Hindus, many Sikhs, and many Jains.",
    team: "Plan a kind class welcome for a visitor. Leave room for different faiths and for no religion.",
  },
];

export const CALENDAR_SLOTS = [
  { id: "spring", label: "Spring. The date moves.", answer: "Easter" },
  { id: "april", label: "April", answer: "Vaisakhi" },
  { id: "late-spring", label: "Late spring. The date can differ.", answer: "Vesak" },
  { id: "fast", label: "A fasting month. The date moves.", answer: "Ramadan" },
  { id: "eid", label: "A joyful festival after that fast. The date moves.", answer: "Eid" },
  { id: "autumn", label: "Autumn", answer: "Diwali" },
  { id: "lights", label: "Late autumn or winter. The date moves.", answer: "Hanukkah" },
  { id: "winter", label: "Winter. Some families use January.", answer: "Christmas" },
  { id: "week", label: "Every week", answer: "Shabbat" },
] as const;

export const CALENDAR_WORDS = [
  "Christmas",
  "Diwali",
  "Easter",
  "Eid",
  "Hanukkah",
  "Ramadan",
  "Shabbat",
  "Vaisakhi",
  "Vesak",
] as const;

export const PLACE_PAIRS = [
  { place: "Church", faith: "Christianity" },
  { place: "Mosque", faith: "Islam" },
  { place: "Synagogue", faith: "Judaism" },
  { place: "Mandir", faith: "Hinduism" },
  { place: "Temple", faith: "Buddhism" },
  { place: "Gurdwara", faith: "Sikhism" },
] as const;

export type HolidayProject = {
  id: string;
  name: string;
  faith: string;
  when: string;
  who: string;
  note: string;
  own: string;
  prompts: string[];
  team: string;
  steps: string[];
  care: string;
};

export const HOLIDAY_PROJECTS: HolidayProject[] = [
  {
    id: "easter",
    name: "Easter",
    faith: "Christianity",
    when: "Spring. The date moves.",
    who: "Many Christians",
    note: "People tell the story that Jesus died and rose again. Many families go to church. Some share a meal. Some keep the day quiet.",
    own: "Draw spring leaves, or a simple cross as a shape. Do not draw Jesus. Do not draw God. Then finish the lines.",
    prompts: ["Many Christians mark Easter by", "The date of Easter moves. That means", "Some families keep the day quiet by"],
    team: "Plan a quiet spring welcome. Leave room for friends who do not mark Easter.",
    steps: [
      "Choose a calm hello the whole class can use.",
      "Plan a snack with more than one choice.",
      "Write one kind sentence for the class board.",
    ],
    care: "Do not act out the story. Do not draw a holy person.",
  },
  {
    id: "vaisakhi",
    name: "Vaisakhi",
    faith: "Sikhism",
    when: "April",
    who: "Many Sikhs",
    note: "People tell the story of the Khalsa, a community that promised courage, honesty, and care. Some families also mark a harvest. Many people go to a gurdwara and share langar.",
    own: "Draw a gurdwara from the outside, or a plain orange flag on a pole. Do not draw a Guru. Then finish the lines.",
    prompts: ["Vaisakhi comes in", "Many Sikhs remember the Khalsa, who promised", "Langar is a shared meal. Everyone may"],
    team: "Plan a snack where everyone can sit together. Offer a vegetarian choice so more friends can eat.",
    steps: [
      "List foods the people in your team can all eat.",
      "Plan seats so no one is left on their own.",
      "Practise a respectful hello. You may say Sat Sri Akal, or Hello.",
    ],
    care: "A turban is not a costume. Do not draw the Gurus. The Guru Granth Sahib is a holy book, not a person you draw.",
  },
  {
    id: "vesak",
    name: "Vesak",
    faith: "Buddhism",
    when: "Late spring. The date can differ.",
    who: "Many Buddhists",
    note: "People tell the story of the Buddha’s birth, his awakening, and his death. Many people offer lamps or flowers. Some places use another day. The day stays calm.",
    own: "Draw a lotus or a lamp. Do not draw the Buddha as a toy. Then finish the lines.",
    prompts: ["A story many people tell is about the Buddha’s", "They also remember his", "Many people bring"],
    team: "Plan one quiet giving act for the class.",
    steps: [
      "Choose flowers for a shared table, or a kindness note.",
      "Use a quiet voice while you plan.",
      "Leave room for friends who do not mark Vesak.",
    ],
    care: "A statue of the Buddha is a reminder. It is not a toy. Draw a lotus or a lamp.",
  },
  {
    id: "ramadan",
    name: "Ramadan",
    faith: "Islam",
    when: "A fasting month. The date moves.",
    who: "Many Muslims",
    note: "Many Muslims do not eat or drink from dawn to sunset. Young children, and people who are ill, often do not fast. Many families eat before dawn and again after sunset. The Muslim calendar follows the moon, so the date moves.",
    own: "Draw a moon and star pattern. Do not draw Muhammad. Do not draw God. Then finish the lines.",
    prompts: ["In Ramadan, many Muslims", "Young children often do not fast because", "After sunset, many families"],
    team: "Plan a kind day for a friend who may be fasting.",
    steps: [
      "Offer a quiet place at lunch. Do not tease.",
      "Do not call the fast strange. Do not tell a child their food is strange.",
      "Plan a kind word. Do not plan a food joke.",
    ],
    care: "Do not draw any prophet of Islam. Do not act out prayer as a joke.",
  },
  {
    id: "eid",
    name: "Eid",
    faith: "Islam",
    when: "The dates move. There is more than one Eid.",
    who: "Many Muslims",
    note: "Eid al-Fitr comes after Ramadan. It is a festival of prayer, food, and giving. Eid al-Adha comes at another time. People tell a story of trust and of sharing food. Families do not all mark the day in the same way.",
    own: "Draw a pattern, a lantern, or a shared plate of food. Do not draw a holy person. Then finish the lines.",
    prompts: ["Eid al-Fitr comes after", "Eid al-Adha is another Eid. People may share", "A kind act on Eid can be"],
    team: "Plan a class greeting and a snack with choices.",
    steps: [
      "Practise As-salamu alaykum, or Hello.",
      "Choose food with choices, including food with no pork, so more friends can share.",
      "Plan one way to give, such as a cheerful note for someone.",
    ],
    care: "Do not draw God or any prophet. Do not act out a sacred story.",
  },
  {
    id: "diwali",
    name: "Diwali",
    faith: "Hinduism, Sikhism, and Jainism",
    when: "Autumn",
    who: "Many Hindus, many Sikhs, and many Jains",
    note: "Diwali is a festival of lights. It is not only one religion’s day. Many Hindus light lamps and share sweets. Families do not all tell the same story. Many Sikhs mark Bandi Chhor Divas around this time. Many Jains remember the teacher Mahavira.",
    own: "Draw a pattern of lamps. Do not say the day belongs to only one faith. Then finish the lines.",
    prompts: ["Many Hindus mark Diwali by", "Many Sikhs mark Bandi Chhor Divas around this time. People tell a story of", "Many Jains remember"],
    team: "Plan a paper lamp display. Do not use a real flame.",
    steps: [
      "Make lamps from paper. Use calm colours.",
      "Add a label: many Hindus, many Sikhs, and many Jains mark this time.",
      "Families tell different stories. Write that, if you wish.",
    ],
    care: "Do not use a sacred image as a toy. Lamps, patterns, and flowers are enough.",
  },
  {
    id: "hanukkah",
    name: "Hanukkah",
    faith: "Judaism",
    when: "Late autumn or winter. The date moves.",
    who: "Many Jews",
    note: "Hanukkah lasts eight nights. Many families light a hanukkiah. People tell a story of a small amount of oil that burned for eight days. Shabbat is different. It comes every week.",
    own: "Draw a hanukkiah with eight lights and one helper light. Do not draw God. Then finish the lines.",
    prompts: ["Hanukkah lasts", "A hanukkiah is", "Many families light the lamps for"],
    team: "Plan eight small kind acts, one for each night.",
    steps: [
      "Write eight short acts, such as holding a door or sharing a pencil.",
      "Make sure no one is left out of the plan.",
      "Remember that Shabbat comes every week.",
    ],
    care: "Do not draw God. A kippah is not a costume.",
  },
  {
    id: "christmas",
    name: "Christmas",
    faith: "Christianity",
    when: "Winter. Some families use January.",
    who: "Many Christians",
    note: "People tell the story of the birth of Jesus. Many families go to church, share food, and give gifts. Some celebrate in December. Some celebrate in January. Some families with no religion share a meal on this public day. Some do not.",
    own: "Draw a church, a candle, or a wrapped gift. Do not draw Jesus. Do not draw Mary. Do not draw God. Then finish the lines.",
    prompts: ["Some families mark Christmas in", "Some families mark it in", "A gift can also be a kind act, such as"],
    team: "Plan a winter kindness list that includes friends who do not mark Christmas.",
    steps: [
      "List three kind acts that need no gift.",
      "Include a friend who does not celebrate.",
      "Write what many families do, and what some families do not do.",
    ],
    care: "Do not draw God, Jesus, or Mary. Show a church, a candle, or a gift.",
  },
  {
    id: "shabbat",
    name: "Shabbat",
    faith: "Judaism",
    when: "Every week",
    who: "Many Jews",
    note: "Shabbat is not once a year. It begins on Friday evening and ends on Saturday evening. Many Jews light candles, share a meal, and rest from everyday work. Some families eat a special bread. Some families rest in a different way.",
    own: "Draw two candles and a loaf of bread. Do not draw God. Then finish the lines.",
    prompts: ["Shabbat begins on Friday", "Shabbat ends on Saturday", "Many families rest by"],
    team: "Plan a short Friday calm time. It is a class pause. It is not a copy of a family’s prayer.",
    steps: [
      "Choose one quiet minute and one kind sentence.",
      "Leave room for children who do not mark Shabbat.",
      "Do not treat a kippah, or any head covering, as dress-up.",
    ],
    care: "Do not act out prayer. Do not draw God. Rest can look different in each home.",
  },
];

export const YEAR_PROJECT_LINKS: Record<string, { id: string; label: string }[]> = {
  easter: [{ id: "easter", label: "Easter project" }],
  vaisakhi: [{ id: "vaisakhi", label: "Vaisakhi project" }],
  vesak: [{ id: "vesak", label: "Vesak project" }],
  "ramadan-eid": [
    { id: "ramadan", label: "Ramadan project" },
    { id: "eid", label: "Eid project" },
  ],
  diwali: [{ id: "diwali", label: "Diwali project" }],
  hanukkah: [
    { id: "hanukkah", label: "Hanukkah project" },
    { id: "shabbat", label: "Shabbat project" },
  ],
  christmas: [{ id: "christmas", label: "Christmas project" }],
};

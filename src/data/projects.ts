export type YearProject = {
  id: string;
  label: string;
  ownTitle: string;
  own: string;
  ownSteps: string[];
  prompts: string[];
  draw: boolean;
  teamTitle: string;
  team: string;
  teamSteps: string[];
  care: string;
};

export const YEAR_PROJECTS: YearProject[] = [
  {
    id: "p1",
    label: "Primary 1",
    ownTitle: "A calm pattern",
    own: "Draw a pattern of stars, leaves, or lamps. Use calm colours.",
    ownSteps: ["Choose stars, leaves, or lamps.", "Draw the same shape again and again.", "Colour the pattern."],
    prompts: ["I drew"],
    draw: true,
    teamTitle: "A kind welcome",
    team: "Practise how a class can welcome a friend.",
    teamSteps: [
      "One person says hello.",
      "One person offers a chair.",
      "Everyone else uses a quiet voice.",
      "Swap jobs and try again.",
    ],
    care: "Do not draw God. Do not draw Muhammad. Do not draw a Guru.",
  },
  {
    id: "p2",
    label: "Primary 2",
    ownTitle: "A place from the outside",
    own: "Draw one place of worship from the outside. Draw the building, not a holy person.",
    ownSteps: [
      "Choose a church, a mosque, a synagogue, a mandir, a temple, or a gurdwara.",
      "Draw the outside.",
      "Write the name of the building.",
    ],
    prompts: ["This building is a"],
    draw: true,
    teamTitle: "Name the building",
    team: "Match each building to its faith. Say one calm sentence.",
    teamSteps: [
      "Lay out the six places: church, mosque, synagogue, mandir, temple, gurdwara.",
      "Match each place to a faith.",
      "Each person says one calm sentence about one building.",
    ],
    care: "Draw the building. Do not draw a holy person.",
  },
  {
    id: "p3",
    label: "Primary 3",
    ownTitle: "One greeting",
    own: "Learn one greeting a family may use. Say it kindly. Do not say it as a joke.",
    ownSteps: [
      "Choose Peace be with you, As-salamu alaykum, Shalom, Namaste, Sat Sri Akal, or Hello.",
      "Say it in a calm voice.",
      "Write the greeting.",
    ],
    prompts: ["My greeting is", "A family may use it to say"],
    draw: false,
    teamTitle: "Kind acts",
    team: "Make a list of kind acts that any class can do.",
    teamSteps: [
      "Write three kind acts.",
      "Check that each act can include every child.",
      "Read the list in a quiet voice.",
    ],
    care: "A greeting is not a costume and not a joke.",
  },
  {
    id: "p4",
    label: "Primary 4",
    ownTitle: "One time in the year",
    own: "Choose one festival or rest day. Write when it comes, and one thing many families do. Some dates move.",
    ownSteps: [
      "Choose Easter, Vaisakhi, Vesak, Ramadan, Eid, Diwali, Hanukkah, Christmas, or Shabbat.",
      "Write the time of year. Shabbat comes every week.",
      "Write one thing many families do.",
    ],
    prompts: ["I chose", "It comes", "Many families"],
    draw: false,
    teamTitle: "A quiet visit",
    team: "Plan a list for a quiet visit.",
    teamSteps: [
      "Write the rule for voices.",
      "Write when shoes come off, and when they stay on.",
      "Write the rule for photos.",
      "Write one question you may ask a host.",
    ],
    care: "Do not say one festival is better. Do not draw a holy person.",
  },
  {
    id: "p5",
    label: "Primary 5",
    ownTitle: "Three sentences",
    own: "Write three sentences about one place of worship. Use the words “many people”.",
    ownSteps: [
      "Choose a church, a mosque, a synagogue, a mandir, a temple, or a gurdwara.",
      "Write what many people call it.",
      "Write what many people do there, and one careful rule.",
    ],
    prompts: ["Many people call this place a", "Many people", "A careful rule is"],
    draw: false,
    teamTitle: "A shared snack",
    team: "Plan a snack with a choice for friends who do not eat some foods.",
    teamSteps: [
      "List foods the team can share.",
      "Add a choice with no pork.",
      "Add a vegetarian choice.",
      "Do not call any food strange.",
    ],
    care: "Many families follow a food rule. Some do not. Both can belong.",
  },
  {
    id: "p6",
    label: "Primary 6",
    ownTitle: "Two festivals",
    own: "Choose two festivals. Write what many families do. Write what some families do not do.",
    ownSteps: [
      "Choose two festivals from the year.",
      "For each one, write what many families do.",
      "For each one, write something some families do not do.",
    ],
    prompts: ["Festival one is", "Many families", "Some families do not", "Festival two is", "Many families", "Some families do not"],
    draw: false,
    teamTitle: "A guest card",
    team: "Make a card a visitor can read before they come.",
    teamSteps: [
      "Write “Use a quiet voice.”",
      "Write when shoes come off.",
      "Write “Ask before you take a photo.”",
      "Add one kind sentence.",
    ],
    care: "Do not say which festival is better.",
  },
  {
    id: "p7",
    label: "Primary 7",
    ownTitle: "A shared festival",
    own: "Write a short paragraph that shows Diwali is marked by many Hindus, many Sikhs, and many Jains.",
    ownSteps: [
      "Write that Diwali is a festival of lights in autumn.",
      "Name the three groups of families.",
      "Add that families tell different stories.",
    ],
    prompts: ["Diwali comes in", "It is marked by", "Families tell"],
    draw: false,
    teamTitle: "A welcome plan",
    team: "Plan a kind welcome for a visitor. Leave room for different faiths and for no religion.",
    teamSteps: [
      "Choose a calm hello the whole class can use.",
      "Plan a chair and a quiet place.",
      "Give each person on the team one job.",
      "Check that a child with no religion is welcome too.",
    ],
    care: "Leave room for families who do not follow a religion.",
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

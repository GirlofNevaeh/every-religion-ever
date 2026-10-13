import { MORE_QUESTIONS } from "@/data/questions-more";

export type QuestionTag =
  | "christianity"
  | "islam"
  | "judaism"
  | "hinduism"
  | "buddhism"
  | "sikhism"
  | "more"
  | "guest";

export type Question = {
  id: string;
  tag: QuestionTag;
  prompt: string;
  answer: string;
  wrong: [string, string];
};

export const QUESTIONS: Question[] = [
  { id: "q001", tag: "christianity", prompt: "What is a church?", answer: "A Christian place of worship", wrong: ["A swimming pool", "A kind of soup"] },
  { id: "q002", tag: "christianity", prompt: "What book do many Christians read?", answer: "The Bible", wrong: ["A bus map", "A cookery card"] },
  { id: "q003", tag: "christianity", prompt: "What day do many Christians mark for worship?", answer: "Sunday", wrong: ["Only midnight", "A day with no rest"] },
  { id: "q004", tag: "christianity", prompt: "What is Christmas for many Christians?", answer: "A festival about the birth of Jesus", wrong: ["A sports final", "A food rule"] },
  { id: "q005", tag: "christianity", prompt: "What is Easter for many Christians?", answer: "A festival when people tell the story that Jesus rose again", wrong: ["A new school shoe", "A moon chart"] },
  { id: "q006", tag: "christianity", prompt: "What kind act do many Christians try to practise?", answer: "Love your neighbour", wrong: ["Hide from guests", "Mock a prayer"] },
  { id: "q007", tag: "christianity", prompt: "What can Lent mean for some Christians?", answer: "A time to eat less or give something up", wrong: ["A metal hat", "A race"] },
  { id: "q008", tag: "christianity", prompt: "What plain symbol do many churches use?", answer: "A cross", wrong: ["A toy crown", "A football"] },
  { id: "q009", tag: "christianity", prompt: "Do all Christian families worship in the same way?", answer: "No. Practices differ.", wrong: ["Yes. Every family must match.", "Only babies choose the rules."] },
  { id: "q010", tag: "christianity", prompt: "What can stand for Christianity if the class does not draw Jesus?", answer: "A church, a cross, a Bible, or a candle", wrong: ["A cartoon of God", "A drawing of Mary"] },
  { id: "q011", tag: "christianity", prompt: "What is a cathedral?", answer: "A large church", wrong: ["A cooking pot", "A fast"] },
  { id: "q012", tag: "christianity", prompt: "People tell the Christmas story about a birth. Whose birth?", answer: "Jesus", wrong: ["A river", "A sports team"] },
  { id: "q013", tag: "christianity", prompt: "What should you do before you take a photo in a church?", answer: "Ask", wrong: ["Stand on the table", "Shout"] },
  { id: "q014", tag: "christianity", prompt: "Some churches share bread in worship. What is fair to say?", answer: "Practices differ from church to church.", wrong: ["Every child must eat it.", "The bread is a joke."] },
  { id: "q015", tag: "christianity", prompt: "Some Christians celebrate Christmas in December. What else is true?", answer: "Some celebrate it in January.", wrong: ["All must use one date.", "Christmas is a food rule."] },
  { id: "q016", tag: "christianity", prompt: "Which sentence is kind to a Christian friend?", answer: "I respect your festival.", wrong: ["Your family is wrong.", "My way wins."] },
  { id: "q017", tag: "islam", prompt: "What is a mosque?", answer: "A Muslim place of worship", wrong: ["A train station", "A winter coat"] },
  { id: "q018", tag: "islam", prompt: "What is another word many people use for a mosque?", answer: "Masjid", wrong: ["Kippah", "Stupa"] },
  { id: "q019", tag: "islam", prompt: "Which book is sacred for Muslims?", answer: "The Qur'an", wrong: ["A bus ticket", "A recipe card"] },
  { id: "q020", tag: "islam", prompt: "Who do Muslims worship?", answer: "One God. Allah means God.", wrong: ["A different god for each day", "No one, and prayer is a joke"] },
  { id: "q021", tag: "islam", prompt: "Which way do Muslims face to pray?", answer: "Toward Mecca", wrong: ["Toward the nearest shop", "Any way, with no care"] },
  { id: "q022", tag: "islam", prompt: "What is the Kaaba?", answer: "The cube-shaped building in Mecca that Muslims face in prayer", wrong: ["A sweet bread", "A school bell"] },
  { id: "q023", tag: "islam", prompt: "What do many Muslim families do in Ramadan?", answer: "They fast from dawn to sunset.", wrong: ["They stay awake all year.", "They stop being kind."] },
  { id: "q024", tag: "islam", prompt: "Who often does not fast in Ramadan?", answer: "Young children, and people who are ill", wrong: ["Every baby must fast", "Only visitors"] },
  { id: "q025", tag: "islam", prompt: "What is Eid?", answer: "A festival of joy, with prayer, food, and giving", wrong: ["A type of shoe", "A map symbol"] },
  { id: "q026", tag: "islam", prompt: "Why do the dates of Ramadan move?", answer: "The Muslim calendar follows the moon.", wrong: ["Clocks run backwards.", "The dates never change."] },
  { id: "q027", tag: "islam", prompt: "What does halal describe?", answer: "A food rule many Muslims follow", wrong: ["A dance step", "A building tax"] },
  { id: "q028", tag: "islam", prompt: "Which food do many Muslims not eat?", answer: "Pork", wrong: ["Apples", "Rice"] },
  { id: "q029", tag: "islam", prompt: "What do people usually do with shoes at a mosque?", answer: "Take them off", wrong: ["Throw them", "Wear them on the prayer rug"] },
  { id: "q030", tag: "islam", prompt: "How do many Muslims pray?", answer: "In a calm, careful way", wrong: ["As a joke", "Only by shouting"] },
  { id: "q031", tag: "islam", prompt: "What is a hijab for many Muslim women and girls?", answer: "A hair covering worn with care, not a costume", wrong: ["A toy", "A food"] },
  { id: "q032", tag: "islam", prompt: "Does every Muslim woman wear a hijab?", answer: "No. Practices differ.", wrong: ["Yes. There is only one way.", "Only babies wear it."] },
  { id: "q033", tag: "islam", prompt: "Do many Muslims draw the prophets?", answer: "No. Many Muslims do not draw prophets.", wrong: ["Yes. It is a game.", "Only as a joke."] },
  { id: "q034", tag: "islam", prompt: "What kind act does Islam ask for?", answer: "Be honest, and give to people in need.", wrong: ["Keep every gift hidden.", "Laugh at prayer."] },
  { id: "q035", tag: "judaism", prompt: "What is a synagogue?", answer: "A Jewish place of worship", wrong: ["A farm tool", "A birthday cake"] },
  { id: "q036", tag: "judaism", prompt: "What is the Torah?", answer: "Sacred teaching at the heart of Jewish life, often on a scroll", wrong: ["A pair of shoes", "A sport"] },
  { id: "q037", tag: "judaism", prompt: "What is Shabbat?", answer: "A weekly rest from Friday evening to Saturday evening", wrong: ["A summer camp", "A food shop"] },
  { id: "q038", tag: "judaism", prompt: "What do many Jewish families do on Shabbat?", answer: "They rest, share a meal, and may light candles.", wrong: ["They must travel all night.", "They mock other festivals."] },
  { id: "q039", tag: "judaism", prompt: "What is Hanukkah?", answer: "A festival of lights", wrong: ["A kind of hat", "A race"] },
  { id: "q040", tag: "judaism", prompt: "What is a hanukkiah?", answer: "A special lamp many families light at Hanukkah", wrong: ["A boat", "A shoe"] },
  { id: "q041", tag: "judaism", prompt: "For how many nights do many families light lamps at Hanukkah?", answer: "Eight", wrong: ["One", "Fifty"] },
  { id: "q042", tag: "judaism", prompt: "What does kosher describe?", answer: "A food rule many Jews follow", wrong: ["A game score", "A weather word"] },
  { id: "q043", tag: "judaism", prompt: "Do all Jewish families keep kosher?", answer: "No. Some do. Some do not.", wrong: ["Yes. All must.", "Kosher means a song."] },
  { id: "q044", tag: "judaism", prompt: "What is tzedakah?", answer: "Giving help to people in need", wrong: ["A loud joke", "A type of fish"] },
  { id: "q045", tag: "judaism", prompt: "What is a kippah?", answer: "A head covering some Jews wear", wrong: ["A costume for laughs", "A meal"] },
  { id: "q046", tag: "judaism", prompt: "Do many Jews draw God?", answer: "No", wrong: ["Yes, as a cartoon", "Only on the floor"] },
  { id: "q047", tag: "judaism", prompt: "What does shalom mean?", answer: "Peace", wrong: ["Hurry", "Soup"] },
  { id: "q048", tag: "judaism", prompt: "When does Shabbat begin for many Jews?", answer: "On Friday evening", wrong: ["On Monday morning", "Once a year"] },
  { id: "q049", tag: "judaism", prompt: "Where should a holy book be kept?", answer: "In a clean, cared-for place, not on the floor", wrong: ["On the floor", "In a puddle"] },
  { id: "q050", tag: "judaism", prompt: "What is a shul?", answer: "A word some Jews use for a synagogue", wrong: ["A fruit", "A fast car"] },
  { id: "q051", tag: "hinduism", prompt: "What is a mandir?", answer: "A Hindu temple", wrong: ["A school bus", "A coat"] },
  { id: "q052", tag: "hinduism", prompt: "Where else do many Hindus worship?", answer: "At a home shrine", wrong: ["Only in a sports field", "Nowhere"] },
  { id: "q053", tag: "hinduism", prompt: "Diwali is a festival of what?", answer: "Lights", wrong: ["Snow boots", "Silence only"] },
  { id: "q054", tag: "hinduism", prompt: "Who may mark Diwali?", answer: "Many Hindus, many Sikhs, and many Jains", wrong: ["Only one family in the world", "No one"] },
  { id: "q055", tag: "hinduism", prompt: "Is Diwali only one religion’s day?", answer: "No", wrong: ["Yes", "Diwali is a drink"] },
  { id: "q056", tag: "hinduism", prompt: "What is ahimsa?", answer: "Not harming", wrong: ["A loud drum contest", "A hat"] },
  { id: "q057", tag: "hinduism", prompt: "What greeting uses palms together?", answer: "Namaste", wrong: ["Kick", "Run"] },
  { id: "q058", tag: "hinduism", prompt: "Do all Hindu families follow the same food rule?", answer: "No. Practices differ.", wrong: ["Yes. All eat the same plate.", "Food rules are jokes."] },
  { id: "q059", tag: "hinduism", prompt: "What is true about food in many Hindu families?", answer: "Many are vegetarian. Some are not.", wrong: ["Every meal must include pork.", "Fruit is forbidden."] },
  { id: "q060", tag: "hinduism", prompt: "Name one sacred text many Hindus love.", answer: "The Bhagavad Gita", wrong: ["A train ticket", "A scoreboard"] },
  { id: "q061", tag: "hinduism", prompt: "What do many people leave outside a mandir?", answer: "Their shoes", wrong: ["Their kindness", "A holy book on the step"] },
  { id: "q062", tag: "hinduism", prompt: "How should a sacred image be treated?", answer: "With care. It is not a toy.", wrong: ["As a joke", "As something to stand on"] },
  { id: "q063", tag: "hinduism", prompt: "What do many families light at Diwali?", answer: "Lamps", wrong: ["Sirens", "A holy book on the floor"] },
  { id: "q064", tag: "hinduism", prompt: "What kind act matters in many Hindu homes?", answer: "Welcoming a guest", wrong: ["Sending a guest away without a word", "Hiding food as a trick"] },
  { id: "q065", tag: "hinduism", prompt: "People tell different stories at Diwali. What is careful to say?", answer: "Families may tell different stories.", wrong: ["Only one story is allowed.", "The stories are jokes."] },
  { id: "q066", tag: "hinduism", prompt: "Where should a sacred book not be put?", answer: "On the floor", wrong: ["On a clean shelf", "In careful hands"] },
  { id: "q067", tag: "buddhism", prompt: "Who do many Buddhists follow?", answer: "The teaching of the Buddha", wrong: ["A sports captain only", "A weather report"] },
  { id: "q068", tag: "buddhism", prompt: "Do all Buddhists pray to a creator?", answer: "No. Many do not.", wrong: ["Yes. All must.", "Only at lunch"] },
  { id: "q069", tag: "buddhism", prompt: "What is Vesak for many Buddhists?", answer: "A festival about the Buddha’s birth, awakening, and death", wrong: ["A boat race", "A hat day"] },
  { id: "q070", tag: "buddhism", prompt: "What is a stupa?", answer: "A Buddhist place people may visit", wrong: ["A cooking pot", "A shoe"] },
  { id: "q071", tag: "buddhism", prompt: "What kind act matters in Buddhism?", answer: "Compassion, and trying not to harm", wrong: ["Jokes about prayer", "Ignoring guests"] },
  { id: "q072", tag: "buddhism", prompt: "Is a monk's robe a costume?", answer: "No. It is a sign of a careful life.", wrong: ["Yes. It is for a play.", "A robe is food."] },
  { id: "q073", tag: "buddhism", prompt: "What is a temple for many Buddhists?", answer: "A place to meditate or worship", wrong: ["A car park only", "A joke"] },
  { id: "q074", tag: "buddhism", prompt: "Can Buddhist practice happen at home?", answer: "Yes. Some people practise at home.", wrong: ["No. Home is forbidden.", "Only pets practise."] },
  { id: "q075", tag: "buddhism", prompt: "Are all Buddhists vegetarian?", answer: "No. Many are. Some are not.", wrong: ["Yes. All must eat the same food.", "Meat is the only food."] },
  { id: "q076", tag: "buddhism", prompt: "How should a Buddha statue be treated?", answer: "With respect. It is not a toy.", wrong: ["As a doll for jokes", "Under someone’s shoes"] },
  { id: "q077", tag: "buddhism", prompt: "What do many people bring at Vesak?", answer: "Lamps, flowers, or a quiet gift", wrong: ["A loud mockery", "Nothing kind"] },
  { id: "q078", tag: "buddhism", prompt: "Does Vesak fall on the same date everywhere?", answer: "No. The date can differ.", wrong: ["Yes. It is always 1 January.", "Vesak is every morning."] },
  { id: "q079", tag: "buddhism", prompt: "Which sentence is fair?", answer: "Many Buddhists follow the Buddha’s teaching.", wrong: ["This faith is the winner.", "This faith is false."] },
  { id: "q080", tag: "buddhism", prompt: "What is part of a path the Buddha taught?", answer: "Kind speech and kind acts", wrong: ["Cruel words", "Laughing at a shrine"] },
  { id: "q081", tag: "buddhism", prompt: "What is a vihara?", answer: "A word some people use for a Buddhist monastery or temple", wrong: ["A sandwich", "A score"] },
  { id: "q082", tag: "buddhism", prompt: "Should you photograph a shrine without asking?", answer: "No", wrong: ["Yes, even if someone says no", "Only if you climb on it"] },
  { id: "q083", tag: "sikhism", prompt: "What is a gurdwara?", answer: "A Sikh place of worship", wrong: ["A swimming race", "A type of bread"] },
  { id: "q084", tag: "sikhism", prompt: "What is the Guru Granth Sahib?", answer: "The holy book of the Sikhs. It is not a person you draw.", wrong: ["A sports trophy", "A kind of soup"] },
  { id: "q085", tag: "sikhism", prompt: "Where does the Guru Granth Sahib rest in the gurdwara?", answer: "On a raised seat, not on the floor", wrong: ["On the floor", "Outside in the rain"] },
  { id: "q086", tag: "sikhism", prompt: "What is langar?", answer: "A free shared meal at many gurdwaras", wrong: ["A meal that turns guests away", "A test you can fail as a joke"] },
  { id: "q087", tag: "sikhism", prompt: "Who may sit at langar?", answer: "Everyone", wrong: ["Only one family", "No children"] },
  { id: "q088", tag: "sikhism", prompt: "What is seva?", answer: "Selfless service", wrong: ["A costume shop", "A loud contest"] },
  { id: "q089", tag: "sikhism", prompt: "What is Vaisakhi for many Sikhs?", answer: "An April festival. People tell the story of the Khalsa.", wrong: ["A snow sport", "A food ban"] },
  { id: "q090", tag: "sikhism", prompt: "How many human Gurus were there before the holy book became the Guru?", answer: "Ten", wrong: ["Two", "One hundred"] },
  { id: "q091", tag: "sikhism", prompt: "What does Ik Onkar mean?", answer: "There is one God", wrong: ["There are many winners", "God is a picture to draw"] },
  { id: "q092", tag: "sikhism", prompt: "Are the Five Ks worn as a costume?", answer: "No. They are articles of faith.", wrong: ["Yes. They are for dress-up day.", "They are a menu."] },
  { id: "q093", tag: "sikhism", prompt: "What is kesh?", answer: "Uncut hair", wrong: ["A sweet", "A song"] },
  { id: "q094", tag: "sikhism", prompt: "What is a kara?", answer: "A steel bracelet", wrong: ["A cake", "A map"] },
  { id: "q095", tag: "sikhism", prompt: "What is a kangha?", answer: "A small wooden comb", wrong: ["A drum for jokes", "A shoe"] },
  { id: "q096", tag: "sikhism", prompt: "What does the kirpan stand for?", answer: "Courage, and protecting others. It is not a toy.", wrong: ["A game sword for class plays", "A spoon"] },
  { id: "q097", tag: "sikhism", prompt: "What do many people do before they enter a gurdwara’s prayer hall?", answer: "They take off their shoes and cover their heads.", wrong: ["They put shoes on the holy book.", "They run."] },
  { id: "q098", tag: "sikhism", prompt: "What is a turban for many Sikhs?", answer: "A cloth that covers uncut hair, worn with respect", wrong: ["A costume joke", "A food"] },
  { id: "q099", tag: "sikhism", prompt: "Is every Sikh meal the same?", answer: "No. Practices differ. Langar is often vegetarian.", wrong: ["Yes. All food is the same.", "Meals should be called strange."] },
  { id: "q100", tag: "sikhism", prompt: "What greeting do many Sikhs use?", answer: "Sat Sri Akal", wrong: ["Goodbye forever", "Boo"] },
  { id: "q101", tag: "more", prompt: "Which faith teaches that all people belong to one human family?", answer: "The Bahá’í Faith", wrong: ["A sports league", "A shop"] },
  { id: "q102", tag: "more", prompt: "Whose teachings do Bahá’ís follow?", answer: "Bahá’u’lláh", wrong: ["A cartoon hero", "A scoreboard"] },
  { id: "q103", tag: "more", prompt: "Who is welcome in a Bahá’í House of Worship?", answer: "Everyone", wrong: ["Only one group", "No visitors"] },
  { id: "q104", tag: "more", prompt: "What is a central Jain teaching?", answer: "Ahimsa, which means non-violence", wrong: ["Loud mocking", "A food contest"] },
  { id: "q105", tag: "more", prompt: "Many Jains mark which festival along with many Hindus and Sikhs?", answer: "Diwali", wrong: ["A silent Monday with no name", "A shoe festival"] },
  { id: "q106", tag: "more", prompt: "What do many Jains try not to do?", answer: "Harm living beings", wrong: ["Start a loud contest", "Call food strange"] },
  { id: "q107", tag: "more", prompt: "Is a family with no religion part of the world?", answer: "Yes. They deserve the same respect.", wrong: ["No. They are a mistake.", "Only if they pick a winner."] },
  { id: "q108", tag: "more", prompt: "What might a humanist care about?", answer: "Human kindness and fairness", wrong: ["Ranking faiths as winners", "Jokes about prayer"] },
  { id: "q109", tag: "more", prompt: "Does “no religion” mean a family cannot be kind?", answer: "No. They can be kind.", wrong: ["Yes. Kindness needs a winner.", "Kindness is a costume."] },
  { id: "q110", tag: "more", prompt: "What is fair to say about families with no religion?", answer: "They may rest, share meals, and care for people.", wrong: ["Their food is strange.", "They do not belong in class."] },
  { id: "q111", tag: "guest", prompt: "What voice do you use in a place of worship?", answer: "A quiet voice", wrong: ["Your loudest shout", "A joke voice"] },
  { id: "q112", tag: "guest", prompt: "When do you take your shoes off?", answer: "When that is the custom", wrong: ["You throw them", "Never, even if you are asked"] },
  { id: "q113", tag: "guest", prompt: "What do you do before you take a photograph?", answer: "Ask", wrong: ["Climb up high and snap", "Take one after someone says no"] },
  { id: "q114", tag: "guest", prompt: "If you cannot eat the food, what do you say?", answer: "No thank you. I will not call it strange.", wrong: ["That food is weird.", "I will laugh."] },
  { id: "q115", tag: "guest", prompt: "Should you act out another family’s prayer as a joke?", answer: "No", wrong: ["Yes, for laughs", "Only if friends giggle"] },
  { id: "q116", tag: "guest", prompt: "If someone offers you a head covering inside, what is polite?", answer: "Wear it while you are inside", wrong: ["Toss it", "Draw on it"] },
  { id: "q117", tag: "guest", prompt: "What do you do if you do not know where to sit?", answer: "Ask, and follow the host", wrong: ["Sit on a holy book", "Run through the room"] },
  { id: "q118", tag: "guest", prompt: "A holy book is in front of you. What do you do?", answer: "Leave it in its careful place unless a host shows you.", wrong: ["Put it on the floor.", "Use it as a fan for a joke."] },
  { id: "q119", tag: "guest", prompt: "You do not have to pray on a visit. What do you do instead?", answer: "Sit calmly", wrong: ["Copy the prayer as a joke", "Talk over the prayer"] },
  { id: "q120", tag: "guest", prompt: "What belongs in a kind class welcome?", answer: "Room for different faiths, and for no religion", wrong: ["A contest about who is right", "A joke about a festival"] },
  ...MORE_QUESTIONS,
];

export function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(list: readonly T[], rng: () => number): T[] {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const swap = next[i];
    next[i] = next[j] as T;
    next[j] = swap as T;
  }
  return next;
}

export type PlayCard = Question & { choices: string[] };

function toCard(question: Question, rng: () => number): PlayCard {
  return { ...question, choices: shuffle([question.answer, ...question.wrong], rng) };
}

export function pickQuestions(count: number, rng: () => number): PlayCard[] {
  const tags = [...new Set(QUESTIONS.map((question) => question.tag))];
  const buckets = new Map(tags.map((tag) => [tag, shuffle(QUESTIONS.filter((question) => question.tag === tag), rng)]));
  const picked: Question[] = [];
  let guard = 0;
  while (picked.length < count && guard < 40) {
    for (const tag of tags) {
      if (picked.length >= count) break;
      const next = buckets.get(tag)?.pop();
      if (next) picked.push(next);
    }
    guard += 1;
  }
  return shuffle(picked, rng).map((question) => toCard(question, rng));
}

export function drawFresh(used: ReadonlySet<string>, rng: () => number): PlayCard | null {
  const left = QUESTIONS.filter((question) => !used.has(question.id));
  if (left.length === 0) return null;
  const question = shuffle(left, rng)[0];
  if (!question) return null;
  return toCard(question, rng);
}

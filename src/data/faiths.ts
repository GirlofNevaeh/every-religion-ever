import type { PhotoCredit } from "@/data/photos";
import { photoCredit } from "@/data/photos";
import church from "@/assets/places/church.jpg";
import gurdwara from "@/assets/places/gurdwara.jpg";
import mandir from "@/assets/places/mandir.jpg";
import mosque from "@/assets/places/mosque.jpg";
import stupa from "@/assets/places/stupa.jpg";
import synagogue from "@/assets/places/synagogue.jpg";

export type FaithId =
  | "christianity"
  | "islam"
  | "judaism"
  | "hinduism"
  | "buddhism"
  | "sikhism";

export type Faith = {
  id: FaithId;
  name: string;
  people: string;
  card: string;
  called: string;
  belief: string;
  bookTitle: string;
  book: string;
  placeTitle: string;
  place: string;
  festivalTitle: string;
  festival: string;
  kind: string;
  rule: string;
  pictures: string;
  greeting: string;
  image: string;
  imageAlt: string;
  credit: PhotoCredit;
  keywords: string;
};

export const FAITHS: Faith[] = [
  {
    id: "christianity",
    name: "Christianity",
    people: "Christians",
    card: "Many people read the Bible, meet in a church, and mark Sunday.",
    called: "Many people call this faith Christianity. People who follow it are called Christians.",
    belief:
      "Many Christians believe in one God. People tell the story of Jesus, and many Christians call him the Son of God. Some Christians meet on Saturday, not Sunday. Practices differ from church to church.",
    bookTitle: "The Bible",
    book: "The sacred book is the Bible. It holds many smaller books. Many Christians read it at home and in church. It is kept with care. It is not put on the floor.",
    placeTitle: "A church",
    place: "A common place of worship is a church. Some people say chapel. A very large church may be called a cathedral. Many Christians meet on Sunday. Some meet on another day.",
    festivalTitle: "Christmas and Easter",
    festival:
      "Christmas is a festival for many Christians. People tell the story of the birth of Jesus. Some families celebrate in December. Some celebrate in January. Easter is another great festival. People tell the story that Jesus died and rose again. The date of Easter moves. Families may go to church, share food, and give gifts. Some keep these days quiet.",
    kind: "Many Christians try to love their neighbour. That means helping people, telling the truth, and sharing.",
    rule: "Some Christians fast in a time called Lent. They may eat less, or give something up, before Easter. Some do not. Some churches share bread and a cup in worship. Some do not do this every week. In some churches people dress in a careful way. Practices differ from family to family.",
    pictures:
      "A church, a cross, a Bible, or a candle stands for this faith.",
    greeting: "Many Christians say, “Peace be with you.”",
    image: church,
    imageAlt: "A stone church with a pointed spire, a slate roof, and flint walls.",
    credit: photoCredit("church"),
    keywords:
      "christian christians jesus bible church cathedral chapel sunday christmas easter lent cross candle worship gospel catholic protestant orthodox",
  },
  {
    id: "islam",
    name: "Islam",
    people: "Muslims",
    card: "Many people pray facing Mecca and read the Qur'an.",
    called: "Many people call this faith Islam. People who follow it are called Muslims.",
    belief:
      "Muslims worship one God. Allah is the Arabic word for God. Many Muslims pray five times a day. To pray, they face Mecca. Mecca is a city. The Kaaba, a cube-shaped building, stands there. Muslims honour the prophet Muhammad.",
    bookTitle: "The Qur'an",
    book: "The sacred book is the Qur'an. Muslims treat it with great care. It stays in a clean place. It is not put on the floor.",
    placeTitle: "A mosque",
    place: "A mosque is a Muslim place of worship. Another word is masjid. People take off their shoes. Prayer is calm. Many mosques have a dome and a minaret, a tall tower.",
    festivalTitle: "Ramadan and Eid",
    festival:
      "Ramadan is a month when many Muslims fast. They do not eat or drink from dawn to sunset. Before dawn, many families eat. After sunset, they eat again. Young children, and people who are ill, often do not fast. Eid is a festival of joy. Many families pray, share food, and give to people in need. There is more than one Eid. One comes after Ramadan. The dates move, because the Muslim calendar follows the moon.",
    kind: "Islam asks people to be honest and to give help. Many Muslims give a part of what they have to people who need it.",
    rule: "Halal is a food rule. Many Muslims do not eat pork. Many do not drink alcohol. For many families, meat must be prepared in a halal way. Some families are careful about this every day. Practices differ. Never tell a child their food is strange. Some Muslim women and girls wear a hijab, a covering for the hair. Some do not. It is not a costume.",
    pictures: "Many Muslims do not make pictures of God or the prophets.",
    greeting: "Many Muslims say, “As-salamu alaykum.” It means “peace be upon you.”",
    image: mosque,
    imageAlt: "The Sultan Ahmed Mosque, with a large dome and tall minarets.",
    credit: photoCredit("mosque"),
    keywords:
      "muslim muslims islam allah quran qur'an koran mosque masjid mecca makkah kaaba ramadan eid halal hijab prayer salah salat prophet",
  },
  {
    id: "judaism",
    name: "Judaism",
    people: "Jews",
    card: "Many people rest on Shabbat and read the Torah.",
    called: "Many people call this faith Judaism. People who follow it are called Jews.",
    belief: "Jews worship one God.",
    bookTitle: "The Torah",
    book: "The Torah is sacred teaching at the heart of Jewish life. It is often written on a scroll. Many Jews also read the Hebrew Bible. The scroll is kept with care. It is not put on the floor.",
    placeTitle: "A synagogue",
    place: "A synagogue is a Jewish place of worship. Some people say shul. Some say temple. Practices differ from community to community.",
    festivalTitle: "Shabbat and Hanukkah",
    festival:
      "Shabbat is a weekly rest. It begins on Friday evening and ends on Saturday evening. Many Jews light candles, share a meal, and stop everyday work. Some families eat a special bread. Hanukkah is a festival of lights in late autumn or winter. It lasts eight nights. Many families light a hanukkiah, a special lamp. People tell a story of a small amount of oil that burned for eight days. Some children play a small spinning game.",
    kind: "Many Jews give tzedakah. That is help for people in need. It is part of doing what is right.",
    rule: "Kosher is a food rule. Many Jews do not eat pork or shellfish. Many do not mix meat and milk. Some families keep kosher. Some do not. Both can be Jewish. Some Jews cover their heads with a kippah. Some do this in the synagogue. Some do this all day. Some do not. A kippah is not a costume.",
    pictures: "Many Jews do not make pictures of God.",
    greeting: "Many Jews say, “Shalom.” It means peace.",
    image: synagogue,
    imageAlt: "A brick synagogue with a large round window and a carved doorway.",
    credit: photoCredit("synagogue"),
    keywords:
      "jewish jews judaism torah synagogue shul shabbat sabbath hanukkah chanukah hanukkiah kosher kippah yarmulke tzedakah shalom hebrew menorah",
  },
  {
    id: "hinduism",
    name: "Hinduism",
    people: "Hindus",
    card: "Many people worship at a mandir and at home.",
    called: "Many people call this faith Hinduism. Some families say Sanatan Dharma.",
    belief:
      "Hinduism has many ways to worship. Many Hindus worship one God in many forms. You may hear names such as Vishnu, Shiva, Lakshmi, Durga, and Ganesha. Families do not all use the same names. Practices differ.",
    bookTitle: "Sacred texts",
    book: "There is more than one sacred text. The Vedas are ancient teachings. Many families also love the Bhagavad Gita and stories such as the Ramayana. A family may use one of these more than another. A sacred book is kept in a clean place. It is not put on the floor.",
    placeTitle: "A mandir",
    place: "A mandir is a Hindu temple. Many Hindus worship at a mandir and at home. Many homes have a shrine. People often leave shoes outside the mandir. A lamp, a bell, and flowers may be part of worship.",
    festivalTitle: "Diwali",
    festival:
      "Diwali is a festival of lights in autumn. Many Hindus mark it. Many Sikhs and many Jains mark it too. It is not only one religion’s day. Many families light lamps and share sweets. People tell stories. One story many Hindus tell is about Rama and Sita coming home. Some families tell other stories.",
    kind: "Many Hindus try to practise ahimsa, which means not harming. Hosts welcome guests. Helping others is a kind act.",
    rule: "Many Hindus are vegetarian. Some eat meat, and many of those families do not eat beef. Some families do not follow a food rule. Dress at a mandir is often modest. Practices differ from family to family. Never tell a child their food is strange.",
    pictures:
      "A sacred image in a home or a mandir is treated with care. It is not a toy.",
    greeting: "Many Hindus say, “Namaste,” with palms together. It is a greeting of respect.",
    image: mandir,
    imageAlt: "A carved stone mandir with towers and an arched gate.",
    credit: photoCredit("mandir"),
    keywords:
      "hindu hindus hinduism sanatana sanatan dharma mandir temple diwali deepavali puja veda vedas gita ramayana ahimsa namaste vegetarian shrine laxmi lakshmi",
  },
  {
    id: "buddhism",
    name: "Buddhism",
    people: "Buddhists",
    card: "Many people follow the Buddha’s teaching and practise care.",
    called: "Many people call this faith Buddhism. People who follow it are called Buddhists.",
    belief:
      "Many Buddhists follow the teaching of the Buddha. The Buddha was a teacher. Many Buddhists do not pray to a creator. Some traditions also honour other awakened teachers. Practices differ.",
    bookTitle: "The Buddha’s teaching",
    book: "A sacred collection of teachings is called the Tripitaka, or the Three Baskets. Some families say sutras. The Buddha taught people to use kind speech, kind acts, and careful thought. Teachings are kept with care. They are not put on the floor.",
    placeTitle: "A temple",
    place: "Many Buddhists meditate or worship in a temple. Some say vihara. Some visit a stupa. Some practise at home. Shoes often come off. The room stays quiet.",
    festivalTitle: "Vesak",
    festival:
      "Vesak is a festival for many Buddhists. People tell the story of the Buddha’s birth, his awakening, and his death. The date often falls in late spring. Some places use another day. Lamps, flowers, and quiet giving are common.",
    kind: "Compassion is central. Many Buddhists try not to harm living beings. Giving food or help is a kind act.",
    rule: "Many Buddhists are vegetarian. Some are not. Monks and nuns in some traditions wear robes. The robes are a sign of their life, not a costume. Some families fast on certain days. Some do not. Practices differ.",
    pictures:
      "Some Buddhists use a statue of the Buddha as a reminder. It is fully clothed in robes and treated with respect. It is not a toy.",
    greeting: "A calm bow, with palms together, is a greeting many Buddhists know.",
    image: stupa,
    imageAlt: "A large brick stupa under a blue sky.",
    credit: photoCredit("stupa"),
    keywords:
      "buddhist buddhists buddhism buddha vesak wesak stupa temple vihara meditation tripitaka sutra compassion lotus dharma",
  },
  {
    id: "sikhism",
    name: "Sikhism",
    people: "Sikhs",
    card: "Many people worship one God and follow the Guru Granth Sahib.",
    called: "Many people call this faith Sikhism. People who follow it are called Sikhs.",
    belief:
      "Sikhs worship one God. A short teaching, Ik Onkar, means there is one God. Sikhs honour ten human Gurus. Guru Nanak was the first.",
    bookTitle: "The Guru Granth Sahib",
    book: "The Guru Granth Sahib is the holy book and the Guru of the Sikhs. It is a book, not a person you draw. In the gurdwara it rests on a raised seat, under a canopy, covered with fine cloths. It is never placed on the floor.",
    placeTitle: "A gurdwara",
    place: "A gurdwara is a Sikh place of worship. People take off their shoes and cover their heads. Many gurdwaras serve langar, a free meal. Everyone may sit together. Many gurdwaras fly an orange flag.",
    festivalTitle: "Vaisakhi",
    festival:
      "Vaisakhi is a festival for many Sikhs. It comes in April. People tell the story of the Khalsa, a community that promised to live with courage, honesty, and care. Some families also mark a harvest. Around Diwali, many Sikhs mark Bandi Chhor Divas. People tell a story of release and coming home.",
    kind: "Seva means selfless service. Many Sikhs cook, clean, and share. Honest work and sharing are part of the faith.",
    rule: "Many Sikhs wear the Five Ks. They are articles of faith, not a costume. Kesh means uncut hair. Many people cover it with a turban or a smaller cloth. A turban is worn with respect. It is not a dress-up joke. Kangha is a small wooden comb. Kara is a steel bracelet. Kachera is an undergarment chosen for modesty. Kirpan is a small sword. It stands for courage and for protecting others. It is not a toy. Do not touch it. Some Sikhs wear all five. Some do not. Langar is often vegetarian, so more people can eat. Some Sikhs eat meat at home. Practices differ.",
    pictures:
      "Sikhs do not make pictures of the Gurus. The Guru Granth Sahib is a holy book. The Khanda is a symbol. A turban is worn with respect.",
    greeting: "Many Sikhs say, “Sat Sri Akal.” It speaks of God’s truth.",
    image: gurdwara,
    imageAlt: "The Golden Temple at night, lit gold beside a pool.",
    credit: photoCredit("gurdwara"),
    keywords:
      "sikh sikhs sikhism gurdwara guru granth sahib langar vaisakhi baisakhi khanda turban five ks kesh kangha kara kachera kirpan seva ik onkar sat sri akal khalsa bandi chhor diwali",
  },
];

export function faithById(id: string): Faith | undefined {
  return FAITHS.find((faith) => faith.id === id);
}

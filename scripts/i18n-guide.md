# Translation guide for Every Religion Ever

You are translating a calm site for children aged about 5–12. The English text is the source of truth.

## Rules

- Keep the same facts. Do not add new religious claims.
- Short sentences. Plain words a child can read.
- Keep the careful wording “many people” and “some people”. Do not say “all” unless the English says all.
- Do not rank religions. Do not say one faith is true, better, or false.
- Do not add jokes, sarcasm, or editorial comments.
- Do not translate the brand name if you see it. It is not a key.
- Copy each English key exactly from `src/i18n/dict/keys.json`. Do not retype curly apostrophes. The file uses both `'` (U+0027) and `’` (U+2019). Keys must match byte for byte.
- Preserve placeholders exactly: `{name}` `{day}` `{total}` `{score}` `{n}` `{place}`. Do not translate the word inside the braces. Do not drop a placeholder.
- Some keys are worksheet fragments, not full sentences (`I drew`, `Many families`, `This building is a`, `It comes`). Keep them as sentence starts.
- Some keys are single words (`No`, `Yes`, `Eight`, `Ask`, `Peace`). Translate the word.
- Loanwords that children already meet may stay as in the glossary.
- Photo notes such as “Shown here smaller.” are translated. Author names and artwork titles are not keys.
- Output one JSON object: every key in keys.json maps to a non-empty string. No extra keys. No comments. Valid JSON.

## Names to use

Use the row for your language. If a name is “keep”, use the English spelling inside the sentence (Russian uses the Cyrillic form).

| English | gd | cy | ga | fr | it | es | ru |
|---|---|---|---|---|---|---|---|
| Christianity | Crìosdaidheachd | Cristnogaeth | Críostaíocht | christianisme | cristianesimo | cristianismo | христианство |
| Christians | Crìosdaidhean | Cristnogion | Críostaithe | chrétiens | cristiani | cristianos | христиане |
| Jesus | Ìosa | Iesu | Íosa | Jésus | Gesù | Jesús | Иисус |
| God | Dia | Duw | Dia | Dieu | Dio | Dios | Бог |
| Moses | Maois | Moses | Maois | Moïse | Mosè | Moisés | Моисей |
| The Bible | a’ Bhìoball | y Beibl | an Bíobla | la Bible | la Bibbia | la Biblia | Библия |
| church | eaglais | eglwys | eaglais | église | chiesa | iglesia | церковь |
| Sunday | Didòmhnaich | dydd Sul | Dé Domhnaigh | dimanche | domenica | domingo | воскресенье |
| Christmas | Nollaig | Nadolig | Nollaig | Noël | Natale | Navidad | Рождество |
| Easter | a’ Chàisg | y Pasg | an Cháisc | Pâques | Pasqua | Pascua | Пасха |
| Lent | an Carghas | y Grawys | an Charghas | le Carême | la Quaresima | la Cuaresma | Великий пост |
| Islam | Ioslam | Islam | Ioslam | islam | islam | islam | ислам |
| Muslims | Muslamaich | Mwslimiaid | Moslamaigh | musulmans | musulmani | musulmanes | мусульмане |
| Muhammad | Muhammad | Muhammad | Muhammad | Muhammad | Muhammad | Muhammad | Мухаммад |
| Allah | Allah | Allah | Allah | Allah | Allah | Allah | Аллах |
| Qur'an / Quran | Qur'an | Qur'an | Qur'an | le Coran | il Corano | el Corán | Коран |
| mosque | mosg | mosg | mosc | mosquée | moschea | mezquita | мечеть |
| Mecca | Mecca | Mecca | Mecca | La Mecque | La Mecca | La Meca | Мекка |
| Ramadan | Ramadan | Ramadan | Ramadan | Ramadan | Ramadan | Ramadán | Рамадан |
| Eid | Eid | Eid | Eid | Aïd | Eid | Eid | Ид |
| Eid al-Fitr | Eid al-Fitr | Eid al-Fitr | Eid al-Fitr | Aïd el-Fitr | Eid al-Fitr | Eid al-Fitr | Ураза-байрам |
| Eid al-Adha | Eid al-Adha | Eid al-Adha | Eid al-Adha | Aïd el-Adha | Eid al-Adha | Eid al-Adha | Курбан-байрам |
| Judaism | Iùdhachas | Iddewiaeth | Giúdachas | judaïsme | ebraismo | judaísmo | иудаизм |
| Jews | Iùdhaich | Iddewon | Giúdaigh | juifs | ebrei | judíos | евреи |
| Torah | Torah | Torah | Torah | la Torah | la Torah | la Torá | Тора |
| synagogue | sionagog | synagog | sionagóg | synagogue | sinagoga | sinagoga | синагога |
| Shabbat | Shabbat | Shabbat | Shabbat | Shabbat | Shabbat | Shabbat | Шаббат |
| Hanukkah | Hanukkah | Hanukkah | Hanukkah | Hanoukka | Hanukkah | Janucá | Ханука |
| kosher | kosher | kosher | kosher | casher | kosher | kosher | кошерный |
| kippah | kippah | kippah | kippah | kippa | kippah | kipá | кипа |
| Shalom | Shalom | Shalom | Shalom | Shalom | Shalom | Shalom | Шалом |
| Hinduism | Hinduachas | Hindŵaeth | Hiondúchas | hindouisme | induismo | hinduismo | индуизм |
| Hindus | Hinduthan | Hindwiaid | Hiondúigh | hindous | induisti | hindúes | индуисты |
| mandir | mandir | mandir | mandir | mandir | mandir | mandir | мандир |
| Diwali | Diwali | Diwali | Diwali | Divali | Diwali | Diwali | Дивали |
| Krishna | Krishna | Krishna | Krishna | Krishna | Krishna | Krishna | Кришна |
| Buddhism | Bùdachas | Bwdhaeth | Búdachas | bouddhisme | buddhismo | budismo | буддизм |
| Buddhists | Bùdaich | Bwdhyddion | Búdaithe | bouddhistes | buddhisti | budistas | буддисты |
| the Buddha | am Bùda | y Bwdha | an Búda | le Bouddha | il Buddha | el Buda | Будда |
| Vesak | Vesak | Vesak | Vesak | Vesak | Vesak | Vesak | Весак |
| temple | teampall | teml | teampall | temple | tempio | templo | храм |
| Sikhism | Sìceachas | Siciaeth | an Sícíochas | sikhisme | sikhismo | sijismo | сикхизм |
| Sikhs | Sìcich | Siciaid | Sícigh | sikhs | sikh | sijs | сикхи |
| Guru Nanak | Guru Nanak | Guru Nanak | Guru Nanak | Guru Nanak | Guru Nanak | Guru Nanak | Гуру Нанак |
| Guru Granth Sahib | Guru Granth Sahib | Guru Granth Sahib | Guru Granth Sahib | Guru Granth Sahib | Guru Granth Sahib | Guru Granth Sahib | Гуру Грантх Сахиб |
| gurdwara | gurdwara | gurdwara | gurdwara | gurdwara | gurdwara | gurdwara | гурдвара |
| Vaisakhi | Vaisakhi | Vaisakhi | Vaisakhi | Vaisakhi | Vaisakhi | Vaisakhi | Вайсакхи |
| Bahá’í | Bahá’í | Bahá’í | Bahá’í | baha’ie | bahá’í | bahá’í | бахаи |
| Jainism | Jainism | Jainiaeth | Jainis | jaïnisme | giainismo | jainismo | джайнизм |
| Jains | Jains | Jainiaid | Jainaigh | jaïns | giainisti | jainistas | джайны |

Keep these spellings when the English uses them: Masjid, Kaaba, halal, hijab, langar, seva, ahimsa, tzedakah, Namaste, Ik Onkar, Sat Sri Akal, Khalsa, kesh, kangha, kara, kachera, kirpan, Khanda, hanukkiah, stupa, vihara, Tripitaka, Sanatan Dharma, Bhagavad Gita, Vedas, Ramayana, Mahavira, Bandi Chhor Divas, As-salamu alaykum, Bahá’u’lláh, Siddhartha Gautama. In Russian, transliterate them simply (халяль, хиджаб, лангар, сева, ахимса, намасте, ступа, Махавира, Бахаулла, Сиддхартха Гаутама). In German, keep those spellings too, and use Christentum, Christen, Jesus, Gott, Mose, die Bibel, Kirche, Sonntag, Weihnachten, Ostern, die Fastenzeit, Islam, Muslime, der Koran, Moschee, Mekka, Judentum, Juden, die Tora, Synagoge, Chanukka, koscher, Kippa, Hinduismus, Buddhismus, Buddhisten, der Buddha, Tempel, Sikhismus, Gurdwara, Jainismus, Jainas. Capitalise German nouns. Use du.

Primary 1 … Primary 7: keep “Primary” as the school-year word children already see, or use the natural school-year word (fr Primaire 1, es Primaria 1, it Primaria 1, de Klasse 1, ru 1-й класс начальной школы is too long — use «Начальный 1»). gd Bun-sgoil 1, cy Blwyddyn 1, ga Bunscoil 1. Use the same pattern for “Primary 1 projects”.

Team 1 … Team 10: gd Sgioba 1, cy Tîm 1, ga Foireann 1, fr Équipe 1, it Squadra 1, es Equipo 1, ru Команда 1, de Gruppe 1. Key “Team” is the same word without a number. Key “team {n}” is lowercase in English; translate the word and keep `{n}`.

Language-button names, written in the TARGET language. Include German:

- gd: English=Beurla, Scots Gaelic=Gàidhlig, Welsh=Cuimris, Irish=Gaeilge na hÈireann, French=Fraingis, Italian=Eadailtis, Spanish=Spàinntis, Russian=Ruisis, German=Gearmailtis
- cy: English=Saesneg, Scots Gaelic=Gaeleg yr Alban, Welsh=Cymraeg, Irish=Gwyddeleg, French=Ffrangeg, Italian=Eidaleg, Spanish=Sbaeneg, Russian=Rwseg, German=Almaeneg
- ga: English=Béarla, Scots Gaelic=Gaeilge na hAlban, Welsh=Breatnais, Irish=Gaeilge, French=Fraincis, Italian=Iodáilis, Spanish=Spáinnis, Russian=Rúisis, German=Gearmáinis
- fr: English=Anglais, Scots Gaelic=Gaélique écossais, Welsh=Gallois, Irish=Irlandais, French=Français, Italian=Italien, Spanish=Espagnol, Russian=Russe, German=Allemand
- it: English=Inglese, Scots Gaelic=Gaelico scozzese, Welsh=Gallese, Irish=Irlandese, French=Francese, Italian=Italiano, Spanish=Spagnolo, Russian=Russo, German=Tedesco
- es: English=Inglés, Scots Gaelic=Gaélico escocés, Welsh=Galés, Irish=Irlandés, French=Francés, Italian=Italiano, Spanish=Español, Russian=Ruso, German=Alemán
- ru: English=Английский, Scots Gaelic=Шотландский гэльский, Welsh=Валлийский, Irish=Ирландский, French=Французский, Italian=Итальянский, Spanish=Испанский, Russian=Русский, German=Немецкий
- de: English=Englisch, Scots Gaelic=Schottisch-Gälisch, Welsh=Walisisch, Irish=Irisch, French=Französisch, Italian=Italienisch, Spanish=Spanisch, Russian=Russisch, German=Deutsch

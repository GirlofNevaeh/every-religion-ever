import fs from "node:fs";
import ts from "typescript";

const keys = new Set();

function add(value) {
  if (typeof value !== "string") return;
  if (!value.trim()) return;
  keys.add(value);
}

function stringsIn(file, skipNames = new Set()) {
  const source = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  function visit(node) {
    if (ts.isPropertyAssignment(node) && ts.isIdentifier(node.name)) {
      if (skipNames.has(node.name.text)) return;
    }
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === "photoCredit") return;
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      add(node.text);
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
}

stringsIn("src/data/questions.ts", new Set(["id", "tag"]));
stringsIn("src/data/questions-more.ts", new Set(["id", "tag"]));
stringsIn("src/data/faiths.ts", new Set(["id", "keywords"]));
stringsIn("src/data/figures.ts", new Set(["id", "faithId"]));
stringsIn("src/data/year.ts", new Set(["id", "faith", "day"]));
stringsIn("src/data/projects.ts", new Set(["id"]));
stringsIn("src/data/projects-more.ts", new Set(["id"]));
stringsIn("src/data/photos.ts", new Set(["id", "title", "author", "authorUrl", "license", "licenseUrl", "sourceUrl"]));
stringsIn("src/data/catalog.ts", new Set(["href", "text"]));
stringsIn("src/i18n/locales.ts", new Set(["id", "html"]));

const uiFiles = [
  "src/routes/__root.tsx",
  "src/routes/about.tsx",
  "src/routes/index.tsx",
  "src/routes/people.tsx",
  "src/routes/places.tsx",
  "src/routes/practice.tsx",
  "src/routes/projects.tsx",
  "src/routes/quiz.tsx",
  "src/routes/time.tsx",
  "src/routes/work.tsx",
  "src/routes/faiths/index.tsx",
  "src/routes/faiths/$faithId.tsx",
  "src/components/install-dialog.tsx",
  "src/components/language-button.tsx",
  "src/components/photo-credit.tsx",
  "src/components/quiz-game.tsx",
  "src/components/search-form.tsx",
  "src/components/site-footer.tsx",
  "src/components/site-header.tsx",
  "src/components/world-map.tsx",
];

const dropExact = new Set([
  "christianity",
  "islam",
  "judaism",
  "hinduism",
  "buddhism",
  "sikhism",
  "more",
  "guest",
  "church",
  "mosque",
  "synagogue",
  "mandir",
  "stupa",
  "gurdwara",
  "lamp",
  "ramadan-eid",
  "en",
  "gd",
  "cy",
  "ga",
  "fr",
  "it",
  "es",
  "de",
  "ru",
  "setup",
  "main",
  "playoff",
  "done",
  "quick",
  "mega",
  "solo",
  "teams",
  "ask",
  "feedback",
  "t1",
  "t2",
  "ink",
  "sand",
  "Every Religion Ever",
  "content",
  "photos",
  "prayer",
  "days",
  "food",
  "kindness",
  "q",
  "site-search",
  "home-search",
  "faith-search",
  "holiday-projects",
  "Escape",
  "Playoff",
  "id",
  ", ",
]);

for (const file of uiFiles) {
  const source = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  function visit(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const text = node.text;
      const user =
        text.includes("{") ||
        text.includes(" ") ||
        /^[A-ZÀ-ÿ]/.test(text) ||
        text === "No" ||
        text === "Yes";
      if (user) add(text);
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
}

for (let n = 1; n <= 10; n += 1) add(`Team ${n}`);
add("Team");
add("team {n}");

const projects = fs.readFileSync("src/data/projects.ts", "utf8");
for (const match of projects.matchAll(/name: "([^"]+)"/g)) add(`${match[1]} project`);
for (const match of projects.matchAll(/label: "([^"]+)"/g)) {
  if (match[1].startsWith("Primary")) add(`${match[1]} projects`);
}

const list = [...keys].filter((key) => {
  if (dropExact.has(key)) return false;
  if (key.startsWith("@/")) return false;
  if (!/[A-Za-zÀ-ÿ]/.test(key)) return false;
  if (key.startsWith("http")) return false;
  if (key.startsWith("/")) return false;
  if (key.startsWith("bg-") || key.startsWith("text-") || key.startsWith("min-")) return false;
  if (key.includes("rounded") || key.includes("font-") || key.includes("px-") || key.includes("gap-")) return false;
  if (/^q\d+$/.test(key) || /^p\d+$/.test(key) || /^t\d+$/.test(key)) return false;
  if (key.includes(".jpg") || key.includes("className")) return false;
  if (/\b(w-full|h-full|min-h|min-w|max-w|text-|bg-|ring-|border-|px-|py-|mt-|mb-|gap-|aspect-|object-|font-|rounded|sm:|lg:|md:|size-|z-|inset-|origin-|float-|leading-|space-y|shrink-0|tabular-nums|no-print|print-only|hide-single|flex-col)\b/.test(key)) return false;
  if (/^[a-z0-9 '-]+$/.test(key) && key.includes(" ") && key.length > 40 && key === key.toLowerCase()) return false;
  return true;
});

fs.mkdirSync("src/i18n/dict", { recursive: true });
fs.writeFileSync("src/i18n/dict/keys.json", `${JSON.stringify(list, null, 2)}\n`);
console.log(list.length);

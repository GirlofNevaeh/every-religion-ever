export const LOCALES = [
  { id: "en", name: "English", html: "en" },
  { id: "de", name: "German", html: "de" },
  { id: "gd", name: "Scots Gaelic", html: "gd" },
  { id: "cy", name: "Welsh", html: "cy" },
  { id: "ga", name: "Irish", html: "ga" },
  { id: "fr", name: "French", html: "fr" },
  { id: "it", name: "Italian", html: "it" },
  { id: "es", name: "Spanish", html: "es" },
  { id: "ru", name: "Russian", html: "ru" },
] as const;

export type LocaleId = (typeof LOCALES)[number]["id"];

export function isLocale(value: string | null): value is LocaleId {
  return LOCALES.some((locale) => locale.id === value);
}

export function localeById(id: LocaleId) {
  const locale = LOCALES.find((item) => item.id === id);
  if (!locale) throw new Error(`Missing locale: ${id}`);
  return locale;
}

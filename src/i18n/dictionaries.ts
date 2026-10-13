import type { LocaleId } from "@/i18n/locales";

const loaded: Partial<Record<LocaleId, Record<string, string>>> = {};

export function registerDictionary(locale: LocaleId, dict: Record<string, string>) {
  loaded[locale] = dict;
}

export function embedTranslations(locale: LocaleId, text: string): string {
  const dict = locale === "en" ? undefined : loaded[locale];
  if (!dict) return "";
  let extra = "";
  for (const key of Object.keys(dict)) {
    if (key.length >= 3 && text.includes(key)) extra += ` ${dict[key]}`;
  }
  return extra;
}

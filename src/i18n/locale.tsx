import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { registerDictionary } from "@/i18n/dictionaries";
import { isLocale, localeById, type LocaleId } from "@/i18n/locales";

const STORAGE_KEY = "ere-locale";

const LOADERS: Record<Exclude<LocaleId, "en">, () => Promise<{ default: Record<string, string> }>> = {
  "en-US": () => import("@/i18n/dict/en-US.json"),
  de: () => import("@/i18n/dict/de.json"),
  gd: () => import("@/i18n/dict/gd.json"),
  cy: () => import("@/i18n/dict/cy.json"),
  ga: () => import("@/i18n/dict/ga.json"),
  fr: () => import("@/i18n/dict/fr.json"),
  it: () => import("@/i18n/dict/it.json"),
  es: () => import("@/i18n/dict/es.json"),
  ru: () => import("@/i18n/dict/ru.json"),
};

const cache = new Map<Exclude<LocaleId, "en">, Promise<Record<string, string>>>();

function loadDictionary(locale: Exclude<LocaleId, "en">) {
  const pending = cache.get(locale);
  if (pending) return pending;
  const next = LOADERS[locale]().then((mod) => {
    const dict = mod.default;
    registerDictionary(locale, dict);
    return dict;
  });
  cache.set(locale, next);
  return next;
}

type LocaleValue = {
  locale: LocaleId;
  setLocale: (locale: LocaleId) => void;
  tr: (text: string, vars?: Record<string, string | number>) => string;
};

const LocaleContext = createContext<LocaleValue | null>(null);

function fill(text: string, vars?: Record<string, string | number>) {
  if (!vars) return text;
  return Object.entries(vars).reduce((current, [key, value]) => current.replaceAll(`{${key}}`, String(value)), text);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleId>("en");
  const [ready, setReady] = useState(false);
  const [pack, setPack] = useState<{ locale: LocaleId; dict: Record<string, string> } | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) setLocaleState(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeById(locale).html;
    if (ready) window.localStorage.setItem(STORAGE_KEY, locale);
    if (locale === "en") {
      setPack(null);
      return;
    }
    let cancel = false;
    void loadDictionary(locale).then((dict) => {
      if (!cancel) setPack({ locale, dict });
    });
    return () => {
      cancel = true;
    };
  }, [locale, ready]);

  const setLocale = useCallback((next: LocaleId) => {
    setLocaleState(next);
  }, []);

  const tr = useCallback(
    (text: string, vars?: Record<string, string | number>) => {
      const translated = !pack || pack.locale !== locale ? text : (pack.dict[text] ?? text);
      return fill(translated, vars);
    },
    [locale, pack],
  );

  const value = useMemo(() => ({ locale, setLocale, tr }), [locale, setLocale, tr]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used within LocaleProvider");
  return value;
}

export function useTr() {
  return useLocale().tr;
}

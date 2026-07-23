import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations.js";

const STORAGE_KEY = "supertour_lang";
// Source content (Telegram channel) is in Russian, and Russian is the
// dominant language for this market segment — so it's the default, with
// Uzbek offered as an explicit switch rather than the other way around.
const DEFAULT_LANG = "ru";

const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && translations[saved]) return saved;
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

/** Returns { lang, setLang, t } — `t` is the full translation tree for the current language. */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

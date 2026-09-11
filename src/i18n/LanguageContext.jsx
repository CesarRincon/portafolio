import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { content } from "./content";

const STORAGE_KEY = "portfolio-lang";

const LanguageContext = createContext(null);

const detectInitialLang = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch (error) {
    /* localStorage bloqueado (modo privado): seguimos con el idioma del navegador */
  }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* sin persistencia, pero la sesión actual funciona igual */
    }
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((current) => (current === "es" ? "en" : "es"));
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: content[lang] }),
    [lang, toggleLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLang debe usarse dentro de <LanguageProvider>");
  return context;
};

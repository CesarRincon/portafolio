import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext(null);

/*
 * El oscuro es la identidad del sitio, así que es lo que ve todo el mundo la
 * primera vez — también quien tenga el sistema en claro. El tema claro es una
 * elección explícita del visitante, y una vez tomada se respeta siempre.
 */
const detectInitialTheme = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch (error) {
    /* localStorage bloqueado (modo privado): la sesión arranca en oscuro */
  }
  return "dark";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(detectInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    /* La barra del navegador en móvil debe seguir al tema, no quedarse negra. */
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#ffffff" : "#0a0908");
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* sin persistencia, pero la sesión actual funciona igual */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  return context;
};

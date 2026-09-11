import { useEffect, useState } from "react";
import s from "./Navbar.module.css";
import { useLang } from "../../i18n/LanguageContext";
import { useTheme } from "../../theme/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";
import { SECTIONS } from "../../i18n/content";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(SECTIONS);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menú móvil abierto bloqueamos el scroll del documento.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`${s.header} ${scrolled ? s.scrolled : ""}`}>
        <div className={s.inner}>
          <a href="#home" className={s.brand} onClick={() => setMenuOpen(false)}>
            <span className={s.brandMark}>CR</span>
            <span className={s.brandText}>César Rincón</span>
          </a>

          <nav className={s.nav} aria-label="Main">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${s.link} ${active === id ? s.linkActive : ""}`}
                aria-current={active === id ? "true" : undefined}
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <div className={s.actions}>
            <button
              type="button"
              className={s.langToggle}
              onClick={toggleLang}
              aria-label={t.langToggle}
              title={t.langToggle}
            >
              <span className={lang === "es" ? s.langOn : s.langOff}>ES</span>
              <span className={s.langSep} aria-hidden="true" />
              <span className={lang === "en" ? s.langOn : s.langOff}>EN</span>
            </button>

            <button
              type="button"
              className={s.themeToggle}
              onClick={toggleTheme}
              aria-label={theme === "dark" ? t.themeToLight : t.themeToDark}
              title={theme === "dark" ? t.themeToLight : t.themeToDark}
            >
              {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            </button>

            <button
              type="button"
              className={`${s.burger} ${menuOpen ? s.burgerOpen : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t.menuClose : t.menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={s.progress} style={{ transform: `scaleX(${progress / 100})` }} />
      </header>

      <div
        id="mobile-menu"
        className={`${s.mobile} ${menuOpen ? s.mobileOpen : ""}`}
        hidden={!menuOpen}
      >
        <nav className={s.mobileNav}>
          {SECTIONS.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${s.mobileLink} ${active === id ? s.mobileLinkActive : ""}`}
              style={{ transitionDelay: `${80 + i * 55}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              <span className={s.mobileIndex}>0{i + 1}</span>
              {t.nav[id]}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

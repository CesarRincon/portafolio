import s from "./Footer.module.css";
import { useLang } from "../../i18n/LanguageContext";
import { SOCIALS } from "../../i18n/content";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={`${s.inner} shell`}>
        <p className={s.built}>
          © {year} · {t.footer.built}
        </p>

        <div className={s.right}>
          <ul className={s.socials}>
            <li>
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={`mailto:${SOCIALS.email}`} aria-label="Email">
                <FiMail aria-hidden="true" />
              </a>
            </li>
          </ul>

          <a href="#home" className={s.top}>
            {t.footer.backToTop}
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

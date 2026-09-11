import { lazy, Suspense, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, prefersReduced, sel } from "../../lib/gsap";
import s from "./Hero.module.css";
import { useLang } from "../../i18n/LanguageContext";
import { SOCIALS } from "../../i18n/content";
import heroBg from "../../images/dev1.jpg";
import cvEs from "../../document/CV-CesarRincon-ES.pdf";
import cvEn from "../../document/CV-CesarRincon-EN.pdf";
import reactLogo from "../../images/ImagesTech/react-original-wordmark.svg";
import expoLogo from "../../images/ImagesTech/expo.svg";
import nextLogo from "../../images/ImagesTech/nextdotjs.svg";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const DustField = lazy(() => import("../../components/three/DustField"));

const PLATFORMS = [
  { name: "React Native", img: reactLogo },
  { name: "Expo", img: expoLogo, mono: true },
  { name: "Next.js", img: nextLogo, mono: true },
];

export const Hero = () => {
  const { t, lang } = useLang();
  const { hero } = t;
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReduced()) return undefined;
      const q = gsap.utils.selector(root);

      const title = new SplitText(q(`${sel(s.title)}`), { type: "chars", charsClass: s.char });
      const tagline = new SplitText(q(`${sel(s.tagline)}`), { type: "words,chars", wordsClass: s.word });

      /* Apertura: el plano se enciende, el nombre emerge letra a letra. */
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .fromTo(q(`${sel(s.bg)}`), { scale: 1.35 }, { scale: 1.08, duration: 3, ease: "power2.out" }, 0)
        .fromTo(q(`${sel(s.dim)}`), { opacity: 1 }, { opacity: 0, duration: 2.2, ease: "power2.inOut" }, 0)
        .from(q(`${sel(s.kicker)}`), { opacity: 0, letterSpacing: "1.1em", duration: 1.6 }, 0.35)
        .from(
          title.chars,
          { yPercent: 110, opacity: 0, filter: "blur(16px)", duration: 1.4, stagger: 0.05 },
          0.5,
        )
        .from(
          tagline.chars,
          { opacity: 0, filter: "blur(6px)", duration: 0.8, stagger: { each: 0.018, from: "center" } },
          1.25,
        )
        .from(q(`${sel(s.ctas)} > *`), { y: 22, opacity: 0, duration: 1, stagger: 0.12 }, 1.55)
        .from(q(`${sel(s.strip)} > *`), { y: 14, opacity: 0, duration: 1, stagger: 0.1 }, 1.8);

      /*
       * Salida: el hero queda clavado mientras la siguiente sección le pasa
       * por encima; el título se acerca a cámara y se apaga, el fondo se hunde.
       */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        })
        .to(q(`${sel(s.content)}`), { scale: 1.2, yPercent: -12, opacity: 0, ease: "none" }, 0)
        .to(q(`${sel(s.backdrop)}`), { scale: 1.18, ease: "none" }, 0)
        .to(q(`${sel(s.dimScroll)}`), { opacity: 0.75, ease: "none" }, 0)
        .to(q(`${sel(s.strip)}`), { opacity: 0, ease: "none" }, 0);

      return () => {
        title.revert();
        tagline.revert();
      };
    },
    { scope: root, dependencies: [lang] },
  );

  return (
    <section id="home" ref={root} className={s.hero}>
      <div className={s.backdrop} aria-hidden="true">
        <div className={s.bgWrap}>
          <img
            src={heroBg}
            alt=""
            className={s.bg}
            width="1200"
            height="1800"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <div className={s.fog} />
        <Suspense fallback={null}>
          <DustField />
        </Suspense>
        <div className={s.vignette} />
        <div className={s.dim} />
        <div className={s.dimScroll} />
      </div>

      <div className={s.content}>
        <p className={s.kicker}>{hero.role}</p>
        <h1 className={s.title}>{hero.name}</h1>
        <p className={s.tagline}>{hero.headline.join(" ")}</p>

        <div className={s.ctas}>
          <a href="#work" className={s.btnPrimary}>
            <span>{hero.ctaPrimary}</span>
            <i className={s.btnIcon} aria-hidden="true">
              <FiArrowUpRight />
            </i>
          </a>
          <a
            href={lang === "es" ? cvEs : cvEn}
            target="_blank"
            rel="noreferrer"
            className={s.btnGhost}
          >
            <FiDownload aria-hidden="true" />
            <span>{hero.ctaSecondary}</span>
          </a>
        </div>
      </div>

      <div className={s.strip}>
        <p className={s.status}>
          <span className={s.dot} aria-hidden="true" />
          {hero.status}
        </p>

        <ul className={s.platforms} aria-label="Stack principal">
          {PLATFORMS.map((platform) => (
            <li key={platform.name} className={s.platform}>
              <img
                src={platform.img}
                alt=""
                className={`${s.platformIcon} ${platform.mono ? s.platformIconMono : ""}`}
                loading="lazy"
              />
              <span>{platform.name}</span>
            </li>
          ))}
        </ul>

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
      </div>
    </section>
  );
};

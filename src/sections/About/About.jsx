import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, prefersReduced, sel } from "../../lib/gsap";
import s from "./About.module.css";
import { useLang } from "../../i18n/LanguageContext";
import portrait from "../../images/Me.jpg";
import room from "../../images/fondo-oficina.jpg";

/* El camino, en orden. No cambia con el idioma. */
const JOURNEY = ["HTML", "Java", "JavaScript", "React", "React Native", "Next.js"];

export const About = () => {
  const { t, lang } = useLang();
  const { about, hero } = t;
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReduced()) return undefined;
      const q = gsap.utils.selector(root);

      /* Título: palabra a palabra, desde abajo. */
      const title = new SplitText(q(`${sel(s.title)}`), { type: "words", wordsClass: s.word });
      gsap.from(title.words, {
        yPercent: 100,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.06,
        scrollTrigger: { trigger: q(`${sel(s.title)}`), start: "top 85%", once: true },
      });

      /* Primer párrafo: se lee con el scroll, palabra a palabra. */
      const lead = new SplitText(q(`${sel(s.leadParagraph)}`), { type: "words" });
      gsap.fromTo(
        lead.words,
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.06,
          scrollTrigger: {
            trigger: q(`${sel(s.leadParagraph)}`),
            start: "top 78%",
            end: "bottom 42%",
            scrub: 0.5,
          },
        },
      );

      gsap.from(q(`${sel(s.paragraph)}:not(${sel(s.leadParagraph)})`), {
        y: 24,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: { trigger: q(`${sel(s.copy)}`), start: "top 60%", once: true },
      });

      /* Retrato: entra desde el desenfoque y luego flota con el scroll. */
      gsap.from(q(`${sel(s.portrait)}`), {
        scale: 1.14,
        opacity: 0,
        filter: "blur(14px)",
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: { trigger: q(`${sel(s.stage)}`), start: "top 78%", once: true },
      });
      gsap.to(q(`${sel(s.stage)}`), {
        yPercent: -9,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });

      /* Cifras: cuentan desde cero cuando asoman. */
      q(`${sel(s.statValue)}`).forEach((node) => {
        gsap.from(node, {
          textContent: 0,
          snap: { textContent: 1 },
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: node, start: "top 90%", once: true },
        });
      });

      gsap.from(q(`${sel(s.pillar)}`), {
        x: 48,
        opacity: 0,
        duration: 1.1,
        stagger: 0.14,
        scrollTrigger: { trigger: q(`${sel(s.pillars)}`), start: "top 82%", once: true },
      });

      gsap.from(q(`${sel(s.node)}`), {
        y: 22,
        opacity: 0,
        scale: 0.7,
        duration: 0.9,
        ease: "back.out(1.7)",
        stagger: 0.09,
        scrollTrigger: { trigger: q(`${sel(s.path)}`), start: "top 92%", once: true },
      });
      gsap.from(q(`${sel(s.pathLine)}`), {
        scaleX: 0,
        duration: 1.6,
        ease: "expo.out",
        scrollTrigger: { trigger: q(`${sel(s.path)}`), start: "top 92%", once: true },
      });

      return () => {
        title.revert();
        lead.revert();
      };
    },
    { scope: root, dependencies: [lang] },
  );

  return (
    <section id="about" ref={root} className={s.section}>
      <div className={s.room} aria-hidden="true">
        <img src={room} alt="" className={s.roomImg} loading="lazy" />
        <div className={s.roomScrim} />
      </div>

      <div className={`${s.inner} shell`}>
        <div className={s.copy}>
          <h2 className={s.title}>{about.title}</h2>
          <p className={`${s.paragraph} ${s.leadParagraph}`}>{about.paragraphs[0]}</p>
          <p className={s.paragraph}>{about.paragraphs[1]}</p>
          <p className={s.paragraph}>{about.paragraphs[2]}</p>

          <ul className={s.stats}>
            {hero.stats.map((stat) => (
              <li key={stat.label} className={s.stat}>
                <span className={s.statNumber}>
                  <span className={s.statValue} data-value={stat.value}>
                    {stat.value}
                  </span>
                  {stat.suffix}
                </span>
                <span className={s.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.stage}>
          <span className={s.rim} aria-hidden="true" />
          <img
            src={portrait}
            alt={hero.name}
            className={s.portrait}
            width="667"
            height="900"
            loading="lazy"
            decoding="async"
          />
          <span className={s.floor} aria-hidden="true" />
        </div>

        <ul className={s.pillars}>
          {about.pillars.map((pillar) => (
            <li key={pillar.title} className={s.pillar}>
              <h3 className={s.pillarTitle}>{pillar.title}</h3>
              <p className={s.pillarText}>{pillar.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <ol className={`${s.path} shell`} aria-label="Trayectoria tecnológica">
        <span className={s.pathLine} aria-hidden="true" />
        {JOURNEY.map((step) => (
          <li key={step} className={s.node}>
            <span className={s.nodeDot} aria-hidden="true" />
            <span className={s.nodeLabel}>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

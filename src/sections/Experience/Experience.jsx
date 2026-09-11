import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReduced, sel } from "../../lib/gsap";
import s from "./Experience.module.css";
import { useLang } from "../../i18n/LanguageContext";
import { CineHeading } from "../../components/CineHeading/CineHeading";

export const Experience = () => {
  const { t, lang } = useLang();
  const { experience } = t;
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReduced()) return undefined;
      const q = gsap.utils.selector(root);

      /* El riel se dibuja al ritmo del scroll. */
      gsap.fromTo(
        q(`${sel(s.rail)}`),
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: q(`${sel(s.timeline)}`),
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.4,
          },
        },
      );

      q(`${sel(s.item)}`).forEach((item) => {
        gsap.from(item.querySelectorAll(`${sel(s.period)}, ${sel(s.body)}`), {
          y: 34,
          opacity: 0,
          filter: "blur(8px)",
          duration: 1.2,
          stagger: 0.12,
          scrollTrigger: { trigger: item, start: "top 80%", once: true },
        });
        gsap.from(item.querySelector(`${sel(s.marker)}`), {
          scale: 0,
          duration: 0.8,
          ease: "back.out(2)",
          scrollTrigger: { trigger: item, start: "top 78%", once: true },
        });
      });

      return undefined;
    },
    { scope: root, dependencies: [lang] },
  );

  return (
    <section id="experience" ref={root} className={s.section}>
      <div className="shell">
        <CineHeading title={experience.title} align="left" />

        <ol className={s.timeline}>
          <span className={s.rail} aria-hidden="true" />
          {experience.items.map((item) => (
            <li key={`${item.company}-${item.period}`} className={s.item}>
              <span className={s.marker} aria-hidden="true" />
              <p className={s.period}>{item.period}</p>
              <div className={s.body}>
                <h3 className={s.role}>{item.role}</h3>
                <p className={s.company}>{item.company}</p>
                <p className={s.text}>{item.text}</p>
                <ul className={s.tags}>
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

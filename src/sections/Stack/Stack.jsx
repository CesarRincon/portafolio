import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReduced, sel } from "../../lib/gsap";
import s from "./Stack.module.css";
import { useLang } from "../../i18n/LanguageContext";
import { CineHeading } from "../../components/CineHeading/CineHeading";
import { techStack } from "../../data/tech";
import frontendImg from "../../images/dev2.jpg";
import backendImg from "../../images/dev3.jpg";
import toolingImg from "../../images/background.jpg";

const GROUPS = [
  { id: "frontend", image: frontendImg },
  { id: "backend", image: backendImg },
  { id: "tooling", image: toolingImg },
];

/*
 * Acordeón horizontal tipo "escenarios": tres paneles altos con fotografía
 * apagada; el activo se abre y muestra sus herramientas. Funciona con
 * puntero, con foco de teclado y con toque.
 */
export const Stack = () => {
  const { t, lang } = useLang();
  const { stack } = t;
  const [active, setActive] = useState("frontend");
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReduced()) return undefined;
      const q = gsap.utils.selector(root);
      gsap.from(q(`${sel(s.panel)}`), {
        y: 80,
        opacity: 0,
        scale: 0.96,
        duration: 1.4,
        stagger: 0.14,
        ease: "power4.out",
        scrollTrigger: { trigger: q(`${sel(s.panels)}`), start: "top 78%", once: true },
      });
      return undefined;
    },
    { scope: root, dependencies: [lang] },
  );

  return (
    <section id="stack" ref={root} className={s.section}>
      <div className="shell">
        <CineHeading title={stack.title} lead={stack.lead} align="left" />

        <div className={s.panels}>
          {GROUPS.map((group) => {
            const techs = techStack.filter((tech) => tech.group === group.id);
            const isActive = active === group.id;
            return (
              <div
                key={group.id}
                className={`${s.panel} ${isActive ? s.panelActive : ""}`}
                onMouseEnter={() => setActive(group.id)}
                onClick={() => setActive(group.id)}
              >
                <img src={group.image} alt="" className={s.panelImg} loading="lazy" decoding="async" />
                <span className={s.panelScrim} aria-hidden="true" />

                <button
                  type="button"
                  className={s.panelHead}
                  onFocus={() => setActive(group.id)}
                  aria-expanded={isActive}
                  aria-controls={`stack-${group.id}`}
                >
                  <span className={s.panelTitle}>{stack.groups[group.id]}</span>
                  <span className={s.panelCount}>
                    {techs.length} {stack.toolsLabel}
                  </span>
                </button>

                <ul id={`stack-${group.id}`} className={s.chips} aria-hidden={!isActive}>
                  {techs.map((tech, i) => (
                    <li key={tech.name} className={s.chip} style={{ "--i": i }}>
                      <img
                        src={tech.img}
                        alt=""
                        className={`${s.chipIcon} ${tech.mono ? s.chipIconMono : ""}`}
                        loading="lazy"
                      />
                      <span>{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

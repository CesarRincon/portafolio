import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, prefersReduced, sel } from "../../lib/gsap";
import s from "./CineHeading.module.css";

/*
 * Titular de sección al estilo cartel de videojuego: display condensada
 * gigante, letras que entran una a una desde el desenfoque y una línea que
 * se abre debajo. Se dispara una sola vez al entrar en pantalla.
 */
export const CineHeading = ({ title, lead, align = "center", as: Tag = "h2", className = "" }) => {
  const root = useRef(null);

  useGSAP(
    () => {
      if (prefersReduced()) return undefined;
      const titleEl = root.current.querySelector(`${sel(s.title)}`);
      const split = new SplitText(titleEl, { type: "words,chars", charsClass: s.char, wordsClass: s.word });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root.current, start: "top 82%", once: true },
      });
      tl.from(split.chars, {
        yPercent: 60,
        opacity: 0,
        filter: "blur(12px)",
        duration: 1.1,
        ease: "power4.out",
        stagger: { each: 0.035, from: align === "center" ? "center" : "start" },
      })
        .from(root.current.querySelector(`${sel(s.rule)}`), { scaleX: 0, duration: 1.2, ease: "expo.out" }, 0.4)
        .from(
          root.current.querySelectorAll(`${sel(s.lead)}`),
          { y: 18, opacity: 0, duration: 0.9 },
          0.7,
        );

      return () => split.revert();
    },
    { scope: root, dependencies: [title, lead, align] },
  );

  return (
    <header ref={root} className={`${s.head} ${align === "center" ? s.center : ""} ${className}`}>
      <Tag className={s.title}>{title}</Tag>
      <span className={s.rule} aria-hidden="true" />
      {lead && <p className={s.lead}>{lead}</p>}
    </header>
  );
};

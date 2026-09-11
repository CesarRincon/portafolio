import { useEffect, useRef, useState } from "react";
import { gsap, SplitText, prefersReduced, sel } from "../../lib/gsap";
import style from "./Splashscreen.module.css";
import { useLang } from "../../i18n/LanguageContext";

/*
 * Apertura de película: el nombre emerge letra a letra desde el desenfoque,
 * una línea se abre bajo él, y el telón se parte en dos para dejar ver el hero.
 * Solo aparece en la primera carga de la pestaña.
 */
const Splashscreen = ({ onDone }) => {
  const { t } = useLang();
  const root = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (prefersReduced()) {
      onDone();
      return undefined;
    }

    const q = gsap.utils.selector(root);
    const split = new SplitText(q(`${sel(style.name)}`), { type: "chars", charsClass: style.char });
    const counter = { value: 0 };

    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: onDone,
    });

    tl.from(split.chars, {
      yPercent: 80,
      opacity: 0,
      filter: "blur(14px)",
      duration: 1.2,
      stagger: { each: 0.05, from: "center" },
    })
      .from(q(`${sel(style.rule)}`), { scaleX: 0, duration: 1.1, ease: "expo.out" }, 0.5)
      .from(q(`${sel(style.role)}`), { opacity: 0, letterSpacing: "0.9em", duration: 1.2 }, 0.7)
      .to(
        counter,
        {
          value: 100,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => setCount(Math.round(counter.value)),
        },
        0.2,
      )
      /* Cierre: el contenido se aleja y el telón se abre en dos hojas. */
      .to(q(`${sel(style.content)}`), { scale: 1.12, opacity: 0, filter: "blur(10px)", duration: 0.7, ease: "power3.in" }, "+=0.15")
      .to(q(`${sel(style.counter)}`), { opacity: 0, duration: 0.4 }, "<")
      .to(q(`${sel(style.top)}`), { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.25")
      .to(q(`${sel(style.bottom)}`), { yPercent: 100, duration: 0.9, ease: "power4.inOut" }, "<");

    return () => {
      tl.kill();
      split.revert();
    };
  }, [onDone]);

  return (
    <div ref={root} className={style.splash} aria-hidden="true">
      <div className={`${style.leaf} ${style.top}`} />
      <div className={`${style.leaf} ${style.bottom}`} />

      <div className={style.content}>
        <p className={style.name}>{t.hero.name}</p>
        <span className={style.rule} />
        <p className={style.role}>{t.hero.role}</p>
      </div>

      <div className={style.counter}>{String(count).padStart(3, "0")}</div>
    </div>
  );
};

export default Splashscreen;

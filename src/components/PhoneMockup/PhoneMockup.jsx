import { useCallback, useEffect, useRef, useState } from "react";
import style from "./PhoneMockup.module.css";
import mockupPhone from "../../images/iphone-15(3).png";
import { useLang } from "../../i18n/LanguageContext";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { FiPause, FiPlay } from "react-icons/fi";

/**
 * Marco de iPhone con carrusel de capturas: autoplay, flechas, puntos y swipe.
 *
 * El autoplay se detiene con el puntero, con el foco de teclado, al tocar en
 * móvil y cuando el mockup sale de pantalla. Además hay un control explícito
 * de pausa: sin él, en táctil no había forma de detenerlo (WCAG 2.2.2).
 */
export const PhoneMockup = ({ screens = [], label = "" }) => {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [playing, setPlaying] = useState(true);
  const touchStart = useRef(null);
  const wrapperRef = useRef(null);

  const total = screens.length;

  const go = useCallback(
    (step) => setIndex((prev) => (prev + step + total) % total),
    [total],
  );

  /* Un carrusel que gira fuera de pantalla solo gasta batería. */
  useEffect(() => {
    const node = wrapperRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || hovering || !onScreen || total < 2) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;
    const timer = setInterval(() => go(1), 3200);
    return () => clearInterval(timer);
  }, [playing, hovering, onScreen, total, go]);

  if (!total) return null;

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
    /* Tocar es intención de mirar: el autoplay se aparta. */
    setPlaying(false);
  };

  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
    touchStart.current = null;
  };

  const select = (i) => {
    setIndex(i);
    setPlaying(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={style.wrapper}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocusCapture={() => setHovering(true)}
      onBlurCapture={() => setHovering(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={style.mockupContainer}>
        <div className={style.screen}>
          {screens.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={i === index ? `${label} — ${i + 1}` : ""}
              className={`${style.image} ${i === index ? style.imageActive : ""}`}
              aria-hidden={i !== index}
              loading="lazy"
            />
          ))}
        </div>
        <img src={mockupPhone} alt="" className={style.mockup} loading="lazy" />

        {total > 1 && (
          <>
            <button
              type="button"
              className={`${style.arrow} ${style.arrowPrev}`}
              onClick={() => {
                go(-1);
                setPlaying(false);
              }}
              aria-label={t.carousel.prev}
            >
              <GoChevronLeft size="22px" />
            </button>
            <button
              type="button"
              className={`${style.arrow} ${style.arrowNext}`}
              onClick={() => {
                go(1);
                setPlaying(false);
              }}
              aria-label={t.carousel.next}
            >
              <GoChevronRight size="22px" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className={style.controls}>
          <button
            type="button"
            className={style.playToggle}
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? t.carousel.pause : t.carousel.play}
            title={playing ? t.carousel.pause : t.carousel.play}
          >
            {playing ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
          </button>

          <div className={style.dots}>
            {screens.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`${style.dot} ${i === index ? style.dotActive : ""}`}
                onClick={() => select(i)}
                aria-label={`${t.carousel.goTo} ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollSmoother, ScrollTrigger, prefersReduced } from "../../lib/gsap";
import { useLang } from "../../i18n/LanguageContext";

/*
 * Scroll con inercia (ScrollSmoother). El scroll sigue siendo nativo: la
 * ventana se desplaza de verdad y el contenido la persigue con un pequeño
 * retraso. Por eso el scroll-spy, la barra de progreso y las anclas siguen
 * funcionando sin cambios.
 */
export const SmoothScroll = ({ children }) => {
  const wrapper = useRef(null);
  const { lang } = useLang();

  useLayoutEffect(() => {
    if (prefersReduced()) return undefined;

    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: wrapper.current.firstElementChild,
      smooth: 1.1,
      effects: true,
      smoothTouch: 0.08,
    });

    // Si entraron con ancla (#work) la respetamos una vez creado el smoother.
    const { hash } = window.location;
    if (hash.length > 1 && document.querySelector(hash)) {
      smoother.scrollTo(hash, false);
    }

    return () => smoother.kill();
  }, []);

  // Cambiar de idioma cambia alturas: los triggers deben remedirse.
  useEffect(() => {
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 80);
    return () => window.clearTimeout(id);
  }, [lang]);

  // Las fuentes y las imágenes también mueven el layout al llegar.
  useEffect(() => {
    let cancelled = false;
    document.fonts?.ready.then(() => !cancelled && ScrollTrigger.refresh());
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div ref={wrapper} id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

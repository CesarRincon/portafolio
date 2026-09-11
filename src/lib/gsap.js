import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

/*
 * Un único punto de registro: cada sección importa desde aquí para que los
 * plugins se registren una sola vez y en el orden correcto.
 */
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

gsap.defaults({ ease: "power3.out", duration: 1 });

export const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export { gsap, ScrollTrigger, ScrollSmoother, SplitText };

/*
 * Los nombres de clase de CSS Modules en producción pueden llevar `+` o `/`,
 * que rompen querySelector. Siempre se seleccionan escapados.
 */
export const sel = (className) => `.${CSS.escape(className)}`;

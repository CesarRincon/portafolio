import { useEffect, useRef, useState } from "react";

/**
 * Marca un elemento como visible la primera vez que entra en el viewport.
 * Se usa para disparar las animaciones de entrada sin librerías externas.
 */
export const useReveal = ({ threshold = 0.18, rootMargin = "0px 0px -10% 0px" } = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Sin IntersectionObserver (o con motion reducido) mostramos todo de una vez.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

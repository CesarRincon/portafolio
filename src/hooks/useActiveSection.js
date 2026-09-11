import { useEffect, useState } from "react";

/**
 * Scroll-spy: devuelve el id de la sección que domina la pantalla.
 * Se apoya en la posición real de cada sección para acertar también
 * cuando la última es más corta que el viewport.
 */
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];

      ids.forEach((id) => {
        const node = document.getElementById(id);
        if (node && node.offsetTop <= marker) current = id;
      });

      // Al llegar al final del documento la última sección siempre gana.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;
      if (atBottom) current = ids[ids.length - 1];

      setActive(current);
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
};

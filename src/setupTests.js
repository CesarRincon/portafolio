// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// jsdom no implementa matchMedia ni IntersectionObserver, y ambos los usan
// las animaciones de entrada. Se emulan con lo mínimo que consume la app.
// En tests se declara motion reducido: la cortina se salta, GSAP y el scroll
// suave no arrancan, y el hero muestra el nombre como texto plano.
window.matchMedia =
  window.matchMedia ||
  ((query) => ({
    matches: query.includes("prefers-reduced-motion"),
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }));

global.IntersectionObserver =
  global.IntersectionObserver ||
  class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

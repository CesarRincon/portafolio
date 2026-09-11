# Portafolio — César Rincón

Portafolio personal de una sola página, bilingüe (ES/EN), construido con React y
CSS Modules sobre Create React App. Sin librerías de animación: todo el
movimiento es CSS + `IntersectionObserver`.

## Estructura

```
src/
├── App.js                  # composición de la página y estado global mínimo
├── index.css               # reset, utilidades y carga de tokens/fuentes
├── styles/
│   ├── tokens.css          # color, tipografía, ritmo y curvas de animación
│   └── fonts.css           # @font-face de Jost (local, sin CDN)
├── i18n/
│   ├── content.js          # TODO el copy del sitio, en español e inglés
│   └── LanguageContext.jsx # provider + `useLang()`, persiste en localStorage
├── data/
│   ├── projects.js         # proyectos destacados y apps publicadas
│   └── tech.js             # stack agrupado (frontend / backend / tooling)
├── hooks/
│   ├── useReveal.js        # revela un elemento al entrar en el viewport
│   └── useActiveSection.js # scroll-spy del navbar
├── components/             # piezas reutilizables (Navbar, Reveal, mockups…)
└── sections/               # Hero, About, Work, Stack, Experience, Contact
```

## Cómo trabajar con él

| Necesito…                        | Toco…                                                        |
| -------------------------------- | ------------------------------------------------------------ |
| Cambiar cualquier texto          | `src/i18n/content.js` (siempre en los dos idiomas)            |
| Añadir un proyecto web           | `src/data/projects.js` → `featuredProjects` + captura en `src/images/projects/` |
| Añadir una app de tiendas        | `src/data/projects.js` → `appProjects`                        |
| Añadir una tecnología            | `src/data/tech.js` (`mono: true` si el logo es negro plano)   |
| Cambiar la paleta o el ritmo     | `src/styles/tokens.css`                                       |

Las capturas de los sitios en producción se generan con Chrome headless:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --hide-scrollbars --virtual-time-budget=9000 \
  --window-size=1440,900 --screenshot=salida.png https://tu-sitio.com
sips -s format jpeg -s formatOptions 80 -Z 1400 salida.png --out destino.jpg
```

## Comandos

```bash
npm start    # desarrollo en http://localhost:3000
npm test     # tests con Jest + Testing Library
npm run build # build de producción en /build
```

## Auditoría visual

Con el servidor levantado, la skill `ui-pro` abre el sitio en un Chromium real,
lo fotografía en 390/820/1440 px y mide contraste WCAG, áreas táctiles,
desbordes, tamaños de fuente y foco de teclado:

```bash
node ~/.claude/skills/ui-pro/scripts/audit.mjs http://localhost:3000
```

Deja las capturas y `findings.json` en `.ui-audit/`. Correr esto antes de
desplegar evita regresiones de accesibilidad.

Excepción conocida y deliberada: la URL en la barra del `BrowserMockup` va a
13px porque imita el chrome de un navegador, donde ese texto es pequeño.

## Detalles de implementación

- **Animación sin dependencias.** `<Reveal>` envuelve cualquier bloque y lo
  anima al entrar en pantalla. Ojo: la variante `mask` aplica el `clip-path` al
  hijo, nunca al elemento observado — un `clip-path` que oculta el 100% deja el
  área de intersección en cero y el observer no dispararía nunca.
- **`prefers-reduced-motion`** se respeta en todo: la cortina de entrada se
  salta, la cinta del stack se detiene y los reveals aparecen directamente.
- **Enlaces directos.** Entrar con `#work`, `#contact`, etc. salta la cortina de
  carga y ancla en la sección.
- **Formulario** vía EmailJS, con validación de campos y de formato de correo.

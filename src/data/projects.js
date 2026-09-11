import trebolShot from "../images/projects/trebol-caps.jpg";
import nathShot from "../images/projects/portafolio-nath.jpg";
import comfyLogo from "../images/projects/comfy-logo.png";

import olimpica1 from "../images/Olimpica/olimpica1.jpg";
import olimpica2 from "../images/Olimpica/olimpica2.jpg";
import olimpica3 from "../images/Olimpica/olimpica3.jpg";
import olimpica4 from "../images/Olimpica/olimpica4.jpg";
import olimpica5 from "../images/Olimpica/olimpica5.jpg";
import olimpica6 from "../images/Olimpica/olimpica6.jpg";
import olimpica7 from "../images/Olimpica/olimpica7.jpg";
import olimpica8 from "../images/Olimpica/olimpica8.jpg";
import olimpica9 from "../images/Olimpica/olimpica9.jpg";
import olimpica10 from "../images/Olimpica/olimpica10.jpg";
import olimpica11 from "../images/Olimpica/olimpica11.jpg";

import larebaja1 from "../images/LaRebaja/larebaja1.jpg";
import larebaja2 from "../images/LaRebaja/larebaja2.jpg";
import larebaja3 from "../images/LaRebaja/larebaja3.jpg";
import larebaja4 from "../images/LaRebaja/larebaja4.jpg";
import larebaja5 from "../images/LaRebaja/larebaja5.jpg";

/**
 * Capturas de la app de Olímpica que alimentan el mockup de iPhone.
 * Se importan una a una (en vez de require.context) para conservar el orden
 * numérico y para que los tests fuera de webpack puedan resolverlas.
 */
export const olimpicaScreens = [
  olimpica1,
  olimpica2,
  olimpica3,
  olimpica4,
  olimpica5,
  olimpica6,
  olimpica7,
  olimpica8,
  olimpica9,
  olimpica10,
  olimpica11,
];

/**
 * Capturas de La Rebaja. Vienen de la ficha oficial de la App Store, recortadas
 * al área de pantalla para que encajen en el mockup.
 */
export const laRebajaScreens = [larebaja1, larebaja2, larebaja3, larebaja4, larebaja5];

/**
 * Proyectos destacados. Los que están publicados llevan captura real del sitio;
 * los que siguen en construcción se marcan con `wip` y muestran su logo.
 */
export const featuredProjects = [
  {
    id: "comfy-v3",
    name: "Comfy V3",
    year: "2026",
    wip: true,
    logo: comfyLogo,
    accent: "#00e0a8",
    stack: ["Expo 54", "React Native", "TypeScript", "Supabase", "Stripe", "TanStack Query"],
    es: {
      tagline: "Nueva versión de la app de alquiler de vehículos entre particulares",
      role: "Desarrollo móvil de extremo a extremo",
      description:
        "Estoy reconstruyendo la app de Comfy desde cero con Expo y expo-router, mientras mantengo la versión actual en producción y le sigo agregando funcionalidades. La idea es una base más limpia y más rápida de evolucionar, sin frenar lo que ya está publicado.",
      highlights: [
        "Flujo completo de reservas: precios, aceptación, check-in y check-out, extensiones y cancelaciones",
        "Verificación de identidad, pagos con Stripe y autenticación con Google y Apple",
        "Chat entre anfitrión e inquilino, notificaciones push y monitoreo de errores con Sentry",
      ],
    },
    en: {
      tagline: "New version of the peer-to-peer vehicle rental app",
      role: "End-to-end mobile development",
      description:
        "I'm rebuilding the Comfy app from scratch with Expo and expo-router, while keeping the current version alive in production and shipping features on it. The goal is a cleaner base that's faster to evolve, without slowing down what's already live.",
      highlights: [
        "Full booking flow: pricing, acceptance, check-in and check-out, extensions and cancellations",
        "Identity verification, Stripe payments and Google/Apple authentication",
        "Host-to-renter chat, push notifications and error monitoring with Sentry",
      ],
    },
  },
  {
    id: "trebol-caps",
    name: "Trébol Caps",
    year: "2026",
    image: trebolShot,
    url: "https://www.trebolcaps.com",
    accent: "#22c55e",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind v4"],
    es: {
      tagline: "Catálogo e-commerce con panel de administración y analítica propia",
      role: "Diseño y desarrollo end-to-end",
      description:
        "Tienda de gorras New Era importadas. Construí la portada editorial, el catálogo con filtros combinables que viven en la URL (un filtro se comparte por WhatsApp), la ficha de producto con galería multiángulo y zoom sobre el bordado, y el cierre de venta directo por WhatsApp sin carrito.",
      highlights: [
        "Panel de administración con sesión en cookie httpOnly, límite de intentos y doble verificación de permisos",
        "Analítica propia sin cookies de rastreo: visitas, conversión por producto y ranking, con visitante anonimizado por hash diario",
        "SEO con datos estructurados Product — Google muestra precio y disponibilidad en resultados",
      ],
    },
    en: {
      tagline: "E-commerce catalog with its own admin panel and analytics",
      role: "End-to-end design and development",
      description:
        "A store for imported New Era caps. I built the editorial homepage, the catalog with combinable filters that live in the URL (a filter can be shared over WhatsApp), the product page with a multi-angle gallery and embroidery zoom, and WhatsApp checkout with no cart.",
      highlights: [
        "Admin panel with httpOnly cookie sessions, rate limiting and double permission checks",
        "First-party analytics with no tracking cookies: visits, per-product conversion and ranking, visitors anonymized by a daily hash",
        "SEO with Product structured data — Google surfaces price and availability in results",
      ],
    },
  },
  {
    id: "portafolio-nath",
    name: "Nathalia Patiño",
    year: "2026",
    image: nathShot,
    url: "https://portafolio-nath.vercel.app",
    accent: "#e879a6",
    stack: ["Next.js 16", "React 19", "GSAP", "Framer Motion", "Cloudinary"],
    es: {
      tagline: "Portafolio profesional para una comunicadora social y creadora de contenido",
      role: "Diseño de interfaz, animación y desarrollo",
      description:
        "Portafolio de una comunicadora social especializada en gestión de redes y producción audiovisual. Resolví la puesta en escena de un catálogo visual pesado —fotografía de producto, reels y campañas— sin sacrificar la velocidad de carga.",
      highlights: [
        "Galería masonry con imágenes y video servidos y optimizados desde Cloudinary",
        "Animaciones de scroll con GSAP y Framer Motion, con transiciones entre secciones",
        "Secciones de servicios, marcas trabajadas, experiencia y descarga de CV",
      ],
    },
    en: {
      tagline: "Professional portfolio for a social communicator and content creator",
      role: "UI design, motion and development",
      description:
        "Portfolio for a social communicator specialized in social media management and audiovisual production. I solved staging a heavy visual catalog — product photography, reels and campaigns — without giving up loading speed.",
      highlights: [
        "Masonry gallery with images and video served and optimized through Cloudinary",
        "Scroll-driven animation with GSAP and Framer Motion, plus section transitions",
        "Services, client brands, experience and CV download sections",
      ],
    },
  },
];

/** Apps retail publicadas en tiendas, desarrolladas con el equipo de ITGlobers. */
export const appProjects = [
  {
    id: "olimpica",
    name: "Olímpica",
    accent: "#f5b544",
    screens: olimpicaScreens,
    stack: ["React Native", "TypeScript", "Redux"],
    stores: {
      android:
        "https://play.google.com/store/apps/details?id=io.cordova.myapp5c2f9d&hl=en-US",
      ios: "https://apps.apple.com/co/app/ol%C3%ADmpica/id1138020304",
    },
    es: {
      tagline: "App de la cadena de supermercados Olímpica",
      description:
        "Participo en el desarrollo de extremo a extremo: implemento funcionalidades clave y componentes reutilizables, resuelvo errores para garantizar rendimiento y experiencia de usuario, y acompaño la evolución continua de la app según las necesidades del cliente y del negocio.",
    },
    en: {
      tagline: "App for the Olímpica supermarket chain",
      description:
        "I contribute to end-to-end development: I implement key features and reusable components, fix bugs to guarantee performance and user experience, and support the app's continuous evolution based on client and business needs.",
    },
  },
  {
    id: "la-rebaja",
    name: "La Rebaja",
    accent: "#e4453f",
    screens: laRebajaScreens,
    stack: ["React Native", "JavaScript"],
    stores: {
      android: "https://play.google.com/store/apps/details?id=com.larebaja&hl=es",
      ios: "https://apps.apple.com/co/app/la-rebaja/id6450218648",
    },
    es: {
      tagline: "App de la cadena de droguerías La Rebaja",
      description:
        "Doy soporte continuo al proyecto: resuelvo incidencias, mejoro el código e implemento nuevas funcionalidades según los requerimientos del cliente. Refactorizo módulos para ganar eficiencia y reducir los tiempos de carga.",
    },
    en: {
      tagline: "App for the La Rebaja pharmacy chain",
      description:
        "I give the project continuous support: fixing issues, improving the codebase and shipping new features based on client requirements. I refactor modules for efficiency and shorter loading times.",
    },
  },
];

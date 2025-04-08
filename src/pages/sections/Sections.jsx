import { useEffect, useRef, useState } from "react";
// import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import "@fontsource/montserrat";
import "@fontsource/bebas-neue";
import "@fontsource/raleway";
import iconAppStore from "../../images/appstore.png";
import iconPlayStore from "../../images/googleplay.png";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import styles from "./Sections.module.css";

const sections = [
  {
    id: "olimpica",
    title: "Olimpica",
    backgroundColor: "#ffffff",
    color: "#BE0111",
    description:
      "La aplicación de Olímpica es la plataforma digital oficial de una de las cadenas de supermercados más importantes de Colombia. Permite a los usuarios realizar compras de supermercado, productos de aseo, tecnología, medicamentos y más, de manera rápida y segura desde su dispositivo móvil. La app ofrece funcionalidades como entrega a domicilio, retiro en tienda, seguimiento de pedidos en tiempo real y acceso a promociones exclusivas. Con una interfaz intuitiva y opciones de pago flexibles, Olímpica App facilita la experiencia de compra en línea, brindando comodidad y eficiencia a sus usuarios.",
    logros: [
      {
        title: "Liderazgo y optimización",
        description:
          "Contribuí activamente al desarrollo de la aplicación, diseñando y construyendo componentes funcionales clave para la experiencia del usuario. En distintos momentos, lideré el desarrollo, tomando la iniciativa para implementar mejoras significativas. Me aseguré de optimizar funciones y mejorar el rendimiento general, garantizando una ejecución fluida y estable en distintos dispositivos.",
      },
      {
        title: "Soporte y evolutivos",
        description:
          "Participé en la evolución continua de la aplicación, implementando nuevas funcionalidades y mejorando las existentes según las necesidades del negocio. Además, brindé soporte resolviendo errores críticos en producción, asegurando la estabilidad y confiabilidad de la plataforma.",
      },
    ],
  },
  {
    id: "rebaja",
    title: "La Rebaja",
    backgroundColor: "#cccc",
    color: "#BE0111",
    description:
      "La aplicación de La Rebaja es la plataforma digital oficial de una reconocida cadena de droguerías en Colombia. Permite a los usuarios adquirir una amplia variedad de productos, incluyendo medicamentos con y sin prescripción, productos naturales, artículos de aseo personal, alimentos, bebidas, productos de belleza, dermocosmética e incluso licores, todo desde la comodidad de su dispositivo móvil. La app ofrece funcionalidades como entrega a domicilio, localización de la tienda más cercana y acceso a promociones exclusivas. Con una interfaz intuitiva y opciones de pago seguras, La Rebaja App facilita la experiencia de compra en línea, brindando comodidad y eficiencia a sus usuarios.",
    logros: [
      {
        title: "Optimización de experiencia de usuario",
        description:
          "Trabajé en la mejora de la interfaz de usuario y en la optimización de los flujos de navegación, asegurando una experiencia más intuitiva y eficiente. Implementé ajustes visuales y estructurales que facilitaron la interacción del usuario con la aplicación.",
      },
      {
        title: "Refactorización y eficiencia",
        description:
          "Reestructuré partes clave del código para mejorar su eficiencia, reducir los tiempos de carga y facilitar su mantenimiento. Esto permitió un mejor desempeño de la aplicación y una mayor facilidad para implementar nuevas funcionalidades en el futuro.",
      },
      {
        title: "Geolocalización y direcciones",
        description:
          "Integré Google Maps en la aplicación, mejorando la precisión de la ubicación de los usuarios y optimizando la funcionalidad de direcciones. Esto permitió una mejor gestión de entregas y una experiencia más fluida para los clientes que dependían de la geolocalización para sus pedidos.",
      },
    ],
  },
  {
    id: "corona",
    title: "Corona",
    backgroundColor: "#ffffff",
    color: "#9546F9",
    description:
      "La aplicación de Corona es la plataforma digital oficial de una de las cadenas de supermercados más importantes de Chile. Permite a los usuarios realizar compras de supermercado, productos de aseo, tecnología, medicamentos y más, de manera rápida y segura desde su dispositivo móvil. La app ofrece funcionalidades como entrega a domicilio, retiro en tienda, seguimiento de pedidos en tiempo real y acceso a promociones exclusivas. Con una interfaz intuitiva y opciones de pago flexibles, Corona App facilita la experiencia de compra en línea, brindando comodidad y eficiencia a sus usuarios.",
    logros: [
      {
        title: "Soporte y mantenimiento",
        description:
          "Formé parte del equipo de soporte, identificando y resolviendo problemas técnicos para garantizar el correcto funcionamiento de la aplicación. Mi trabajo permitió mejorar la estabilidad en producción y minimizar interrupciones en la experiencia del usuario.",
      },
      {
        title: "Geolocalización y disponibilidad de productos",
        description:
          "Mejoré la precisión de la geolocalización para optimizar la disponibilidad de productos según la ubicación del usuario. Esto ayudó a garantizar que los clientes tuvieran acceso a los productos correctos en función de su ubicación, mejorando la eficiencia del catálogo y la gestión de inventario.",
      },
    ],
  },
];

const Sections = (props) => {
  const { setIsLoading } = props;
  const initialPosition = useRef({
    x: -454.8677075736407,
    y: -119.21544755953607,
    z: 657.9231824679183,
  });

  const initialRotation = useRef({
    x: 0.17031117726037973,
    y: 0.6997415938615231,
    z: 0.10985835007621125,
  });
  const ref = useRef(null);
  const phone = useRef();
  const splineInstance = useRef(null);
  const [isVisibleSection, setIsVisibleSection] = useState(false);
  const [isVisiblePhone, setIsVisiblePhone] = useState(false);

  const onLoad = (spline) => {
    splineInstance.current = spline;
    const obj = spline.findObjectByName("iPhone 14 Pro 2");
    if (obj) {
      phone.current = obj;
    }
  };

  const animatePhone = (section) => {
    if (!phone.current) return;
    if (section === "rebaja") {
      splineInstance.current.setVariables({
        olimpica: 0,
        rebaja: 100,
        corona: 0,
      });
      setIsVisibleSection({
        olimpica: false,
        rebaja: true,
        corona: false,
      });
    } else if (section === "olimpica") {
      splineInstance.current.setVariables({
        olimpica: 100,
        rebaja: 0,
        corona: 0,
      });
      setIsVisibleSection({
        olimpica: true,
        rebaja: false,
        corona: false,
      });
    } else if (section === "corona") {
      splineInstance.current.setVariables({
        olimpica: 0,
        rebaja: 0,
        corona: 100,
      });
      setIsVisibleSection({
        olimpica: false,
        rebaja: false,
        corona: true,
      });
    }

    const isSection = section === "olimpica" || section === "corona";

    gsap.to(phone.current.position, {
      x: isSection
        ? initialPosition.current.x
        : initialPosition.current.x + 550,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(phone.current.rotation, {
      y: isSection ? initialRotation.current.y : 6.5,
      duration: 1,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.33) {
            if (entry.target.id === "olimpica") {
              animatePhone("olimpica");
              setIsVisiblePhone(true);
            } else if (entry.target.id === "corona") {
              animatePhone("corona");
              setIsVisiblePhone(true);
            } else if (entry.target.id === "rebaja") {
              animatePhone("rebaja");
              setIsVisiblePhone(true);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    document
      .querySelectorAll("#olimpica, #rebaja, #corona")
      .forEach((section) => {
        observer.observe(section);
      });

    const hero =
      document.getElementById("services") || document.getElementById("hero");
    if (!hero) return;

    const observerHero = new IntersectionObserver(
      (entries) => {
        console.log(entries, "augusto");
        setIsVisiblePhone(!entries[0].isIntersecting);
      },
      { threshold: 0.55 },
    );

    observerHero.observe(hero);

    return () => {
      observer.disconnect();
      observerHero.disconnect();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "auto",
        overflow: "hidden",
        fontFamily: "Bebas Neue",
      }}
      className={styles.sectionsContainer}
    >
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={isVisiblePhone ? { opacity: 1, y: 50 } : { opacity: 0, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 720,
          zIndex: 1,
        }}
        className={styles.splineContainer}
      >
        <Spline
          onLoad={onLoad}
          scene="https://prod.spline.design/EnPMy3kCuPV-lY4v/scene.splinecode"
          style={{
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
          dpr={0.3}
          className={styles.spline}
        />
      </motion.div>

      {sections.map((section) => {
        const isStyleRight = section.id === "rebaja";
        return (
          <div
            key={section.id}
            ref={ref}
            id={section.id}
            className={isStyleRight ? styles.sectionRight : styles.sectionLeft}
            style={{
              backgroundColor: section.backgroundColor,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isVisibleSection[section.id]
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
              className={
                isStyleRight
                  ? styles.sectionContentRight
                  : styles.sectionContentLeft
              }
            >
              <motion.p
                style={{
                  color: section.color,
                  fontWeight: "600",
                  fontSize: "7.5rem",
                  margin: 0,
                  fontFamily: "Bebas Neue",
                }}
                // className={styles.sectionTitle}
              >
                {section.title}
              </motion.p>
              <p className={styles.sectionText}>{section.description}</p>
              <div className={styles.storeIcons}>
                <img
                  src={iconPlayStore}
                  alt=""
                  width="120px"
                  className={styles.storeIcon}
                  onClick={() =>
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.coronacl.app&hl=es",
                      "_blank",
                    )
                  }
                />
                <img
                  src={iconAppStore}
                  alt=""
                  width="120px"
                  className={styles.storeIcon}
                  onClick={() =>
                    window.open(
                      "https://apps.apple.com/cl/app/corona-cl/id6448643335",
                      "_blank",
                    )
                  }
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={
                isVisibleSection[section.id]
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 50 }
              }
              transition={{ duration: 1, ease: "easeOut" }}
              className={styles.detailsContainer}
            >
              {section.logros.map((logro, index) => {
                return (
                  <div key={index} className={styles.detailRow}>
                    <div
                      className={styles.decorationDiv}
                      style={{
                        backgroundColor: section.color,
                      }}
                    ></div>
                    <div className={styles.detailText}>
                      <p className={styles.detailTitle}>• {logro.title}:</p>
                      <p className={styles.detailDescription}>
                        {logro.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              {/* <div className={styles.detailRow}>
                <div
                  className={styles.decorationDiv}
                  style={{
                    backgroundColor: section.color,
                  }}
                ></div>
                <div className={styles.detailText}>
                  <p className={styles.detailTitle}>
                    • Desarrollo y optimización:
                  </p>
                  <p className={styles.detailDescription}>
                    Contribuí activamente al desarrollo de la aplicación,
                    diseñando y construyendo componentes funcionales clave para
                    la experiencia del usuario. Me aseguré de optimizar
                    funciones y mejorar el rendimiento general, garantizando una
                    ejecución fluida y estable en distintos dispositivos.
                  </p>
                </div>
              </div>
              <div className={styles.detailRow}>
                <div
                  className={styles.decorationDiv}
                  style={{
                    backgroundColor: section.color,
                  }}
                ></div>
                <div className={styles.detailText}>
                  <p className={styles.detailTitle}>• Soporte y evolutivos:</p>
                  <p className={styles.detailDescription}>
                    Participé en la evolución continua de la aplicación,
                    implementando nuevas funcionalidades y mejorando las
                    existentes según las necesidades del negocio. Además, brindé
                    soporte resolviendo errores críticos en producción,
                    asegurando la estabilidad y confiabilidad de la plataforma.
                  </p>
                </div>
              </div> */}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Sections;

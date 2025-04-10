import { motion } from "framer-motion";
import styles from "./Services.module.css";
import mobile from "../../images/mobile.png";
import web from "../../images/web.png";
import ecommerce from "../../images/ecommerce.png";
import { image } from "framer-motion/client";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Desarrollo de aplicaciones móviles",
    description:
      "Diseño y desarrollo de aplicaciones móviles nativas o híbridas con un enfoque en rendimiento, usabilidad y escalabilidad.",
    image: mobile,
  },
  {
    title: "Creación y optimización de sitios web",
    description:
      "Desarrollo de sitios web modernos, responsivos y optimizados para SEO, garantizando una experiencia de usuario fluida y atractiva.",
    image: web,
  },
  {
    title: "Desarrollo de tiendas online (E-commerce)",
    description:
      "Creación de plataformas de comercio electrónico seguras y eficientes, con integraciones de pago y gestión de productos.",
    image: ecommerce,
  },
];

export const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const services = document.getElementById("services");

    const observerOutSections = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "services") {
            setIsVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.33,
      },
    );

    [services].forEach((section) => observerOutSections.observe(section));
  }, []);

  return (
    <section className={styles.servicesContainer} id="services">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.1 }}
      >
        <p className={styles.title}>Lo que hago</p>
        <p className={styles.titleSecond}>Mis servicios</p>
      </motion.div>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.1, delay: index * 0.4 }}
          >
            <div>
              <img
                src={service.image}
                alt={service.title}
                className={styles.image}
              />
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

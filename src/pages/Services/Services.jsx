import { motion } from "framer-motion";
import styles from "./Services.module.css";

const services = [
  {
    title: "Desarrollo de aplicaciones móviles",
    description:
      "Diseño y desarrollo de aplicaciones móviles nativas o híbridas con un enfoque en rendimiento, usabilidad y escalabilidad.",
  },
  {
    title: "Creación y optimización de sitios web",
    description:
      "Desarrollo de sitios web modernos, responsivos y optimizados para SEO, garantizando una experiencia de usuario fluida y atractiva.",
  },
  {
    title: "Desarrollo de tiendas online (E-commerce)",
    description:
      "Creación de plataformas de comercio electrónico seguras y eficientes, con integraciones de pago y gestión de productos.",
  },
];

export const Services = () => {
  return (
    <section className={styles.servicesContainer} id="services">
      <motion.div>
        <p className={styles.title}>Lo que hago</p>
        <p className={styles.titleSecond}>Mis servicios</p>
      </motion.div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>
    </section>
  );
};

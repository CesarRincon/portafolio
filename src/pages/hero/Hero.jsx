import "@fontsource/montserrat";
import "@fontsource/bebas-neue";
import "@fontsource/raleway";
import { motion } from "framer-motion";
import LinkedInIcon from "../../components/Icons/LinkedInIcon";
import GithubIcon from "../../components/Icons/GithubIcon";
import GmailIcon from "../../components/Icons/GmailIcon";
import styles from "./Hero.module.css";
import Typewriter from "typewriter-effect";
import cvpdf from "../../document/CV-CesarRincon.pdf";

const Hero = () => {
  const handleDownload = () => {
    window.open(cvpdf, "_blank");
  };

  return (
    <div className={styles.container} id="hero">
      <div className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className={styles.nameContainer}
        >
          <p className={styles.firstName}>César</p>
          <p className={styles.lastName}>Rincon</p>
          <Typewriter
            options={{
              strings: ["Frontend Developer"],
              autoStart: true,
              startDelay: 1200,
              loop: true,
              wrapperClassName: styles.role,
              cursorClassName: styles.role,
            }}
          />
          {/* <p className={styles.role}>Frontend Developer</p> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
            className={styles.iconContainer}
          >
            <LinkedInIcon />
            <GithubIcon />
            <GmailIcon />
          </motion.div>
          <motion.div
            className={styles.buttonContainer}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.2 }}
          >
            <button className={styles.button} onClick={() => handleDownload()}>
              Descargar CV
            </button>
            <button
              className={styles.button}
              onClick={() => {
                document
                  .getElementById("proyects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Proyectos
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

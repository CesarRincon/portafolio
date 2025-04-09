import "@fontsource/montserrat";
import "@fontsource/bebas-neue";
import "@fontsource/raleway";
import { motion } from "framer-motion";
import LinkedInIcon from "../../components/Icons/LinkedInIcon";
import GithubIcon from "../../components/Icons/GithubIcon";
import GmailIcon from "../../components/Icons/GmailIcon";
import styles from "./Hero.module.css";

const Hero = () => {
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
          <p className={styles.role}>Frontend Developer</p>
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
            <button className={styles.button}>Resume</button>
            <button className={styles.button}>Projects</button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

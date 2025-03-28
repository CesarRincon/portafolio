import React, { useEffect, useState } from "react";
import styles from "./AboutMe.module.css";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const [isVisibleSection, setIsVisibleSection] = useState(false);

  useEffect(() => {
    const aboutMe = document.getElementById("aboutMe");
    if (!aboutMe) return;

    const observerAboutMe = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        setIsVisibleSection(entries[0].isIntersecting);
      },
      { threshold: 0.55 },
    );

    observerAboutMe.observe(aboutMe);

    return () => {
      observerAboutMe.disconnect();
    };
  }, []);

  return (
    <div className={styles.container} id="aboutMe">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50, display: "block" }}
        animate={
          isVisibleSection
            ? { opacity: 1, y: 0, display: "block" }
            : { opacity: 0, y: 50, display: "none" }
        }
        style={{
          zIndex: 99999,
        }}
      >
        {/* <Spline
          // onLoad={onLoad}
          scene="https://prod.spline.design/ImDVaeDJklevl94f/scene.splinecode"
          style={{
            height: "100%",
            width: "100%",
          }}
        /> */}
      </motion.div>
    </div>
  );
};

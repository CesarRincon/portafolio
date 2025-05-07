import React, { useEffect, useState } from "react";
import style from "./RecommendationCard.module.css";
import { motion } from "framer-motion";

export const RecommendationCard = ({
  name,
  title,
  image,
  text,
  skills,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const services = document.getElementById("recommendations");

    const observerOutSections = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "recommendations") {
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 1 }}
      className={style.recommendationCard}
    >
      <img src={image} alt={name} className={style.profileImage} />
      <div className={style.recommendationContent}>
        <h3 className={style.name}>{name}</h3>
        <p className={style.title}>{title}</p>
        <p className={style.text}>“{text}”</p>
        <div className={style.skills}>
          {skills.map((skill, index) => (
            <span className={style.skill} key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

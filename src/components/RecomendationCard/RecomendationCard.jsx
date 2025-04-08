import React from "react";
import style from "./RecommendationCard.module.css";

export const RecommendationCard = ({ name, title, image, text, skills }) => {
  return (
    <div className={style.recommendationCard}>
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
    </div>
  );
};

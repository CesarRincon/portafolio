import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { Slider } from "../../components/Slider/Slider";
import profileImage from "../../images/profile.jpg";
import cvpdf from "../../document/CV-CesarRincon.pdf";

export default function Home(props) {
  const handleOnClick = () => {
    window.open(cvpdf, "_blank");
  };

  const { flip } = props;

  return (
    <section
      id="containerHome"
      className={`${style.containerContent} ${flip ? style.flip : ""}`}
    >
      <div className={style.sectionProfile}>
        <div className={style.containerImage}>
          <img src={profileImage} alt="photoProfile" className={style.image} />
        </div>
        <div className={style.descriptionContainer}>
          <h2 className={style.title}>César Rincón</h2>
          <p className={style.descriptionTextAboutMe}>
            With 2 years of experience as a frontend developer, I partially led
            and contributed to the development and support of several
            applications, improving user experience, increasing system
            efficiency, and strengthening client relationships. Additionally, I
            ensured the platform’s availability on various devices, guaranteeing
            its technical quality
          </p>
          <button
            id="button"
            className={style.button}
            onClick={() => handleOnClick()}
          >
            Download CV
          </button>
        </div>
      </div>
      <div className={style.sectionResumePortfolio}>
        <div className={style.itemProfile}>
          <h2 className={style.itemProfileTitle}>Experience</h2>
          <h4 className={style.itemProfileTitle}>
            ITGlobers - Frontend Developer
          </h4>
          <p className={style.descriptionText}>
            As a frontend developer, I partially led a team in developing new
            features and resolving issues in our main platform. During my time
            on the project, I created several key features that significantly
            improved user experience and increased system efficiency.
          </p>
          <h4 className={style.itemProfileTitle}>Freelancer - Teach</h4>
          <p className={style.descriptionText}>
            I provided training over the course of two months on the fundamental
            concepts of JavaScript, React, Redux, Node.js, and Express,
            providing participants with a solid understanding of these key
            technologies.
          </p>
        </div>
        <div className={style.itemProfile}>
          <h2 className={style.itemProfileTitle}>Projects</h2>
          <h4 className={style.itemProfileTitle}>Olimpica</h4>
          <p className={style.descriptionText}>
            I contributed to the end-to-end development of the Olímpica mobile
            app as part of the ITGlobers team. I implemented key features,
            reusable components, and resolved bugs to ensure performance and
            user experience. Additionally, I participated in the app's
            continuous evolution, adding new features and improvements based on
            client and business needs
          </p>
          <h4 className={style.itemProfileTitle}>La Rebaja</h4>
          <p className={style.descriptionText}>
            I provided continuous support to the project, resolving bugs,
            improving the code, and implementing new features based on client
            requirements.
          </p>
        </div>
        <div className={style.sliderContainer}>
          <h2 className={style.itemProfileTitle}>Technical Skills</h2>
          <Slider />
        </div>
      </div>
    </section>
  );
}

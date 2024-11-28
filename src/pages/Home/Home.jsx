import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { Slider } from "../../components/Slider/Slider";
import profileImage from "../../images/profile.jpg";
import cvpdf from "../../document/CV-CesarRincon.pdf";

export default function Home(props) {
  const handleOnClick = () => {
    window.open(cvpdf, "_blank");
  };
  //   const containerDiv = document.getElementById("containerHome");
  //   containerDiv.scrollTop = 100;

  //   console.log(containerDiv.scrollTop);

  //   // const res = window.addEventListener("scroll");
  //   // console.log(res);
  //   // return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   const containerDiv = document.getElementById("containerHome");
  //   containerDiv.scrollTop = 0;

  //   console.log(containerDiv, "cesar");
  // }, []);

  const { flip } = props;

  return (
    <section
      id="containerHome"
      className={`${style.containerContent} ${flip ? style.flip : ""}`}
    >
      <div className={style.sectionTwo}>
        <div className={style.sectionTwoContent}>
          <div className={style.one}>
            <h2 className={style.title}>Experience</h2>
            <h4 className={style.title}>ITGlobers - Frontend Developer</h4>
            <p className={style.descriptionText}>
              As a frontend developer, I partially led a team in developing new
              features and resolving issues in our main platform. During my time
              on the project, I created several key features that significantly
              improved user experience and increased system efficiency.
            </p>
            <h4 className={style.title}>Freelancer - Teach</h4>
            <p className={style.descriptionText}>
              I provided training over the course of two months on the
              fundamental concepts of JavaScript, React, Redux, Node.js, and
              Express, providing participants with a solid understanding of
              these key technologies.
            </p>
          </div>
          <div className={style.two}>
            <h2 className={style.title}>Projects</h2>
            <h4 className={style.title}>Olimpica</h4>
            <p className={style.descriptionText}>
              I contributed to the end-to-end development of the Olímpica mobile
              app as part of the ITGlobers team. I implemented key features,
              reusable components, and resolved bugs to ensure performance and
              user experience. Additionally, I participated in the app's
              continuous evolution, adding new features and improvements based
              on client and business needs
            </p>
            <h4 className={style.title}>La Rebaja</h4>
            <p className={style.descriptionText}>
              I provided continuous support to the project, resolving bugs,
              improving the code, and implementing new features based on client
              requirements.
            </p>
          </div>
          <div className={style.sliderContent}>
            <h2 className={style.title}>Technical Skills</h2>
            <Slider />
          </div>
        </div>
      </div>
      <div className={style.sectionThree}>
        <div className={style.sectionThreeContent}>
          <div className={style.containerImage}>
            <div className={style.contentImage}>
              <img
                src={profileImage}
                alt="photoProfile"
                className={style.image}
              />
            </div>
          </div>
          <div className={style.containerDescriptionImage}>
            <div className={style.description}>
              <h2 className={style.title}>César Rincón</h2>
              <p className={style.descriptionTextAboutMe}>
                With 2 years of experience as a frontend developer, I partially
                led and contributed to the development and support of several
                applications, improving user experience, increasing system
                efficiency, and strengthening client relationships.
                Additionally, I ensured the platform’s availability on various
                devices, guaranteeing its technical quality
              </p>
              <a
                id="button"
                className={style.button}
                onClick={() => handleOnClick()}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

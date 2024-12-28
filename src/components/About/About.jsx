import React from "react";
import style from "./About.module.css";
import { Link } from "react-router-dom";
import GitHubIcon from "../../utils/icons/GithubIcon";
import profileImage from "../../images/Me.jpg";
import logolinkedin from "../../images/linkedin-logo.png";
import logogmail from "../../images/logo-gmail.png";

export const About = (props) => {
  const { flip } = props;

  return (
    <div
      id="container"
      className={`${style.container} ${flip ? style.flip : ""}`}
    >
      <section className={style.content}>
        <div className={style.textInformation}>
          <div className={style.containerTitle}>
            <p className={style.backTitle}>About</p>
            <p id="title" className={style.title}>
              César Rincón
            </p>
          </div>
          <p className={style.text}>
            I am a frontend developer with a true passion for what I do. Over my
            time in the field, I've had the opportunity to be involved in the
            development and support of several applications, where I focused on
            improving user experience, optimizing system efficiency, and
            strengthening client relationships. I love creating intuitive and
            efficient solutions that positively impact users. Additionally, I’ve
            always worked to ensure the platforms are accessible and functional
            across various devices, maintaining a high standard of technical
            quality. My enthusiasm for development drives me to keep learning
            and refining my skills, always striving for excellence in every
            project.
          </p>
          <p className={style.text}>
            Since I was a child, I’ve always been passionate about programming.
            I fondly remember writing my first lines of HTML at the age of 11 or
            12, and since then, I’ve been on a continuous journey of learning
            and improving. Over the years, my interest led me to explore
            different technologies, starting with Java, then JavaScript, and
            continuing with frameworks and languages such as React, Node,
            Python, and even applications with Java. My journey in the world of
            development continues, always focused on creating innovative and
            efficient solutions.
          </p>
        </div>
        <div className={style.textInformation}>
          <div className={style.informationContent}>
            <div>
              <img src={profileImage} alt="" width={220} height={280} />
            </div>

            <p className={style.socialMediaTitle}>Follow me on social media</p>
            <div className={style.listSocialMedia}>
              <div className={style.icon}>
                <GitHubIcon width="70px" height="70px" />
              </div>
              <div className={style.icon}>
                <img src={logolinkedin} alt="" width="100px" height="100px" />
              </div>
              <div className={style.icon}>
                <img src={logogmail} alt="" width="120px" height="70px" />
              </div>
            </div>
            <button className={style.button}>Message me here!</button>
          </div>
        </div>
      </section>
    </div>
  );
};

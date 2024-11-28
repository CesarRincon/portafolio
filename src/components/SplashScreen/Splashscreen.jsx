import React, { useEffect, useRef } from "react";
import style from "./Splashscreen.module.css";

const Splashscreen = ({ setIsLoading }) => {
  const containerSplash = useRef(null);

  useEffect(() => {
    const containerSplashElement = containerSplash.current;

    if (containerSplashElement) {
      const handleAnimationEnd = () => {
        setIsLoading(false);
      };

      containerSplashElement.addEventListener(
        "animationend",
        handleAnimationEnd,
      );
    }
  }, []);

  return (
    <div ref={containerSplash} className={style.containerSplash}>
      <h1 id="name" className={style.textName}>
        Cesar Rincón
      </h1>
      <p id="portfolio" className={style.textPortfolio}>
        Portfolio
      </p>
    </div>
  );
};

export default Splashscreen;

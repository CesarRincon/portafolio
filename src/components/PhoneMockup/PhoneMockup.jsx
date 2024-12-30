import React, { useState } from "react";
import mockupPhone from "../../images/iphone-15(3).png";
import style from "./PhoneMockup.module.css";

import { imagesOlimpica } from "../../utils/utils";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export const PhoneMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesOlimpica.length);
  };
  console.log(imagesOlimpica, "cesar");
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesOlimpica.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className={style.mockupContainer}>
      {currentIndex > 0 && (
        <button
          className={`${style.iconRow} ${style.iconBack}`}
          onClick={() => handlePrev()}
        >
          <GoChevronLeft color="rgb(250, 235, 215)" size="40px" />
        </button>
      )}
      <img
        src={imagesOlimpica[currentIndex]}
        alt=""
        className={style.image}
      />
      <img src={mockupPhone} alt="" className={style.mockup} />
      {currentIndex !== imagesOlimpica.length - 1 && (
        <button
          className={`${style.iconRow} ${style.iconNext}`}
          onClick={() => handleNext()}
        >
          <GoChevronRight color="rgb(250, 235, 215)" size="40px" />
        </button>
      )}
    </div>
  );
};

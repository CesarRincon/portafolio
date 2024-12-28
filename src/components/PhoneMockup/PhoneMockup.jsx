import React from "react";
import mockupPhone from "../../images/iphone-15(3).png";
import style from "./PhoneMockup.module.css";
import olimpica1 from "../../images/Olimpica/olimpica1.jpg";
import olimpica2 from "../../images/Olimpica/olimpica2.jpg";
import olimpica3 from "../../images/Olimpica/olimpica3.jpg";
import olimpica4 from "../../images/Olimpica/olimpica4.jpg";
import olimpica5 from "../../images/Olimpica/olimpica5.jpg";
import olimpica6 from "../../images/Olimpica/olimpica6.jpg";
import olimpica7 from "../../images/Olimpica/olimpica7.jpg";
import olimpica8 from "../../images/Olimpica/olimpica8.jpg";
import olimpica9 from "../../images/Olimpica/olimpica9.jpg";
import olimpica10 from "../../images/Olimpica/olimpica10.jpg";
import olimpica11 from "../../images/Olimpica/olimpica11.jpg";

const images = [
  {
    src: olimpica1,
  },
  {
    src: olimpica2,
  },
  {
    src: olimpica3,
  },
  {
    src: olimpica4,
  },
  {
    src: olimpica5,
  },
  {
    src: olimpica6,
  },
  {
    src: olimpica7,
  },
  {
    src: olimpica8,
  },
  {
    src: olimpica9,
  },
  {
    src: olimpica10,
  },
  {
    src: olimpica11,
  },
];

export const PhoneMockup = ({ children }) => {
  return (
    <div className={style.mockupContainer}>
      {images.map((image) => {
        return <img src={image.src} alt="" className={style.image} />;
      })}
      <img src={mockupPhone} alt="" className={style.mockup} />
    </div>
  );
};

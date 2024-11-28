import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { techImages } from "../../utils/utils";

import style from "./Slider.module.css";

export const Slider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: -40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className={style.swiper}
      initialSlide={8}
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {techImages.map((item, i) => {
        return (
          <SwiperSlide className={style.swiperSlide} key={item.img}>
            <img src={item.img} alt={item.img} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

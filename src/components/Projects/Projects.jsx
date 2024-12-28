import React from "react";

import style from "./Projects.module.css";
import { PhoneMockup } from "../PhoneMockup/PhoneMockup";

export const Projects = (props) => {
  const { flip } = props;

  return (
    <section className={`${style.container} ${flip ? style.flip : ""}`}>
      <div className={style.content}>
        <div className={style.containerProject}>
          <h4 className={style.titleProject}>Olimpica</h4>
          <PhoneMockup />
          <p className={style.description}>
            Mi rol en el proyecto:
            <br></br>
            Durante mi tiempo trabajando en la app, me encargué de:
            <br></br>
            Resolver problemas técnicos y optimizar funcionalidades para
            asegurar un rendimiento estable.
            <br></br>
            Mejorar la experiencia de usuario con ajustes en la interfaz y
            flujos de navegación. Refactorizar código para mayor eficiencia y
            tiempos de carga reducidos.
            <br></br>
          </p>
          <div className={style.storesContainer}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/871/364/non_2x/google-play-store-download-button-in-white-colors-download-on-the-google-play-store-free-png.png"
              alt=""
              width="120px"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/871/374/non_2x/app-store-download-button-in-white-colors-download-on-the-apple-app-store-free-png.png"
              alt=""
              width="120px"
            />
          </div>
        </div>
        <div className={style.containerProject}>
          <h4 className={style.titleProject}>La Rebaja</h4>
          <PhoneMockup />
          <p className={style.description}>
            Mi rol en el proyecto:
            <br></br>
            Durante mi tiempo trabajando en la app, me encargué de:
            <br></br>
            Resolver problemas técnicos y optimizar funcionalidades para
            asegurar un rendimiento estable.
            <br></br>
            Mejorar la experiencia de usuario con ajustes en la interfaz y
            flujos de navegación. Refactorizar código para mayor eficiencia y
            tiempos de carga reducidos.
            <br></br>
          </p>
          <div className={style.storesContainer}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/871/364/non_2x/google-play-store-download-button-in-white-colors-download-on-the-google-play-store-free-png.png"
              alt=""
              width="120px"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/871/374/non_2x/app-store-download-button-in-white-colors-download-on-the-apple-app-store-free-png.png"
              alt=""
              width="120px"
            />
          </div>
        </div>
        <div className={style.containerProject}>
          <h4 className={style.titleProject}>Corona</h4>
          <PhoneMockup />
          <p className={style.description}>
            Mi rol en el proyecto:
            <br></br>
            Durante mi tiempo trabajando en la app, me encargué de:
            <br></br>
            Resolver problemas técnicos y optimizar funcionalidades para
            asegurar un rendimiento estable.
            <br></br>
            Mejorar la experiencia de usuario con ajustes en la interfaz y
            flujos de navegación. Refactorizar código para mayor eficiencia y
            tiempos de carga reducidos.
            <br></br>
          </p>
          <div className={style.storesContainer}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/871/364/non_2x/google-play-store-download-button-in-white-colors-download-on-the-google-play-store-free-png.png"
              alt=""
              width="120px"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/012/871/374/non_2x/app-store-download-button-in-white-colors-download-on-the-apple-app-store-free-png.png"
              alt=""
              width="120px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

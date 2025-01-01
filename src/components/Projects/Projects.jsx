import React from "react";

import style from "./Projects.module.css";
import { PhoneMockup } from "../PhoneMockup/PhoneMockup";
import iconAppStore from "../../images/appstore.png";
import iconPlayStore from "../../images/googleplay.png";

export const Projects = (props) => {
  const { flip } = props;

  const handleClick = (store) => {
    let url;
    if (store === "appStore") {
      url = "https://play.google.com/store/apps/details?id=com.tuapp.nombre";
    } else {
      url = "";
    }
    window.open(url, "_blank"); // Abre en una nueva pestaña
  };

  return (
    <section className={`${style.container} ${flip ? style.flip : ""}`}>
      <div className={style.content}>
        <div className={style.containerProject}>
          <h4 className={style.titleProject}>Olimpica</h4>
          <PhoneMockup />
          <p className={style.description}>
            My Role in the Project:
            <br></br>
            While working on the app, my responsibilities included:
            <br></br>I contributed to the development of the application by
            designing and building functional components, resolving technical
            issues, and optimizing features to ensure stable and efficient
            performance.
            <br></br>
          </p>
          <div className={style.storesContainer}>
            <img
              src={iconPlayStore}
              alt=""
              width="120px"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=io.cordova.myapp5c2f9d&hl=en-US",
                  "_blank",
                )
              }
              style={{
                cursor: "pointer",
              }}
            />
            <img
              src={iconAppStore}
              alt=""
              width="120px"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/co/app/ol%C3%ADmpica/id1138020304",
                  "_blank",
                )
              }
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className={style.containerProject}>
          <h4 className={style.titleProject}>La Rebaja</h4>
          <PhoneMockup />
          <p className={style.description}>
            My Role in the Project:
            <br></br>
            While working on the app, my responsibilities included:
            <br></br>
            Resolve technical issues and optimize functionalities to ensure
            stable performance.
            <br></br>
            Improve user experience with adjustments to the interface and
            navigation flows. Refactor code for greater efficiency and reduced
            loading times.
            <br></br>
          </p>
          <div className={style.storesContainer}>
            <img
              src={iconPlayStore}
              alt=""
              width="120px"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.larebaja&hl=es",
                  "_blank",
                )
              }
              style={{
                cursor: "pointer",
              }}
            />
            <img
              src={iconAppStore}
              alt=""
              width="120px"
              onClick={() =>
                window.open(
                  "https://apps.apple.com/co/app/la-rebaja/id6450218648",
                  "_blank",
                )
              }
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className={style.containerProject}>
          <h4 className={style.titleProject}>Corona</h4>
          <PhoneMockup />
          <p className={style.description}>
            My Role in the Project:
            <br></br>
            While working on the app, my responsibilities included:
            <br></br>
            Resolve technical issues and optimize functionalities to ensure
            stable performance.
            <br></br>
            Improve user experience with adjustments to the interface and
            navigation flows. Refactor code for greater efficiency and reduced
            loading times.
            <br></br>
          </p>
          <div className={style.storesContainer}>
            <img
              src={iconPlayStore}
              alt=""
              width="120px"
              style={{
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.coronacl.app&hl=es",
                  "_blank",
                )
              }
            />
            <img
              src={iconAppStore}
              alt=""
              width="120px"
              style={{
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  "https://apps.apple.com/cl/app/corona-cl/id6448643335",
                  "_blank",
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

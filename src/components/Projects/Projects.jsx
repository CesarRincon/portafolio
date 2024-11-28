import React from "react";

import style from "./Projects.module.css";

export const Projects = (props) => {
  const { flip } = props;

  return (
    <section className={`${style.container} ${flip ? style.flip : ""}`}>
      <h1>Projects</h1>

    </section>
  );
};

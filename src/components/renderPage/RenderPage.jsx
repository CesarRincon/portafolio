import React from "react";
import Home from "../../pages/Home/Home";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";

export const RenderPage = (props) => {
  const { screen: page } = props;
  console.log(props);
  const pages = {
    home: <Home {...props} />,
    about: <About {...props} />,
    projects: <Projects {...props} />,
  };
  return pages[page];
};

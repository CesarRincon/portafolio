import React from "react";
import Home from "../../pages/Home/Home";
import { About } from "../About/About";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";

export const RenderPage = (props) => {
  const { screen: page } = props;
  const pages = {
    home: <Home {...props} />,
    about: <About {...props} />,
    projects: <Projects {...props} />,
    contact: <Contact {...props} />,
  };
  return pages[page];
};

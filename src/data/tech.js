import amazonImg from "../images/ImagesTech/amazonwebservices-original-wordmark.svg";
import claudeImg from "../images/ImagesTech/claude.svg";
import cssImg from "../images/ImagesTech/css3-original-wordmark.svg";
import expoImg from "../images/ImagesTech/expo.svg";
import expressImg from "../images/ImagesTech/express-original-wordmark.svg";
import figmaImg from "../images/ImagesTech/figma-icon.svg";
import gitImg from "../images/ImagesTech/git-scm-icon.svg";
import mongodbImg from "../images/ImagesTech/mongodb-original-wordmark.svg";
import mysqlImg from "../images/ImagesTech/mysql-original-wordmark.svg";
import nextImg from "../images/ImagesTech/nextdotjs.svg";
import openaiImg from "../images/ImagesTech/openai.svg";
import typescriptImg from "../images/ImagesTech/Typescript_logo_2020.svg.png";
import javaScriptImg from "../images/ImagesTech/javascript-original.svg";
import reactjsImg from "../images/ImagesTech/react-original-wordmark.svg";
import photoshopImg from "../images/ImagesTech/photoshop-line.svg";
import postgresqlImg from "../images/ImagesTech/postgresql-original-wordmark.svg";
import postmanImg from "../images/ImagesTech/getpostman-icon.svg";
import pythonImg from "../images/ImagesTech/python-original.svg";
import reduxImg from "../images/ImagesTech/redux-original.svg";
import sassImg from "../images/ImagesTech/sass-original.svg";
import sqliteImg from "../images/ImagesTech/sqlite-icon.svg";
import supabaseImg from "../images/ImagesTech/supabase.svg";
import tailwindImg from "../images/ImagesTech/tailwindcss.svg";

/**
 * group: frontend | backend | tooling
 * mono: logotipo de una sola tinta oscura — se repinta en blanco sobre el fondo.
 */
export const techStack = [
  { name: "React", img: reactjsImg, link: "https://react.dev/", group: "frontend" },
  {
    name: "React Native",
    img: reactjsImg,
    link: "https://reactnative.dev/",
    group: "frontend",
  },
  { name: "Expo", img: expoImg, link: "https://expo.dev/", group: "frontend", mono: true },
  { name: "Next.js", img: nextImg, link: "https://nextjs.org/", group: "frontend", mono: true },
  {
    name: "TypeScript",
    img: typescriptImg,
    link: "https://www.typescriptlang.org/",
    group: "frontend",
  },
  {
    name: "JavaScript",
    img: javaScriptImg,
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
    group: "frontend",
  },
  { name: "Redux", img: reduxImg, link: "https://redux.js.org", group: "frontend" },
  {
    name: "Tailwind CSS",
    img: tailwindImg,
    link: "https://tailwindcss.com/",
    group: "frontend",
    mono: true,
  },
  { name: "Sass", img: sassImg, link: "https://sass-lang.com", group: "frontend" },
  {
    name: "CSS3",
    img: cssImg,
    link: "https://developer.mozilla.org/docs/Web/CSS",
    group: "frontend",
  },

  {
    name: "Supabase",
    img: supabaseImg,
    link: "https://supabase.com/",
    group: "backend",
    mono: true,
  },
  {
    name: "Node & Express",
    img: expressImg,
    link: "https://expressjs.com",
    group: "backend",
    mono: true,
  },
  { name: "PostgreSQL", img: postgresqlImg, link: "https://www.postgresql.org", group: "backend" },
  { name: "MongoDB", img: mongodbImg, link: "https://www.mongodb.com/", group: "backend" },
  { name: "MySQL", img: mysqlImg, link: "https://www.mysql.com/", group: "backend" },
  { name: "SQLite", img: sqliteImg, link: "https://www.sqlite.org/", group: "backend" },
  { name: "Python", img: pythonImg, link: "https://www.python.org", group: "backend" },
  { name: "AWS", img: amazonImg, link: "https://aws.amazon.com", group: "backend", mono: true },

  {
    name: "Claude Code",
    img: claudeImg,
    link: "https://claude.com/claude-code",
    group: "tooling",
    mono: true,
  },
  { name: "ChatGPT", img: openaiImg, link: "https://openai.com/", group: "tooling", mono: true },
  { name: "Git", img: gitImg, link: "https://git-scm.com/", group: "tooling" },
  { name: "Postman", img: postmanImg, link: "https://postman.com", group: "tooling" },
  { name: "Figma", img: figmaImg, link: "https://www.figma.com/", group: "tooling" },
  {
    name: "Photoshop",
    img: photoshopImg,
    link: "https://www.photoshop.com/en",
    group: "tooling",
    mono: true,
  },
];

/** Cinta superior del stack: solo nombres, para el marquee infinito. */
/*
 * Solo el núcleo. Antes eran catorce nombres que repetían la mitad de la
 * rejilla de abajo: la cinta decía lo mismo dos veces y no destacaba nada.
 * Con cinco, la cinta afirma en qué trabajo de verdad y la rejilla detalla.
 */
export const marqueeItems = [
  "React Native",
  "Expo",
  "React",
  "Next.js",
  "TypeScript",
];

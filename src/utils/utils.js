import amazonImg from "../images/ImagesTech/amazonwebservices-original-wordmark.svg";
import cssImg from "../images/ImagesTech/css3-original-wordmark.svg";
import expressImg from "../images/ImagesTech/express-original-wordmark.svg";
import figmaImg from "../images/ImagesTech/figma-icon.svg";
import gitImg from "../images/ImagesTech/git-scm-icon.svg";
import mongodbImg from "../images/ImagesTech/mongodb-original-wordmark.svg";
import mysqImg from "../images/ImagesTech/mysql-original-wordmark.svg";
import typescripImg from "../images/ImagesTech/Typescript_logo_2020.svg.png";
import javaScriptImg from "../images/ImagesTech/javascript-original.svg";
import reactjsImg from "../images/ImagesTech/react-original-wordmark.svg";
import photoshopImg from "../images/ImagesTech/photoshop-line.svg";
import postgresqlImg from "../images/ImagesTech/postgresql-original-wordmark.svg";
import postmanImg from "../images/ImagesTech/getpostman-icon.svg";
import pythonImg from "../images/ImagesTech/python-original.svg";
import reduxImg from "../images/ImagesTech/redux-original.svg";
import sassImg from "../images/ImagesTech/sass-original.svg";
import sqlLiteImg from "../images/ImagesTech/sqlite-icon.svg";

export const techImages = [
  {
    img: amazonImg,
    link: "https://aws.amazon.com",
  },
  {
    img: cssImg,
    link: "https://www.w3schools.com/css/",
  },
  {
    img: expressImg,
    link: "https://expressjs.com",
  },
  {
    img: figmaImg,
    link: "https://www.figma.com/",
  },
  {
    img: gitImg,
    link: "https://git-scm.com/",
  },

  {
    img: mongodbImg,
    link: "https://www.mongodb.com/",
  },
  {
    img: mysqImg,
    link: "https://www.mysql.com/",
  },
  {
    img: typescripImg,
    link: "https://www.typescriptlang.org/",
  },
  {
    img: javaScriptImg,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    img: reactjsImg,
    link: "https://reactjs.org/",
  },
  {
    img: photoshopImg,
    link: "https://www.photoshop.com/en",
  },
  {
    img: postgresqlImg,
    link: "https://www.postgresql.org",
  },
  {
    img: postmanImg,
    link: "https://postman.com",
  },
  {
    img: pythonImg,
    link: "https://www.python.org",
  },
  {
    img: reduxImg,
    link: "https://redux.js.org",
  },
  {
    img: sassImg,
    link: "https://sass-lang.com",
  },
  {
    img: sqlLiteImg,
    link: "https://www.sqlite.org/",
  },
];

const importImages = (requireContext) =>
  requireContext.keys().map(requireContext);

export const imagesOlimpica = importImages(
  require.context("../images/Olimpica", false, /\.(png|jpe?g|svg)$/),
);

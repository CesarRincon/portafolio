export const techImages = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    link: "https://aws.amazon.com",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    link: "https://www.w3schools.com/css/",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    link: "https://expressjs.com",
  },
  {
    img: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    link: "https://www.figma.com/",
  },
  {
    img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    link: "https://git-scm.com/",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    link: "https://www.mongodb.com/",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    link: "https://www.mysql.com/",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    link: "https://www.typescriptlang.org/",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    link: "https://reactjs.org/",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
    link: "https://www.photoshop.com/en",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    link: "https://www.postgresql.org",
  },
  {
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    link: "https://postman.com",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    link: "https://www.python.org",
  },

  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    link: "https://redux.js.org",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    link: "https://sass-lang.com",
  },
  {
    img: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    link: "https://www.sqlite.org/",
  },
];

const importImages = (requireContext) =>
  requireContext.keys().map(requireContext);

export const imagesOlimpica = importImages(
  require.context("../images/Olimpica", false, /\.(png|jpe?g|svg)$/),
);

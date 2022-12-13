export let techImages = [
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
        img: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
        link: "https://flask.palletsprojects.com/",
    },
    {
        img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        link: "https://git-scm.com/",
    },
    {
        img: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
        link: "https://heroku.com",
    },
    {
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
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
        img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://reactjs.org/",
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

export let next = (value) => {
    switch (value) {
        case 1:
            return document.getElementById('containerMain').style = `transform: translateX(${1760})`
        case 2:
            return document.getElementById('containerMain').style = `transform: translateX(${740}px)`
        case 3:
            return document.getElementById('containerMain').style = `transform: translateX(${-260}px)`
        case 4:
            return document.getElementById('containerMain').style = `transform: translateX(${-1250}px)`
        case 5:
            return document.getElementById('containerMain').style = `transform: translateX(${-1740}px)`
        default:
            return document.getElementById('containerMain').style = `transform: translateX(${1760})`
    }
}
export let prev = (value) => {
    switch (value) {
        case 1:
            return document.getElementById('containerMain').style = `transform: translateX(${1760})`
        case 2:
            return document.getElementById('containerMain').style = `transform: translateX(${740}px)`
        case 3:
            return document.getElementById('containerMain').style = `transform: translateX(${-260}px)`
        case 4:
            return document.getElementById('containerMain').style = `transform: translateX(${-1250}px)`
        case 5:
            return document.getElementById('containerMain').style = `transform: translateX(${-1740}px)`
        default:
            return document.getElementById('containerMain').style = `transform: translateX(${1760})`
    }
}
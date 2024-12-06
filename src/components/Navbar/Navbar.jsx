import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

export default function Navbar(props) {
  const { setScreen, screen, setFlip } = props;

  const handleClick = (item) => {
    if (screen === item) return;
    setScreen(item);
    setFlip(true);
  };
  return (
    <nav className={s.navbar}>
      <ul id="NavUl" className={s.containerItems}>
        <li
          data-text="Home"
          className={screen === "home" ? s.itemsMenu : ""}
          onClick={() => handleClick("home")}
        >
          <NavLink to={"/home"}>
            <FaHome
              color={screen === "home" ? "#2c2d36" : "rgb(250, 235, 215)"}
              size={25}
            />
          </NavLink>
        </li>
        <li
          data-text="About"
          className={screen === "about" ? s.itemsMenu : ""}
          onClick={() => handleClick("about")}
        >
          <NavLink to={"/about"}>
            <MdPerson
              size={25}
              color={screen === "about" ? "#2c2d36" : "rgb(250, 235, 215)"}
            />
          </NavLink>
        </li>
        <li
          data-text="Projects"
          className={screen === "projects" ? s.itemsMenu : ""}
          onClick={() => handleClick("projects")}
        >
          <NavLink to={"/projects"}>
            <BsPersonWorkspace
              color={screen === "projects" ? "#2c2d36" : "rgb(250, 235, 215)"}
              size={25}
            />
          </NavLink>
        </li>
        <li
          data-text="Contact"
          className={screen === "contact" ? s.itemsMenu : ""}
          onClick={() => handleClick("contact")}
        >
          <NavLink to={"/contact"}>
            <AiOutlineMessage
              color={screen === "contact" ? "#2c2d36" : "rgb(250, 235, 215)"}
              size={25}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

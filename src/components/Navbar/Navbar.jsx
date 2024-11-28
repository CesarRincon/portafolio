import s from "./Navbar.module.css";
import { NavLink, Link } from "react-router-dom";
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
            <FaHome color="#fff" size={25} />
          </NavLink>
        </li>
        <li
          data-text="About"
          className={screen === "about" ? s.itemsMenu : ""}
          onClick={() => handleClick("about")}
        >
          <NavLink to={"/about"}>
            <MdPerson size={25} color="#fff" />
          </NavLink>
        </li>
        <li
          data-text="Projects"
          className={screen === "projects" ? s.itemsMenu : ""}
          onClick={() => handleClick("projects")}
        >
          <NavLink to={"/projects"}>
            <BsPersonWorkspace color="#fff" size={25} />
          </NavLink>
        </li>
        <li
          data-text="Contact"
          className={screen === "contact" ? s.itemsMenu : ""}
          onClick={() => handleClick("contact")}
        >
          <NavLink to={"/contact"}>
            <AiOutlineMessage color="#fff" size={25} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

import s from './Navbar.module.css'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {


  const activeNav = () => {
    let ul = document.getElementById('NavUl');
    if (ul.style.display === "flex") return ul.style.display = "none";
    ul.style.display = "flex";
  }


  return (
    <nav className={s.navbar}>
      <h1><Link to={'/'}>Cesar Rincon</Link></h1>
      <span className={s.buttonMenu} onClick={() => activeNav()}>Menu</span>
      <ul id='NavUl'>
        <li><NavLink className={({isActive}) => isActive ? s.active : "" } to={'/technologies'}>Technologies</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? s.active : "" } to={'/works'}>Works</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? s.active : "" } to={'/About'}>About Me</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? s.active : "" } to={'/Contact'}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

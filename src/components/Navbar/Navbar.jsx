import s from './Navbar.module.css'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <h1><Link to={'/'}>Cesar Rincon</Link></h1>
      <ul>
        <li><NavLink className={({isActive}) => isActive ? s.active : "" } to={'/home'}>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? s.active : "" } to={'/works'}>Works</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? s.active : "" } to={'/About'}>About Me</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? s.active : "" } to={'/Contact'}>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

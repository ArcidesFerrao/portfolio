import { NavLink } from 'react-router-dom';
import './Styles/navbar.css';

export default function navbar() {
  return (
    <div className='nav'>

        <NavLink to="/">
          <span className="material-symbols-outlined nav-i">
            code_off
          </span>
        </NavLink>

        <div className="navigate">

            <NavLink to='/projects' className={({ isActive }) => {
              return isActive ? 'active' : '';
            }}>Projects</NavLink>

            <NavLink to='/blog' className={({ isActive }) => {
              return isActive ? 'active' : '';
            }}>Blog</NavLink>

            <NavLink to='/about' className={({ isActive }) => {
              return isActive ? 'active' : '';
            }}>About</NavLink>

        </div>

        <a href="#">
          <span className="material-symbols-outlined nav-i">
            menu
          </span>
        </a>
        
    </div>
  )
}

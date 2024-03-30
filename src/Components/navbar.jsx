/* eslint-disable react-hooks/rules-of-hooks */
import { NavLink } from 'react-router-dom';
import './Styles/navbar.css';
import { useState } from 'react';



export default function navbar() {
  const [showNav, setShowNav] = useState(false)
  const handleShowMenu = () => {
    setShowNav(!showNav);
  }

  return (
    <div className='nav smallPadding' >

        <NavLink to="/">
          <span className="material-symbols-outlined nav-i">
            code_off
          </span>
        </NavLink>

        <div className="navigate hideOnMobile">

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

        <div className='nav-menu'>
          <span className="gg--dark-mode">

          </span>

          <button 
            className='openNav hideOnBig' 
            onClick={handleShowMenu} 
          >
            <span className="material-symbols-outlined nav-i">
              menu
            </span>
          </button>
        </div>
        {showNav && 
        
          <div className="navigation b" id='side-menu'>
            <button className="closeMenu" onClick={handleShowMenu}>
              <span className="codicon--close"></span>
            </button>
            <ul className='nav-list'>
              <li>
                <NavLink to='/about' className={({ isActive }) => {
                  return isActive ? 'active' : '';
                }}>About</NavLink>
              </li>
              <li>
                <NavLink to='/projects' className={({ isActive }) => {
                  return isActive ? 'active' : '';
                }}>Projects</NavLink>
              </li>
              <li>
                <NavLink to='/blog' className={({ isActive }) => {
                  return isActive ? 'active' : '';
                }}>Blog</NavLink>
              </li>
            </ul>
          </div>
        }
    </div>
  )
}

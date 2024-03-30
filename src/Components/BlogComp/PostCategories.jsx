// import { useState } from 'react';
import './Styles/PostCategories.css';
import { NavLink } from 'react-router-dom';


export default function PostCategories() {



  return (
    <div className="categories hideOnMobile">
            <ul className='list'>
                <li className='cont'>
                  <NavLink to='/blog' >
                    All...
                  </NavLink>
                  
                </li>
                <li className='cont'>
                    <NavLink 
                        to={"/blog/recent"}  
                    >
                        Recent
                    </NavLink>
                </li>
                <li className='cont'>Top 4</li>
                <li className='cont'>Front-End</li>
                <li className='cont'>Music</li>
                <li className='cont'>Art + Culture</li>
            </ul>
        </div>
  )
}

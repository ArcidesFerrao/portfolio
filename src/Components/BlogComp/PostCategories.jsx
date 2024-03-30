// import { useState } from 'react';
import './Styles/PostCategories.css';
import { NavLink } from 'react-router-dom';


export default function PostCategories() {



  return (
    <div className="categories">
            <ul className='list'>
                <li>
                  <NavLink to='/blog' >
                    All...
                  </NavLink>
                  
                </li>
                <li>
                    <NavLink 
                        to={"/blog/recent"}  
                    >
                        Recent
                    </NavLink>
                </li>
                <li>Top 4</li>
                <li>Front-End</li>
                <li>Music</li>
                <li>Art + Culture</li>
            </ul>
        </div>
  )
}

import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import './Styles/BlogPage.css';
// import { useEffect, useState } from 'react';
// import sanityClient from "../client";



export default function BlogPage() {

  

  return (
    <div className='blog-page'>
        <div className="categories">
            <ul className='list'>
                <li>
                  <NavLink to='/blog' >
                    All...
                  </NavLink>
                  
                </li>
                <li>Recent</li>
                <li>Top 4</li>
                <li>Front-End</li>
                <li>Music</li>
                <li>Art + Culture</li>
            </ul>
        </div>
        
        <Outlet />

        
        
    </div>
  )
}

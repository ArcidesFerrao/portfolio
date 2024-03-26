import { Outlet } from 'react-router-dom';


import './Styles/BlogPage.css';
// import { useEffect, useState } from 'react';
// import sanityClient from "../client";



export default function BlogPage() {

  

  return (
    <div className='blog-page'>

      <Outlet />

    </div>
  )
}

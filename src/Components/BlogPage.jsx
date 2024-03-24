import { Outlet } from 'react-router-dom';
import './Styles/BlogPage.css';


export default function BlogPage() {
  return (
    <div className='blog-page'>
        <div className="categories">
            <ul className='list'>
                <li>All...</li>
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

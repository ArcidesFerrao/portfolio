import { Outlet } from 'react-router-dom';
import './Styles/BlogPage.css';
import PostCategories from './PostCategories';

export default function BlogPage() {

  

  return (
    <div className='blog-page adjustPadding'>
      <PostCategories />
      
      <Outlet />

    </div>
  )
}

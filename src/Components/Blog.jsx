import Posts from './BlogComp/Posts';
import './Styles/Blog.css';

export default function Blog() {
  return (
    <div className='blog-container'>
        
        <div className="title-blog">
          <h2>Blog</h2>
        </div>
        
        <div className="blog-detail">
          <p>This is a space for me to share some of the stuff I learn overtime and some of my thoughts on certain topics... feel free to leave your's in the comments.</p>
        </div>
        
        <Posts />

    </div>
  )
}

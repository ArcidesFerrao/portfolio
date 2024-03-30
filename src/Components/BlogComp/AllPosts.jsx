import PostCategories from './PostCategories';
import Posts from './Posts';
import './Styles/AllPosts.css';



export default function AllPosts() {

    

  return (
    <section className="blog-posts">
      <PostCategories />
      
      <div className="blog-head">
            <h2>Blog</h2>
            <h4>Welcome to my blog. This is a space for me to share some of the stuff I learn overtime and some of my thoughts on certain topics... feel free to leave your thought in the comments.</h4>
      </div>

      <Posts />
            
    </section>
  )
}

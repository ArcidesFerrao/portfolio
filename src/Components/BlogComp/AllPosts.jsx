import './Styles/AllPosts.css';
// import webdev from '../../assets/webdev.webp';
import { Link } from 'react-router-dom';
import sanityClient from "../../client";
import { useEffect, useState } from 'react';

export default function AllPosts() {

    const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
      sanityClient.fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            categories[]-> {
                title
            },
            publishedAt
        }`
      )
      .then((data) => { 
        setAllPosts(data)
        console.log(data)
        })
      .catch(console.error);
      
    }, [])
    

  return (
    <section className="all-posts blog-posts">
        {allPostsData && allPostsData.map((post, index) => (
            <div className="post" key={index}>

                <div className="post-img">
                    <img src={post.mainImage.asset.url} alt="" className='post-image'/>
                </div>

                <div className="post-detail">

                    <div className="post-date">
                        <div className="date-posted">
                            <h4>{post.publishedAt}</h4>
                        </div>
                        <div className="post-share">
                            <a href="#">
                                <span className="quill--share"></span>
                            </a>
                        </div>
                    </div>

                    <div className="post-title">
                        <Link to={"/blog/" + post.slug.current} key={post.slug.current} >
                        
                            <h2>
                                {post.title}
                            </h2>
                        </Link>

                        <h4>{post.categories.title}</h4>
                    </div>
                    {/* <div className="post-description">
                        <p className="post-preview-text">Spent so much time learning about many other things knowing all I really wanted was to program because since the first time I tried it I never thought about nothing else...Spent so much time learning about many other things knowing all I really wanted was to program because since the first time I tried it I never thought about nothing else...</p>
                        </div> */}
                </div>
            </div>
        ))}    
            
            

        </section>
  )
}

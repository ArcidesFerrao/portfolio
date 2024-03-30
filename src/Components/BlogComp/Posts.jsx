import './Styles/Posts.css';
import { Link } from 'react-router-dom';
import sanityClient from "../../client";
import { useEffect, useState } from 'react';
import Loading from '../Loading';
// import { format } from 'date-fns';


export default function Posts() {

    const [allPostsData, setAllPosts] = useState(null);
    // const [datePost, setDatePost] = useState(null);

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
            publishedAt,
            description
        }`
      )
      .then((data) => { 

        setAllPosts(data)
        console.log(data)
        })
      .catch(console.error);
      
    }, [])

    // console.log(datePost);
    
    if (!allPostsData) return <Loading />;


  return (
    <div className="posts">
            {allPostsData && allPostsData.map((post, index) => (
                
                <div className="post cont" key={index}>

                    <div className="post-img">
                        <img src={post.mainImage.asset.url} alt="" className='post-image'/>
                    </div>

                    <div className="post-detail">


                        <div className="post-title">
                            <Link to={"/blog/" + post.slug.current} key={post.slug.current} >
                                <h3>
                                    {post.title}
                                </h3>
                            </Link>
                        </div>
                        
                        <div className="post-description">
                            <p className="post-preview-text">
                                {post.description}
                            </p>
                        </div>
                        
                        <div className="post-date">
                            <div className="date-posted">
                                <h4>
                                    {/* {format(post.publishAt, "PPP")} */}
                                    {/* { datePost => {setDatePost(format(post.publishAt, "PPP"))} } */}
                                </h4>
                            </div>
                            <div className="post-share">
                                <a href="#">
                                    <span className="quill--share"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}    

        </div>
  )
}

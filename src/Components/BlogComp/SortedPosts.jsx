import createClient from '../../client';
import './Styles/SortedPosts.css';
import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

export default function SortedPosts() {
    const [allSorted, setAllSorted] = useState(null);

    // const { sort } = useParams();


    useEffect(() => {
      createClient.fetch(
        `*[_type == "post"] | order(_publishedAt desc){
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
            console.log(data)
            setAllSorted(data);
        }
      )
      .catch(console.error)
    
      
    }, []);
    

  return (

    
        <div className="posts">
            {allSorted && allSorted.map((post, index) => (
                
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

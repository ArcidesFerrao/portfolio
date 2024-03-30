import './Styles/BlogPost.css';
import createClient from '../../client';
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { format } from "date-fns";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../Loading';

const builder = imageUrlBuilder(createClient);
function urlFor(source) {
    return builder.image(source);
}

export default function BlogPost() {

    const [postData, setPostData] = useState(null);
    const [publishDate, setPublishDate] = useState(new Date());
    const [postedDate, setPostedDate] = useState(new Date());

    const { slug } = useParams();

    useEffect(() => {
      createClient.fetch(
        `*[slug.current == $slug]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            publishedAt,
            description
        }`,
        { slug }
      ).then((data => {
            setPostData(data[0]);
            console.log(data[0]);
            setPublishDate(data[0].publishedAt);
        }))
      .catch(console.error);
        

    }, [slug]);

    useEffect(() => {
      setPostedDate(format(publishDate, "PPP"));
    //   console.log(postedDate);
    }, [publishDate, postedDate]);

    if (!postData) return <Loading />;
    

  return (
    <section className="blog-post-container">
        
        <div className='blog-block'>
            <div className="posted-date">
                <span className="lets-icons--date-today-duotone">
                    
                </span>
                {postedDate}
            </div>

            <div className='title-post shorten'>
                <h1 className='blog-title'>{postData.title}</h1>
            </div>
            
            <div className="description-post shorten">
                <p>
                    {postData.description}
                </p>
            </div>
            <img 
                className='blog-image'
                src={urlFor(postData.mainImage).url()} 
                alt="" 
            />
            
            <BlockContent 
                className='post-block'
                blocks={postData.body}
                projectId={createClient.config.projectId}
                dataset={createClient.config.dataset}
            />
            
        </div>

        <div className="author">
            <div className="writtenBy down-border">
                <h4>Written by: {postData.name}</h4>
            </div>

            <div className="tags down-border">
                <h3 className='auth-title'>Tags</h3>
                <div className="tag-container contain">
                    <div className="tags-post cont">
                        <p>Sanity</p>
                    </div>
                </div>
            </div>

            <div className="share-post down-border">
                <h3 className='auth-title'>Share Post</h3>

                <div className="icon-share contain">
                    <div className="icon-container cont">
                        <span className="bi--github icon-size"></span>
                    </div>
                    <div className="icon-container cont">
                        <span className="pajamas--twitter icon-size"></span>
                    </div>
                    <div className="icon-container cont">
                        <span className="bi--linkedin icon-size"></span>
                    </div>

                </div>
            </div>
        </div>

        <div className="post-reference">
            <h2>References</h2>
            <div className="ref-link">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </section>
  )
}
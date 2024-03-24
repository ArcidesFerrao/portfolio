import './Styles/BlogPost.css';
import createClient from '../../client';
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const builder = imageUrlBuilder(createClient);
function urlFor(source) {
    return builder.image(source);
}

export default function BlogPost() {

    const [postData, setPostData] = useState(null);
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
        }`,
        { slug }
      ).then((data => {
            setPostData(data[0])
            console.log(data)
        }))
      .catch(console.error);
    
    }, [slug]);

    if (!postData) return <div>Loading...</div>;
    

  return (
    <section className="blog-post">


        <div>
            <div>
                <h2>{postData.title}</h2>

                <div>
                    {/* <img 
                        src={urlFor(postData.authorImage).width(100).url()} 
                        alt="Author" 
                    /> */}
                    <h3>{postData.name}</h3>
                </div>
            </div>

            <img 
                src={urlFor(postData.mainImage).width(200).url()} 
                alt="" 
            />

            <div>
                <BlockContent 
                    blocks={postData.body}
                    projectId={createClient.config.projectId}
                    dataset={createClient.config.dataset}
                />
            </div>
        </div>

    </section>
  )
}

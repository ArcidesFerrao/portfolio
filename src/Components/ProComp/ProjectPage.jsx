import { useParams } from 'react-router-dom';
import './Styles/ProjectPage.css';
import { useEffect, useState } from 'react';
import createClient from '../../client';
import Loading from '../Loading';

export default function ProjectPage() {
  const [workedOn, setWorkedOn] = useState(null);
  const [techSet, setTechSet] = useState(null);

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
        description,
        projectUrl,
        tagSet
      }`,
      { slug }
    )
    .then((data => {
      setWorkedOn(data[0]);
      console.log(data[0]);
      console.log(data[0].tagSet)
      setTechSet(data[0].tagSet);
    }))
    .catch(console.error);
  }, [slug]);
  
  if (!workedOn) return <Loading />;
    

  return (
    <div className='page-container adjustSize'>
        <div className="head-project">
          <h2>{workedOn.title}</h2>
          <div className='url-container'>
            <a href={workedOn.projectUrl} className='project-url' target='_blank' >
              Explore
            </a>
          </div>
        </div>

        <div className="image-project">
          <img src={workedOn.mainImage.asset.url} alt=""/>
        </div>

        <div className="overview-project sec">
          <div className="over-title">
            <h3 className='pr-page-title'>Overview</h3>
          </div>

          <div className="over-block">
            <p>{workedOn.description}</p>
          </div>
        </div>

        <div className="tec-project sec">
          <div className='technology-title'>
            <h3 className='pr-page-title'>Technologies</h3>
          </div>
          <div className="technology-list">
            {techSet && techSet.map((tech, index) => (
              <div className="tech-container" key={index}>
                <p className="each-tech">{tech}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

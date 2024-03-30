/* eslint-disable react/no-unescaped-entities */
import './Styles/Projects.css';
// import scRelogio1 from "../../assets/Sc-1.png";
// import scCard from "../../assets/Sc-card.png";
import { Link } from 'react-router-dom';
import createClient from '../../client';
import Loading from '../Loading';
import { useEffect, useState } from 'react';


export default function AllProjects() {

    const [projectsData, setProjectsData] = useState(null);


    useEffect(() => {
      createClient.fetch(
        `*[_type == "worked"]{
            title,
            slug,
            projectUrl,
            description,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
        }`
      )
      .then((data) => {
        setProjectsData(data)
        console.log(data)
      })
      .catch(console.error);
    
    }, []);

    if (!projectsData) return <Loading />;
    


    // const projectObj = [
    //     {
    //         url: "https://arcidesferrao.github.io/business-card/,",
    //         prPath: '/projects/business-card',
    //         prIcon: "material-symbols-outlined pr-i",
    //         iconName: "id_card",
    //         prName: "Business Card",
    //         pic: scCard,

    //         shDesc: "",
    //     },
    //     {
    //         url: "https://arcidesferrao.github.io/relogio-digital/",
    //         prName: "Digital Clock",
    //         pic: scRelogio1,
    //         shDesc: "",
    //     },
    //     {
    //         url: "https://arcidesferrao.github.io/application/",
    //         prName: "Application",
    //         pic: "",
    //         shDesc: "",
    //     },
    //     {
    //         url: "https://arcidesferrao.github.io/resume/",
    //         prName: "Resume",
    //         pic: "",
    //         shDesc: "",
    //     },
    // ];

  return (
    <>
        <div className="projects-head">
          <h2>Projects</h2>
          <h4>I've worked on tons of little projects over the years but these are the ones that I'm most proud of.</h4>
        </div>
        
        <div className="projects adjustPadd">
            
    
            {projectsData && projectsData.map((project, index) => (
                <div className="project-container cont" key={index}>
                    <div className="project-image">
                        <img src={project.mainImage.asset.url} alt="" />
                    </div>
    
                    <div className="project-detail">
                        <Link to={"/projects/" + project.slug.current} key={project.slug.current}>
                            <div className="project-name">
                                <h3>{project.title}</h3>
                            </div>
                        </Link>
                        
                        <div className="project-description">
                            <p className='description-text'>{project.description}</p>
                        </div>
                    </div>
    
                </div>
            ))}
    
        </div>
        
    </>
  )
}

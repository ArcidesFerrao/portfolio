import './Styles/Projects.css';
import scRelogio1 from "../../assets/Sc-1.png";
import scCard from "../../assets/Sc-card.png";
import { Link } from 'react-router-dom';



export default function AllProjects() {

    const projectObj = [
        {
            url: "https://arcidesferrao.github.io/business-card/,",
            prPath: '/projects/business-card',
            prIcon: "material-symbols-outlined pr-i",
            iconName: "id_card",
            prName: "Business Card",
            pic: scCard,

            shDesc: "",
        },
        {
            url: "https://arcidesferrao.github.io/relogio-digital/",
            prName: "Digital Clock",
            pic: scRelogio1,
            shDesc: "",
        },
        {
            url: "https://arcidesferrao.github.io/application/",
            prName: "Application",
            pic: "",
            shDesc: "",
        },
        {
            url: "https://arcidesferrao.github.io/resume/",
            prName: "Resume",
            pic: "",
            shDesc: "",
        },
    ];

  return (
    <>
        <div className="projects-head">
          <h2>Projects</h2>
          <h4>Ive worked on tons of little projects over the years but these are the ones that Im most proud of.</h4>
        </div>
        
        <div className="projects">
            
    
            {projectObj && projectObj.map((project, index) => (
                <div className="project-container" key={index}>
                    <div className="project-image">
                        <img src={project.pic} alt="" />
                    </div>
    
                    <div className="project-detail">
                        <Link to={project.prPath}>
                            <div className="project-name">
                                <span className={project.prIcon} >
                                    {project.iconName}
                                </span>
                                <h3>{project.prName}</h3>
                            </div>
                        </Link>
                        
                        <div className="project-description">
                            <h4>{project.shDesc}</h4>
                        </div>
                    </div>
    
                </div>
            ))}
    
        </div>
        
    </>
  )
}
import './Styles/ProjectPage.css';

export default function ProjectPage() {
    
  return (
    <div className='page-container'>
        <div className="head-project">
          <h2>Project Page</h2>
          <div className='url-container'>
            <a href="#" className='project-url'>
              Explore
            </a>
          </div>
        </div>

        <div className="image-project">

        </div>

        <div className="overview-project">
          <div className="over-title">
            <h3 className='pr-page-title'>Overview</h3>
          </div>

          <div className="over-block">
            <p></p>
          </div>
        </div>

        <div className="tec-project">
          <div className='technologies'>
            <h3 className='pr-page-title'>Technologies</h3>
          </div>
        </div>
    </div>
  )
}

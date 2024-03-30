import { Outlet } from 'react-router-dom';
import './Styles/ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <section className="projects-page flexDisplay">

      <Outlet />
            
    </section>
  )
}

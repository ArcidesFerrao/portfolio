import Welcome from './Welcome';
import Skills from './Skills';
import Projects from './Projects';
import Blog from './Blog';

export default function Home() {

  return (
    <div className='pag'>
        <Welcome />
        <Skills />
        <Projects />
        <Blog />
        {/* <Music /> */}
    </div>

  )
}

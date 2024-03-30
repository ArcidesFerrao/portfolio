import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';



function App() {

  return (
    <>
    
      <nav className="bar " >
        <Navbar />
      </nav>

      <Outlet />

      <section className='footer-container smallPadding'>
        <Footer />
      </section>
    </>
  )
}

export default App

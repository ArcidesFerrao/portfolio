import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/Footer';



function App() {

  return (
    <>
    
      <div className="bar">
        <Navbar />
      </div>

      <Outlet />

      <section className='footer-container'>
        <Footer />
      </section>
    </>
  )
}

export default App

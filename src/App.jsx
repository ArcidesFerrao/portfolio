import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/navbar';



function App() {

  return (
    <>
    
      <div className="bar">
        <Navbar />
      </div>

      <Outlet />

    </>
  )
}

export default App

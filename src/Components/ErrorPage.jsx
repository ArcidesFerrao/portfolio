import Navbar from './navbar';
import './Styles/ErrorPage.css';


export default function ErrorPage() {
  return (
    <div className='error-msg'>
        <Navbar />

        <div className="msg">
            <h3>
              404 Page not Found!!
            </h3>

        </div>
    </div>
  )
}

import Navbar from './navbar';
import './Styles/ErrorPage.css';


export default function ErrorPage() {
  return (
    <div className='error-msg'>
        <Navbar />

        <div className="msg">
            <h2>

                404 Page not Found!!
            </h2>

        </div>
    </div>
  )
}

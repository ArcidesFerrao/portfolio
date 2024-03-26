import './Styles/Footer.css';

export default function Footer() {
  return (
    <>
      <div className="built-container">
        <h4>Built with:</h4>
        
        <div className="small-skill">
          <span className="logos--react">
          </span> 

          <h4>React</h4>
        </div>
        
        <div className="small-skill">
          <span className="devicon--sanity">
          </span> 
          <h4>Sanity</h4>
        </div>
      </div>
      <div className='copy-container'>
        <p className='coyrights'>Copyright © Arcides Ferrao 2024 All rights Reserved</p>
      </div>
    </>
  )
}

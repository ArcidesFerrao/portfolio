import './Styles/BlogPage.css';
import webdev from '../assets/webdev.webp';


export default function BlogPage() {
  return (
    <div className='blog-page'>
        <div className="categories">
            <ul className='list'>
                <li>All...</li>
                <li>Recent</li>
                <li>Top 4</li>
                <li>Front-End</li>
                <li>Music</li>
                <li>Art + Culture</li>
            </ul>
        </div>
        <div className="blog-posts">
            <div className="post">
                <div className="post-img">
                    <img src={webdev} alt="webdev" className='post-image'/>
                </div>

                <div className="post-detail">
                    <div className="post-date">
                        <div className="date-posted">
                            <h4>14th, march 2024</h4>
                        </div>

                        <div className="post-share">
                            <a href="#">
                                <span className="quill--share"></span>
                            </a>
                        </div>
                    </div>

                    <div className="post-title">
                        <h2>
                            Dev Ambitions
                        </h2>
                    </div>

                    <div className="post-description">
                        <p>Spent so much time learning about many other things knowing all I really wanted was to program because since the first time I tried it I never thought about nothing else...Spent so much time learning about many other things knowing all I really wanted was to program because since the first time I tried it I never thought about nothing else...</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

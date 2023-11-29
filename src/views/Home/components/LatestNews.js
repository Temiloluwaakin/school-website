import { Link } from "react-router-dom";
import img1 from '../img/img2.JPG';

const LatestNews = () => {
    return (
        <div className="latestnews">
            <div className="latestnewscontainer">
                <h2>News</h2>
                <p>Updates from across the school</p>
                <div className="newspreview">
                    <div className="news">
                        <Link to="/blog">
                            <img className="img-fluid" src={img1} alt="" /><br/><br/>
                            Our student carries first in outing
                        </Link>
                        <p>Our Open Days are aimed at prospective applicants
                            from Year 12 (or equivalent) and mature applicants 
                            aged 21 or over, to help them learn more about Cambridge. 
                            Attend in-person or online.
                        </p>
                    </div>
                    <div className="news">
                        <Link to="/blog">
                            <img className="img-fluid" src={img1} alt="" /><br/><br/>
                            Professorship of one of our teachers
                        </Link>
                        <p>Our Open Days are aimed at prospective applicants 
                            from Year 12 (or equivalent) and mature applicants 
                            aged 21 or over, to help them learn more about Cambridge. 
                            Attend in-person or online.
                        </p>
                    </div>
                    <div className="news">
                        <Link to="/blog">
                            <img className="img-fluid" src={img1} alt="" /><br/><br/>
                            We are hiring
                        </Link>
                        <p>Our Open Days are aimed at prospective applicants 
                            from Year 12 (or equivalent) and mature applicants 
                            aged 21 or over, to help them learn more about Cambridge. 
                            Attend in-person or online.
                        </p>
                    </div>
                </div>
                <Link to="/blog" className="llk"> <button class="btn btn-dark">See more News</button> </Link>
            </div>
        </div>
    );
}
 
export default LatestNews;
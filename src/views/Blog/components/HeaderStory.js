import { Link } from "react-router-dom";
import headimg1 from '../Images/headimg1.jpg';
import headimg2 from '../Images/headimg2.jpg';

const HeaderStory = () => {
    return (
        <div className="headerstory">
            <div className="topstory">
                <div className="headernews"><Link to="#">
                    <p className="ccc">Service</p>
                    <h3>Our student was awarded first position at an academic competition </h3>
                    <p>Our Open Days are aimed at prospective applicants from Year 12 
                        (or equivalent) and mature applicants aged 21 or over, to help 
                        them learn more about Cambridge. Attend in-person or online.
                    </p>
                    <p>Read More</p>
                </Link></div>
                <div>
                    <img className="img" src={headimg1} alt="" />
                </div>
            </div>
            <div className="btmstory">
                <div>
                    <img className="img" src={headimg2} alt="" />
                </div>
                <div className="headernews"><Link to="#">
                    <p className="ccc">Service</p>
                    <h3>Our student was awarded first position at an academic competition </h3>
                    <p>Our Open Days are aimed at prospective applicants from Year 12 
                        (or equivalent) and mature applicants aged 21 or over, to help 
                        them learn more about Cambridge. Attend in-person or online.
                    </p>
                    <p>Read More</p>
                </Link></div>
            </div>
        </div>
    );
}
 
export default HeaderStory;
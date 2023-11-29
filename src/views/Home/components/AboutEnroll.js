import { Link } from "react-router-dom";

const AboutEnroll = () => {
    return (
        <div className="aboutenroll">
            <div className="aboutside">
                <h2>Our School</h2>
                <p>
                    LIS provides an Islamic learning environment with a 
                    commitment of using modern day teaching pedagogy to 
                    cultivate an advanced and comprehensive academic program; 
                    fully compliant with the Ontario curriculum of studies. 
                    We are a K to 8 school with a wide array of resources designed to 
                    foster student achievement that will prepare our pupils to pursue higher 
                    education and be competitive in their careers.
                </p>
                <button><Link to="/about"> Read More</Link></button>
            </div>
            <div className="enrollside">
                <h2>Admissions</h2>
                <p>
                    The London Islamic School gives a fair and equal chance to all applicants 
                    who fulfill the admission requirements; dependent upon space availability. 
                    To determine admission eligibility for students transferring from another school, 
                    official report cards as well as other supporting documents are submitted upon application.
                </p>
                <button>Read More</button>
            </div>
        </div>
    );
}
 
export default AboutEnroll;
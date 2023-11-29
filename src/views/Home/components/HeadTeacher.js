import { Link } from "react-router-dom";

const HeadTeacher = () => {
    return (
        <div className="headteacher">
            <div className="headteachermessage">
                <h3>MESSAGE FROM THE HEADTEACHER</h3>
                <p>I am delighted to welcome you to Darul Athar school.
                    This website contains a range of information about our school and I hope you find it useful.<br /><br />
                    darul athar School is a Muslim faith primary school where we believe that every 
                    school day counts and every child matters. Our school motto, We Learn, We Lead, 
                    We Inspire reflects our belief that all children are entitled to a quality education 
                    to reach their highest potential and experience success. <br /><br />
                    Our pursuit of excellence embraces Islamic values aligned with the 
                    fundamental values at the core of everything we do. We nurture 
                    the development of knowledge, confidence, creativity, skills and understanding 
                    to help our children develop into happy, healthy, caring and successful local, 
                    national and global citizens…
                </p>
                <Link to="/about" className="lnk"> <button class="btn btn-dark">READ MORE</button> </Link>
            </div>
        </div>
    );
}
 
export default HeadTeacher;
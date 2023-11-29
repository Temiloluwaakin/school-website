import { Link } from "react-router-dom";
import team1 from '../images/team-1.jpg';
import team2 from '../images/team-2.jpg';
import team3 from '../images/team-3.jpg';
import team4 from '../images/team-4.jpg';

const AboutTeam = () => {
    return(
        <div className="container-xxl py-6">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{maxWidth: '500px'}}>
                    <h6 className="text-primary text-uppercase mb-2">Meet The Team</h6>
                    <h1 className="display-6 mb-4">We Have Great Experience Of Driving</h1>
                </div>
                <div className="row g-0 team-items">
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item position-relative">
                            <div className="position-relative">
                                <img className="img-fluid" src={team1} alt="" />
                                <div className="team-social text-center">
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to=""><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="mt-2">Full Name</h5>
                                <span>Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item position-relative">
                            <div className="position-relative">
                                <img className="img-fluid" src={team2} alt="" />
                                <div className="team-social text-center">
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to=""><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="mt-2">Full Name</h5>
                                <span>Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" >
                        <div className="team-item position-relative">
                            <div className="position-relative">
                                <img className="img-fluid" src={team3} alt="" />
                                <div className="team-social text-center">
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to=""><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to=""><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to=""><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="mt-2">Full Name</h5>
                                <span>Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team-item position-relative">
                            <div className="position-relative">
                                <img className="img-fluid" src={team4} alt="" />
                                <div className="team-social text-center">
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to="#"><i className="fab fa-twitter"></i></Link>
                                    <Link className="btn btn-square btn-outline-primary border-2 m-1" to="#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="mt-2">Full Name</h5>
                                <span>Trainer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTeam;
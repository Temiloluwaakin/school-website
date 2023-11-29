import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Footer = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  behavior: "smooth",
          transition: '0.5s'
		});
	  };

	  useEffect(() => {
		const toggleVisibility = () => {
		  if (window.pageYOffset > 500) {
			setIsVisible(true);
		  } else {
			setIsVisible(false);
		  }
		};
	
		window.addEventListener("scroll", toggleVisibility);
	
		return () => window.removeEventListener("scroll", toggleVisibility);
	  }, []);


	return (
		<>
			<div className="container-fluid bg-dark text-light footer my-6 mb-0 py-6">
				<div className="container">

					<div className="row g-5">
						<div className="col-lg-4 col-md-6">

							<h4 className="text-white mb-4">Get In Touch</h4>
							<h2 className="text-primary mb-4"><i className="fa fa-school text-white me-2"></i>Darul Athar</h2>
							<p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>2, Adesola
								Adedimeji Street, Opp First Foundation, Oroki Housing Estate,
								Osogbo, Osun State, Nigeria.</p>
							<p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+2348174996060, +234816509200</p>
							<p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
						</div>
						<div className="col-lg-3 col-md-6 " >
							<h4 className="text-light mb-4">Quick Links</h4>
							<Link className="btn btn-link" to="">About Us</Link>
							<Link className="btn btn-link" to="">Contact Us</Link>
							<Link className="btn btn-link" to="">Our Services</Link>
						</div>
						<div className="col-lg-5 col-md-6">
							<h4 className="text-light mb-4">Newsletter</h4>
							<form action="">
								<div className="input-group">
									<input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
									<button className="btn btn-primary">Sign Up</button>
								</div>
							</form>
							<h6 className="text-white mt-4 mb-3">Follow Us</h6>
							<div className="d-flex pt-2">
								<Link className="btn btn-square foot btn-outline-light me-1" to=""><i className="fab fa-twitter"></i></Link>
								<Link className="btn btn-square foot btn-outline-light me-1" to=""><i className="fab fa-facebook-f"></i></Link>
								<Link className="btn btn-square foot btn-outline-light me-1" to=""><i className="fab fa-youtube"></i></Link>
								<Link className="btn btn-square foot btn-outline-light me-0" to=""><i className="fab fa-linkedin-in"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
   


			<div className="container-fluid copyright text-light py-4">
				<div className="container">
					<div className="row">
						<div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
							&copy; <Link to="#">Darul-athar</Link>, All Right Reserved.
						</div>
					</div>
				</div>
			</div>

    		{isVisible && (<Link to="#"  onClick={scrollToTop} className="btn btn-lg btn-primary btn-lg-square back-to-top">
				<i className="bi bi-arrow-up"></i></Link>)}
		</>
	);
};

export default Footer;

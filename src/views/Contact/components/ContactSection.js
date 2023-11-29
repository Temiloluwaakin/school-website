import { Link } from "react-router-dom";

const ContactSection = () => {
	return (
		<div className="contactsection">
			<div className="incontsect">
				<div className="insidecontact">
					<h3>Fill out the form and we'll be in touch as soon as possible</h3>

					<form div className="col-sm-6 frrm">
						<div class="form-group">
							<label for="formName">Your name</label>
							<input type="text" id="formName" class="form-control" />
						</div>
						<div class="form-group">
							<label for="formEmail">Email address</label>
							<input type="email" id="formEmail" class="form-control" />
						</div>
						<div class="form-group">
							<label for="formNumber">Phone Number</label>
							<input type="number" id="formNumber" class="form-control" />
						</div>
						<div class="form-group">
							<label for="formMessage">Your message</label>
							<textarea
								class="form-control"
								rows="4"
								id="formMessage"
							></textarea>
						</div>
						<br></br>
						<button type="submit" class="btn btn-primary subbtn">
							Submit
						</button>
					</form>
				</div>
			</div>
			<div className="contactinfo">
				<h3>CONTACT INFO</h3>
				<p className="mb-2">
					<i className="fa fa-map-marker-alt me-3"></i> 2, Adesola Adedimeji
					Street, Opp First Foundation, Oroki Housing Estate, Osogbo, Osun
					State, Nigeria.
				</p>
				<p className="mb-2">
					<i className="fa fa-phone-alt me-3"></i>08174996060, 0816509200
				</p>
				<p className="mb-2">
					<i className="fa fa-envelope me-3"></i>info@example.com
				</p>

				<Link className="btn btn-square square btn-outline-dark me-1" to="#">
					<i className="fab fa-twitter"></i>
				</Link>
				<Link className="btn btn-square square btn-outline-dark me-1" to="#">
					<i className="fab fa-facebook-f"></i>
				</Link>
				<Link className="btn btn-square square btn-outline-dark me-1" to="#">
					<i className="fab fa-youtube"></i>
				</Link>
				<Link className="btn btn-square square btn-outline-dark me-0" to="#">
					<i className="fab fa-linkedin-in"></i>
				</Link>
			</div>
		</div>
	);
};

export default ContactSection;

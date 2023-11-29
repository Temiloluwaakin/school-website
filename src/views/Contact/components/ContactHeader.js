import img from "../images/schlbui1.png";

const ContactHeader = () => {
	return (
		<div className="carousel-bg-img" style={{ backgroundImage: `url(${img})`, marginTop:`80px` }}>
			<div className="inner-bg-black">
				<div className="carousel-text">
					<div className="header-text">
						<h2>Our team is happy to answer all your questions</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactHeader;

const Homeheader = () => {
    return (
        <div className="homeheader">
            <div class="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
				<div
					id="header-carousel"
					class="carousel slide"
					data-bs-ride="carousel"
				>


					<div class="carousel-inner">
						<div class="carousel-item active">
							<img
								class="w-100"
								src={require("../img/schlbui1.png")}
								alt="carousel-1"
							/>
							<div class="carousel-caption">
								<div class="container">
									<div class="row justify-content-center">
										<div class="col-lg-7">
											<h1 class="display-2 text-light mb-3 animated slideInDown">
												Welcome to Darul Athar
											</h1>
											<div href="#" class="btn btn-primary py-sm-3 px-sm-5">
												Learn More
											</div>
											<div href="" class="btn btn-light py-sm-3 px-sm-5 ms-3">
												Our Courses
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>


						<div class="carousel-item">
							<img
								class="w-100"
								src={require("../img/schlbui3.jpg")}
								alt="carousel-2"
							/>
							<div class="carousel-caption">
								<div class="container">
									<div class="row justify-content-center">
										<div class="col-lg-7">
											<h1 class="display-2 text-light mb-5 animated slideInDown">
												Building Learning Communities
											</h1>
											<div href="" class="btn btn-primary py-sm-3 px-sm-5">
												Learn More
											</div>
											<div href="" class="btn btn-light py-sm-3 px-sm-5 ms-3">
												Our Courses
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<button
						class="carousel-control-prev"
						type="button"
						data-bs-target="#header-carousel"
						data-bs-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button
						class="carousel-control-next"
						type="button"
						data-bs-target="#header-carousel"
						data-bs-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
			</div>
			<div></div>
        </div>
    );
}
 
export default Homeheader;
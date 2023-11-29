import { Link } from "react-router-dom";
import img1 from '../img/img-1.jpg'
import img2 from '../img/slide2.jpg'
import img3 from '../img/img4.jpg'

const ClassesOpeningPage = ({img}) => {
  return (
    <div className="classesopeningpage">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6">
					<div className="team-item position-relative">
						<div className="position-relative">
							<img className="img-fluid" src={img1} alt="" style ={{width:'522px', height:'224.51px'}} />
							<div className="team-social text-center">
								<Link className="btn btn-primary btn-outline-success opacity-75 border-2 m-1" to="/classes/prog1"><span>Learn More</span></Link>
							</div>
						</div>
						<div className="bg-light text-center p-4">
							<h5 className="mt-2">AT-TAMHEEDIY PROGRAMME</h5>
							<span>PREPARATORY CLASS</span>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-6">
					<div className="team-item position-relative">
						<div className="position-relative">
							<img className="img-fluid" src={img2} alt="" style ={{width:'522px', height:'224.51px'}} />
							<div className="team-social text-center">
								<Link className="btn btn-primary btn-outline-success opacity-75 border-2 m-1" to="/classes/prog2"><span>Learn More</span></Link>
							</div>
						</div>
						<div className="bg-light text-center p-4">
							<h5 className="mt-2">AL-'IDAADIYAH PROGRAMME</h5>
							<span>JUNIOR SECONDARY</span>
						</div>
					</div>
				</div>

                <div className="col-lg-6 col-md-6 last">
                    <div className="team-item position-relative ">
                        <div className="position-relative">
                            <img className="img-fluid" src={img3} alt="" style ={{width:'522px', height:'224.51px'}} />
                            <div className="team-social text-center">
                                <Link className="btn btn-primary btn-outline-success opacity-75 border-2 m-1" to="/classes/prog3"><span>Learn More</span></Link>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="mt-2">ATH-THAANAWIYYAH PROGRAMME</h5>
                            <span>SENIOR SECONDARY</span>
                        </div>
                    </div>
                 </div>
            </div>
	
		</div>
    </div>
  )
}

export default ClassesOpeningPage
import { Link } from "react-router-dom";
import $img from '../images/img-1.jpg'

const OpeningPage = ({img}) => {
  return (
    <>
        <div className="carousel-bg-img" style={{backgroundImage:`url(${img})`, marginTop:`70px` }}>
			<div className="inner-bg-black">
				<div className="carousel-text">
					<div className="header-text">
						<h2>Events</h2>
					</div>
					<div className="breadcrumbs">
						<span><Link to='/'>Home</Link>  /  <Link to='#'>Pages</Link>  /  <Link className='about' to='#'>Events</Link></span>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="events col-lg-8 col-md-6">
					<div className="featured">
						<h1>Featured Events</h1>
						<p>--image-slider--</p>
					</div>
					<div className="others">
						<div className="row row1 py-3 border-bottom bg-light">
							<img className="col-lg-4 col-md-6" src={$img} alt="" />
							<div className="col-lg-8 col-md-6"><Link to=''className="hover"><h3>Title</h3></Link>
							<span className="date">June, 11, 2022</span> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
							Consequuntur rerum optio, magnam dignissimos</p></div>
						</div>
						<div className="row row2 py-3 border-bottom bg-light">
							<img className="col-lg-4 col-md-6" src={$img} alt="" />
							<div className="col-lg-8 col-md-6"><Link to=''className="hover"><h3>Title</h3></Link>
							<span className="date">June, 11, 2022</span> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
							Consequuntur rerum optio, magnam dignissimos</p></div>
						</div>
						<div className="row row3 py-3 border-bottom bg-light">
							<img className="col-lg-4 col-md-6" src={$img} alt="" />
							<div className="col-lg-8 col-md-6"><Link to=''className="hover"><h3>Title</h3></Link>
							<span className="date">June, 11, 2022</span> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
							Consequuntur rerum optio, magnam dignissimos</p></div>
						</div>
						<div className="row row4 py-3 border-bottom bg-light">
							<img className="col-lg-4 col-md-6" src={$img} alt="" />
							<div className="col-lg-8 col-md-6"><Link to=''className="hover"><h3>Title</h3></Link>
							<span className="date">June, 11, 2022</span> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
							Consequuntur rerum optio, magnam dignissimos</p></div>
						</div>
						<div className="row row5 py-3 border-bottom bg-light">
							<img className="col-lg-4 col-md-6" src={$img} alt="" />
							<div className="col-lg-8 col-md-6"><Link to=''className="hover"><h3>Title</h3></Link>
							<span className="date">June, 11, 2022</span> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
							Consequuntur rerum optio, magnam dignissimos</p></div>
						</div>
						<div className="row row6 py-3 border-bottom bg-light" >
							<img className="col-lg-4 col-md-6" src={$img} alt="" />
							<div className="col-lg-8 col-md-6"><Link to=''className="hover"><h3>Title</h3></Link>
							<span className="date">June, 11, 2022</span> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
							Consequuntur rerum optio, magnam dignissimos</p></div>
						</div>
					</div>	
				
					<div className="py-5 centerbtn">
						<Link to="" className="col-sm-6 btn btn-light py-sm-3 px-sm-5 ms-3">Learn More
						</Link>
					</div>
				</div>
				
				<div className="snippets col-lg-4 col-md-6">
					<h1>Miscallenous</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nisi minus alias nostrum ab quaerat.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nisi minus alias nostrum ab quaerat.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nisi minus alias nostrum ab quaerat.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nisi minus alias nostrum ab quaerat.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nisi minus alias nostrum ab quaerat.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nisi minus alias nostrum ab quaerat.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nisi minus alias nostrum ab quaerat.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nisi minus alias nostrum ab quaerat.</p>
				</div>
			</div>
			
		</div>
    </>
  )
}

export default OpeningPage

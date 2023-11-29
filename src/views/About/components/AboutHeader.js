import {Link} from 'react-router-dom';

const AboutHeader = ({img}) => {
  return (
    <div className="carousel-bg-img" style={{backgroundImage:`url(${img})`, marginTop:`70px`}}>
        <div className="inner-bg-black">
            <div className="carousel-text">
                <div className="header-text">
                    <h2>About Us</h2>
                </div>
                <div className="breadcrumbs">
                    <span><Link to='/'>Home</Link>  /  <Link to='#'>Pages</Link>  /  <Link className='about' to='#'>About</Link></span>
                </div>
            </div>
        </div>
    </div>    
  )
}

export default AboutHeader
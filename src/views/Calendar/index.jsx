import Layout from "../../components/layout";
import { Link } from "react-router-dom";
import './calendar.css';
import Gtt from "../../components/Gtt";

const Calendar = ({img}) => {
  return (
    <Layout>
        <div className="carousel-bg-img" style={{backgroundImage:`url(${img})`, marginTop:`70px`}}>
            <div className="inner-bg-black">
                <div className="carousel-text">
                    <div className="header-text">
                        <h2>Calendar</h2>
                    </div>
                    <div className="breadcrumbs">
                        <span><Link to='/'>Home</Link>  /  <Link to='#'>Pages</Link>  /  <Link className='about' to='#'>Calender</Link></span>
                    </div>
                </div>
            </div>
        </div> 
        <div className="container py-5">
            <h3 className='text-center'>Darul Athar Islamic Academy School Year Calendar  2021 – 2022</h3>
            <p className="lead">* Since the calendar is subject to change during the course of the school year,
             the web version may contain updates not reflected in the printed version of this publication.</p>
            <table className="table table-bordered table-striped py-2">
                <thead className="table-primary">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Activity</th>
                    </tr>
                </thead>
                <tr >
                    <td>Barcelona</td>
                    <td><i className="fa fa-check text-primary me-2"></i>England</td>
                </tr>
                <tr >
                    <td>Barcelona</td>
                    <td><i className="fa fa-check text-primary me-2"></i>England</td>
                </tr>
                <tr >
                    <td>Barcelona</td>
                    <td><i className="fa fa-check text-primary me-2"></i>England</td>
                </tr>
                <tr >
                    <td>Barcelona</td>
                    <td><i className="fa fa-check text-primary me-2"></i>England</td>
                </tr>
                <tr >
                    <td>Barcelona</td>
                    <td><i className="fa fa-check text-primary me-2"></i>England</td>
                </tr>
                <tr >
                    <td>Barcelona</td>
                    <td><i className="fa fa-check text-primary me-2"></i>England</td>
                </tr>
                <tr >
                    <td>Barcelona</td>
                    <td><i className="fa fa-check text-primary me-2"></i>England</td>
                </tr>
                <tr >
                    <td>Johann Cruyff</td>
                    <td><i className="fa fa-check text-primary me-2"></i>Alf Ramsey</td>
                </tr>
            </table>
        </div>
        <Gtt /> 
    </Layout>
  )
}

export default Calendar








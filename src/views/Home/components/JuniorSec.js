import React from 'react';
import Layout from "../../../components/layout";

const JuniorSec = () => {
  return (
    <Layout>
        <div className="container prep">
            <div>
                <h2 className="page-header text-center">AL-'IDAADIYAH PROGRAMME (JUNIOR SECONDARY)</h2>
                <p className='lead'>Our Junior Secondary programme (JS 1 and JS 2) focusses on:</p>
            </div>
            <div>
                <h5><i className="fa fa-check text-primary me-2"></i>Developing the students' proficiency in:</h5>
                <div className="list-div">
                    <ul className="list-group">
                        <li className="list-group-items">Tajweed</li>
                        <li className="list-group-items">Aqeedah</li>
                        <li className="list-group-items">Nahw</li>
                        <li className="list-group-items">Sarf</li>
                        <li className="list-group-items">Al-Qira'atul 'Arabiyyah</li>
                        <li className="list-group-items">Hadeeth</li>
                        <li className="list-group-items">Fiqh</li>
                        <li className="list-group-items"> Tareekh (Islamic History)</li>
                    </ul>
                </div>
            </div>
            <div className='div2'>
                <h5><i className="fa fa-check text-primary me-2"></i>The Federal Government Junior Secondary syllabus</h5>
                <div className="list-div">
                    <ul className="list-group">
                        <li className="list-group-items">
                        This syllabus will be used to prepare the students for the subjects to be offered in the Federal Junior School Exams.
                        </li>
                    </ul> 
                </div><br />
                <span><b>DURATION</b>: 2 Academic sessions of 6 terms (3 terms/session).</span> <br />
                <span><b>ELIGIBILITY</b>: Students must not be more than 13 years of age, must have completed primary school, must have memorised at least 2/3rds of the Qur'an and must be able to write and communicate conveniently in basic Arabic.</span> 
            
            </div>
        </div>
	</Layout>
  )
}

export default JuniorSec
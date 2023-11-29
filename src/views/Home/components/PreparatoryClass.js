import React from 'react'
import Layout from "../../../components/layout";

const PreparatoryClass = () => {
  return (
    <Layout>
        <div className="container prep">
            <div>
                <h2 className="page-header text-center">AT-TAMHEEDIY (PREPARATORY CLASS)</h2>
                <p className='lead'>The preparatory class for students before joining our JS classes focuses on 2 major things:</p>
            </div>
            <div>
                <h5><i className="fa fa-check text-primary me-2"></i>Memorization of the Qur'an and Learning Basic Arabic</h5>
                <div className="list-div">
                    <ul className="list-group">
                        <li className="list-group-items">
                        The student will continue the memorization of the Qur'an from wherever s/he would have stopped before joining the school.
                        </li>
                        <li className="list-group-items">
                        Acquire sound knowledge of basic Arabic language; both conversational and written.
                        </li>
                        <li>
                        General exposure to basic knowledge of the religion: at-Tawheed, Usulul-Eeman, Taharah (Purification), Salaat, Nawaafil, Daily Adhkar and Aadab (Islamic manners).
                        </li>
                    </ul>
                </div>
            </div>
            <div className='div2'>
                <h5><i className="fa fa-check text-primary me-2"></i>Preparing the students for Federal Common Entrance Exam</h5>
                <div className="list-div">
                    <ul className="list-group">
                        <li className="list-group-items">
                        Students will be taken on the subjects - Mathematics, English, Verbal and Quantitative Reason and other subjects to adequately prepare them for the Federal Common Entrance Exams.
                        </li>
                    </ul> 
                </div><br />
                <span><b>DURATION</b>: A full Academic session of 3 terms.</span> <br />
                <span><b>ELIGIBILITY</b>: Pupil must have at least completed Basic 4 (Primary 4) with good results from previous school and must not be less than 8 years old.</span>   
                <span>S/he must be able to at least read in Arabic.</span>         
            </div>
        </div>
	</Layout>
  )
}

export default PreparatoryClass
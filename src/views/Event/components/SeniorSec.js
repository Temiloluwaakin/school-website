import Layout from "../../../components/layout";

const SeniorSec = () => {
  return (
    <Layout>
    <div className="container">
        <div>
            <h2 className="page-header text-center">ATH-THAANAWIYYAH PROGRAMME (SENIOR SECONDARY)*</h2>
            <p className='lead'>Our Senior Secondary programme (SS1 and SS2) focusses on:</p>
        </div>
        <div>
            <h5><i className="fa fa-check text-primary me-2"></i>Uloomul-Qur'an and Usul-Tafseer, Usul al-Fiqh, Mustalahul Hadeeth, Nahw, Balagah, Seerah, al-Faraaid</h5>
        </div>
        <div className='div2'>
            <h5><i className="fa fa-check text-primary me-2"></i>The Federal Government Senior Secondary syllabus</h5>
            <div className="list-div">
                <ul className="list-group">
                    <li className="list-group-items">
                    This syllabus will be used to prepare the students for the subjects to be offered in the Senior School Certificate and similar exams.
                    </li>
                </ul> 
            </div> <br />
            <span><b>DURATION</b>: 2 Academic sessions of 6 terms (3 terms/session).</span> <br />
            <span><b>ELIGIBILITY</b>: Students must not be more than 15 years of age, must have completed Junior Secondary School, must have memorised the entire Qur'an and must be able to write and communicate conveniently in standard Arabic.</span> 
            <p>S/he must pass the school interview.</p>
                    
        </div>
        <div className="unavailable">
            <p>* Senior School Programme is unavailable now.</p>
        </div>
    </div>
</Layout>
  )
}

export default SeniorSec
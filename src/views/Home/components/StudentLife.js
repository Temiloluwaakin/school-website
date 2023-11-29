import sidepic from '../img/sidepic.PNG';
import sidepic2 from '../img/sidepic2.PNG';

const StudentLife = () => {
    return (
        <div className="studentlife">
            <div className="studcontainer">
                <div className="sidepic">
                    <img className="img" src={sidepic} alt=""/><br/>
                    <img className="img" src={sidepic2} alt=""/>
                </div>
                <div className="studlfpara">
                    <h2>DARUL ATHAR</h2>
                    <h4>Student Life</h4>
                    <p>At this school, we believe in giving our students a voice 
                        and instilling in them a passion to be involved with their 
                        school community. It is evident that students are at the 
                        forefront of understanding the needs of making their school 
                        into an environment that promotes a safe and healthy learning 
                        environment.  For this reason, LIS is committed in providing a 
                        well balanced spiritual, academic and social well-being experience
                        for it's students. Students are encouraged to hone their talents 
                        in order to serve and participate in and beyond our community.
                    </p>
                </div>
                <div className="sidepic">
                    <img className="img" src={sidepic} alt=""/><br/>
                    <img className="img" src={sidepic2} alt=""/>
                </div>
            </div>
        </div>
    );
}
 
export default StudentLife;
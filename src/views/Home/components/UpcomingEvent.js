import { Link } from "react-router-dom";

const UpcomingEvent = () => {
    return (
        <div className="upcomingevent">
            <div className="upcomingcontainer">
                <div className="uphead events">
                    <h2>Upcoming Events</h2>
                    <button><Link to="/events"> VIEW ALL </Link></button>
                </div>
                <div className="events">
                    <h2>JUN 10</h2>
                    <span>
                        <p className="taggs">SPORTS</p>
                        <h3>Inter-house Sports</h3>
                        <p>1:30 p.m. </p>
                        <p>Come join in learning about the new 
                            technologies offered by NanoPlus, 
                            a company specializing in laser diode 
                            development
                        </p>
                    </span>
                </div>
                <div className="events">
                    <h2>JUN 14</h2>
                    <span>
                        <p className="taggs">EVENT</p>
                        <h3>Cultural day</h3>
                        <p>1:30 p.m. </p>
                        <p>Come join in learning about the new 
                            technologies offered by NanoPlus, 
                            a company specializing in laser diode 
                            development
                        </p>
                    </span>
                </div>
                <div className="events">
                    <h2>JUN 20</h2>
                    <span>
                        <p className="taggs">PARENTS AND TEACHER</p>
                        <h3>Open Day</h3>
                        <p>1:30 p.m. </p>
                        <p>Come join in learning about the new 
                            technologies offered by NanoPlus, 
                            a company specializing in laser diode 
                            development
                        </p>
                    </span>  
                </div>
            </div>


            <div className="upcomingcontainer">
                <div className="uphead events">
                </div>
                <div className="events">
                    <h2>JUL 12</h2>
                    <span>
                        <p className="taggs">EVENT</p>
                        <h3>Tech Expo</h3>
                        <p>1:30 p.m. </p>
                        <p>Come join in learning about the new 
                            technologies offered by NanoPlus, 
                            a company specializing in laser diode 
                            development
                        </p>
                    </span>
                </div>
                <div className="events">
                    <h2>JUN 10</h2>
                    <span>
                        <p className="taggs">SPORTS</p>
                        <h3>Inter-house Sports</h3>
                        <p>1:30 p.m. </p>
                        <p>Come join in learning about the new 
                            technologies offered by NanoPlus, 
                            a company specializing in laser diode 
                            development
                        </p>
                    </span>
                </div>
                <div className="events">
                    <h2>JUN 10</h2>
                    <span>
                        <p className="taggs">SPORTS</p>
                        <h3>Inter-house Sports</h3>
                        <p>1:30 p.m. </p>
                        <p>Come join in learning about the new 
                            technologies offered by NanoPlus, 
                            a company specializing in laser diode 
                            development
                        </p>
                    </span>  
                </div>
            </div>
        </div>
    );
}
 
export default UpcomingEvent;
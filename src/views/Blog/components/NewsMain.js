import news1 from '../Images/news1.PNG';
import {Link} from "react-router-dom";

const NewsMain = () => {
    return (
        <div className="newsmain">
            <div className="mainnewshead">
                <h1>All News</h1>
                <form>
                    <input type="text" placeholder="search" id="hwm" name="hwm" />

                    <select id="serviceQuality">
                        <option selected value="0">- Any -</option>
                        <option value="0.3">Sports</option>
                        <option value="0.2">Academics</option>
                        <option value="0.15">Awards</option>
                        <option value="0.1">Student Life</option>
                        <option value="0.05">Parents</option>
                    </select>
                    <button id="calcc" type="button">Search</button>
                </form>
            </div>
            <div className="newscontainer">
                <article>
                    <Link to="#"><img className="img" src={news1} alt="" /></Link>
                    <h5 className='chgcl'>SPORTS</h5>
                    <Link to="#"><h5>Our school athletics were crowned champions at inter-school competition </h5></Link>
                </article>
                <article>
                    <Link to="#"><img className="img" src={news1} alt="" /></Link>
                    <h5 className='chgcl'>SPORTS</h5>
                    <Link to="#"><h5>Our school athletics were crowned champions at inter-school competition </h5></Link>
                </article>
                <article>
                    <Link to="#"><img className="img" src={news1} alt="" /></Link>
                    <h5 className='chgcl'>SPORTS</h5>
                    <Link to="#"><h5>Our school athletics were crowned champions at inter-school competition </h5></Link>
                </article>
                <article>
                    <Link to="#"><img className="img" src={news1} alt="" /></Link>
                    <h5 className='chgcl'>SPORTS</h5>
                    <Link to="#"><h5>Our school athletics were crowned champions at inter-school competition </h5></Link>
                </article>
                <article>
                    <Link to="#"><img className="img" src={news1} alt="" /></Link>
                    <h5 className='chgcl'>SPORTS</h5>
                    <Link to="#"><h5>Our school athletics were crowned champions at inter-school competition </h5></Link>
                </article>
                <article>
                    <Link to="#"><img className="img" src={news1} alt="" /></Link>
                    <h5 className='chgcl'>SPORTS</h5>
                    <Link to="#"><h5>Our school athletics were crowned champions at inter-school competition </h5></Link>
                </article>
                <article>
                    <Link to="#"><img className="img" src={news1} alt="" /></Link>
                    <h5 className='chgcl'>SPORTS</h5>
                    <Link to="#"><h5>Our school athletics were crowned champions at inter-school competition </h5></Link>
                </article>
                <article>
                    <Link to="#"><img className="img" src={news1} alt="" /></Link>
                    <h5 className='chgcl'>SPORTS</h5>
                    <Link to="#"><h5>Our school athletics were crowned champions at inter-school competition </h5></Link>
                </article>
                
            </div>

        </div>
    );
}
 
export default NewsMain;
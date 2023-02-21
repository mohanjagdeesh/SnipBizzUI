import Header from "../Header";
import FooterSection from "../FooterSection";

import "./index.css"

const Careers = () => {
    const careersList = () => (
        <div className="careers-list">
            <div className="career-item-cont">
            <div>
            <p className="type">Full time</p>
            <p className="role">BUSINESS MANAGER</p>
            </div>
            <div>
            <p className="type">Location</p>
            <p className="city">City, State, Country</p>
            </div>
            <button className="apply-button">Apply Now</button>
            </div>
            <div className="career-item-cont">
            <div>
            <p className="type">Full time</p>
            <p className="role">BUSINESS MANAGER</p>
            </div>
            <div>
            <p className="type">Location</p>
            <p className="city">City, State, Country</p>
            </div>
            <button className="apply-button">Apply Now</button>
            </div>
            <div className="career-item-cont">
            <div>
            <p className="type">Full time</p>
            <p className="role">BUSINESS MANAGER</p>
            </div>
            <div>
            <p className="type">Location</p>
            <p className="city">City, State, Country</p>
            </div>
            <button className="apply-button">Apply Now</button>
            </div>
            <div className="career-item-cont">
            <div>
            <p className="type">Full time</p>
            <p className="role">BUSINESS MANAGER</p>
            </div>
            <div>
            <p className="type">Location</p>
            <p className="city">City, State, Country</p>
            </div>
            <button className="apply-button">Apply Now</button>
            </div>
            <div className="career-item-cont">
            <div>
            <p className="type">Full time</p>
            <p className="role">BUSINESS MANAGER</p>
            </div>
            <div>
            <p className="type">Location</p>
            <p className="city">City, State, Country</p>
            </div>
            <button className="apply-button">Apply Now</button>
            </div>
            <div className="career-item-cont">
            <div>
            <p className="type">Full time</p>
            <p className="role">BUSINESS MANAGER</p>
            </div>
            <div>
            <p className="type">Location</p>
            <p className="city">City, State, Country</p>
            </div>
            <button className="apply-button">Apply Now</button>
            </div>
        </div>
    )

    const careersContainer = () => (
        <div className="careers-cont">
            <h2 className="we-hire">GREAT PEOPLE DESERVE GREAT BENEFITS</h2>
            <p className="we-hire-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
            ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="tfg-list">
            <div className="tfg-cont">
            <img className="tfg-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1676452432/Vector_1_lg6ygt.png" alt = "teamwork"/>
            <h3 className="tfg-head">TEAM WORK</h3>
            <p className="tfg-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
            ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="tfg-cont">
            <img className="tfg-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1676457126/Vector_2_v3zvhj.png" alt = "teamwork"/>
            <h3 className="tfg-head">FLEXIBLE</h3>
            <p className="tfg-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
            ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="tfg-cont">
            <img className="tfg-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1676457121/Vector_3_dbhlxw.png" alt = "teamwork"/>
            <h3 className="tfg-head">GROW</h3>
            <p className="tfg-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
            ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            </div>
            <h2 className="we-hire">We’re Hiring</h2>
            <p className="we-hire-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec 
            ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
    )

    const joinWithUs = () => (
        <div className="join-with-us">
            <img className="direction-img" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1676460393/Vector_4_ozhmqr.png" alt = "map"/>
            <div>
                <h1 className="join-us-head">Let’s join with us</h1>
                <p className="join-us-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <button className="join-now-button">Join Now</button>
        </div>
    )

    return(
    <div className="car-main-container">
        <div className="car-header">
            <Header/>
        </div>
    <div className="car-heading-cont">
        <h1 className="car-heading">Careers</h1>
    </div>
        <div>
            {careersContainer()}
            {careersList()}
            {joinWithUs()}
        </div>
        <FooterSection/>
    </div>
    )
   
}

export default Careers
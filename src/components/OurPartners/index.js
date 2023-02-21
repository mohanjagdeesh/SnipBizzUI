
import {RiArrowDropLeftLine , RiArrowDropRightLine} from "react-icons/ri"

import "./index.css"

const OurPartners = () => (
    <div className="partners-cont">
        <h1 className="partner-heading">Our Partners</h1>
        <div className="partners">
            <RiArrowDropLeftLine className="left-arrow"/>
            <div className="partner">
                <img className="dhl" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675669015/dhl_logo-removebg-preview_hxy7l2.png" alt = "dhl"/>
            </div>
            <div className="partner">
                <img className="fedex" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675669357/image_2_s6_xvutvp.png" alt = "fedex"/>
            </div>
            <div className="partner">
                <img className="ups" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675669363/1200px-United_Parcel_Service_logo_2014_1_s7_dpkjwo.png" alt = "ups"/>
            </div>
            <div className="partner">
                <img className="aramex" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675669371/image_4_s8_xwagrc.png" alt = "aramex"/>
            </div>
            <div className="partner">
                <img className="usps" src = "https://res.cloudinary.com/duapyyftc/image/upload/v1675669376/fgfg_1_s9_pfhuwh.png" alt = "usps"/>
            </div>
            <RiArrowDropRightLine className="right-arrow"/>
        </div>
    </div>
)


export default OurPartners
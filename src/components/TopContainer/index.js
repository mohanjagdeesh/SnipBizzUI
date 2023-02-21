import { BsFillRecordCircleFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { GiWeight } from "react-icons/gi";

import "./index.css";

import Header from "../Header";


const TopContainer = () => (
  <div className="top-container">
    <Header/>
    <div className="main-container">
      <div className="left-container">
        <h3 className="shop">
        Ship your package with best rates from reliable shipping companies.
        </h3>
        <img
          className="shipping"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1676020937/discount-design-copy_2_ipmdoe.png"
          alt="off"
        />
        <div className="input-container">
          <BsFillRecordCircleFill />
          <p className="input-text">Enter pickup location</p>
        </div>
        <img
          className="line"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1675425943/Line_4_s7_mkqqvm.png"
          alt="line"
        />
        <div className="input-container">
          <MdLocationOn className="icon" />
          <p className="input-text">Enter destination</p>
        </div>
        <div className="input-container">
          <GiWeight />
          <p className="input-text">Enter Approximate Weight</p>
        </div>
        <p className="question">
          Do you need help for get approximate weight and measurements?
        </p>
        <div className="stars">
          <button className="get-quote">Get Quote</button>
          <img
            className="star-img"
            src="https://res.cloudinary.com/duapyyftc/image/upload/v1675425560/Untitled-1_1_s6_vughy5.png"
            alt="star"
          />
        </div>
        <a href="https://www.google.com" target="_blank" rel = "noreferrer">Need to book multiple shipments?</a>
      </div>
      <div className="right-container">
      <img
      className="box"
      src="https://res.cloudinary.com/duapyyftc/image/upload/v1676020325/warehouse-flights---Copy_1_vp9wtn.png"
      alt="box"
    />
        <h3 className="shop">
          Shop anywhere in US let us ship to your doorstep in your country* <span className="tax">Tax free*</span>
        </h3>
        <button className="howit-works">How it works</button>
      </div>
    </div>
  </div>
);

export default TopContainer;

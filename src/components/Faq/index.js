import { FiSearch } from "react-icons/fi";
import { GrFormDown } from "react-icons/gr";

import Header from "../Header";
import FooterSection from "../FooterSection";

import "./index.css";

const Faq = () => (
  <div className="faq-main-cont">
    <div className="faq-header">
      <Header />
    </div>
    <div className="faq-head-cont">
      <h1 className="faq-head">Frequently Asked Questions</h1>
      <div className="faq-search">
        <p className="search-text">Search</p>
        <FiSearch />
      </div>
    </div>
    <div className="faq-services-main-cont">
      <div className="faq-services-sub-cont">
        <div className="faq-services-names-cont">
          <p className="faq-service-name">Courier Service</p>
          <p className="faq-service-name1">Forward Shipping</p>
        </div>
        <div className="faq-services-list">
          <div className="faq-service-item">
            <img
              className="faq-service-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676627188/image_17_zodpgy.png"
              alt="general"
            />
            <p className="faq-service-text">General</p>
          </div>
          <div className="faq-service-item">
            <img
              className="faq-service-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676627197/carbon_delivery_swx3qw.png"
              alt="delivery"
            />
            <p className="faq-service-text">Delivery</p>
          </div>
          <div className="faq-service-item">
            <img
              className="faq-service-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676627206/Rectangle_633_xfvclp.png"
              alt="custom"
            />
            <p className="faq-service-text">Custom</p>
          </div>
          <div className="faq-service-item">
            <img
              className="faq-service-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676627236/Vector_5_jhd2xp.png"
              alt="payments"
            />
            <p className="faq-service-text">Payments</p>
          </div>
          <div className="faq-service-item">
            <img
              className="faq-service-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676627244/Vector_6_txt485.png"
              alt="login"
            />
            <p className="faq-service-text">Login</p>
          </div>
          <div className="faq-service-item">
            <img
              className="faq-service-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676627289/Rectangle_636_i921jn.png"
              alt="courier"
            />
            <p className="faq-service-text">Courier</p>
          </div>
          <div className="faq-service-item">
            <img
              className="faq-service-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676627252/Group_pda7nh.png"
              alt="forward"
            />
            <p className="faq-service-text">Forward Shipping</p>
          </div>
          <div className="faq-service-item">
            <img
              className="faq-service-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676627220/image_16_ktdmsp.png"
              alt="other"
            />
            <p className="faq-service-text">Other</p>
          </div>
        </div>
      </div>
      <div className="faq-contact-main-cont">
        <div className="faq-contact-cont">
          <div className="faq-contact-img-cont">
            <img
              className="faq-contact-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676631223/Vector_7_w0obq0.png"
              alt="chat"
            />
          </div>
          <p className="faq-contact-text">Chat</p>
        </div>
        <div className="faq-contact-cont">
          <div className="faq-contact-img-cont">
            <img
              className="faq-contact-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676631233/Vector_8_eayawc.png"
              alt="email"
            />
          </div>
          <p className="faq-contact-text">Email</p>
        </div>
        <div className="faq-contact-cont">
          <div className="faq-contact-img-cont">
            <img
              className="faq-contact-img"
              src="https://res.cloudinary.com/duapyyftc/image/upload/v1676631236/Vector_9_nwfekf.png"
              alt="phone"
            />
          </div>
          <p className="faq-contact-text">Phone</p>
        </div>
        <div className="faq-help-cont">
          <p className="faq-help-text">Need More Help?</p>
          <p className="faq-submit-text">Submit a Question</p>
          <p className="faq-text-area">Enter Text Here</p>
          <br />
          <button className="faq-submit-button">Submit</button>
        </div>
      </div>
    </div>
    <div className="faq-questions-cont">
      <h1 className="faq-question-heading">Popular Questions</h1>
      <hr />
      <div className="faq-question-cont">
        <p className="faq-question">Can I ship large or heavy packages?</p>
        <GrFormDown className="faq-question-icon" />
      </div>
      <hr />
      <div className="faq-question-cont">
        <p className="faq-question">Do you offer door to door delivery?</p>
        <GrFormDown className="faq-question-icon" />
      </div>
      <hr />
      <div className="faq-question-cont">
        <p className="faq-question">What is an expedited shipping service?</p>
        <GrFormDown className="faq-question-icon" />
      </div>
      <hr />
      <div className="faq-question-cont">
        <p className="faq-question">What time will my item be delivered?</p>
        <GrFormDown className="faq-question-icon" />
      </div>
      <hr />
      <div className="faq-question-cont">
        <p className="faq-question">
          How long will it take for my package to be delivered?
        </p>
        <GrFormDown className="faq-question-icon" />
      </div>
      <hr />
      <div className="faq-question-cont">
        <p className="faq-question">
          My package is lost- what should I do now?
        </p>
        <GrFormDown className="faq-question-icon" />
      </div>
      <hr />
      <div className="faq-question-cont">
        <p className="faq-question">Can I send a package to another state?</p>
        <GrFormDown className="faq-question-icon" />
      </div>
      <hr />
      <div className="faq-question-cont">
        <p className="faq-question">
          Do you offer cheap international shipping services?
        </p>
        <GrFormDown className="faq-question-icon" />
      </div>
      <hr />
      <div className="faq-question-cont">
        <p className="faq-question">What should I do if my package is late?</p>
        <GrFormDown className="faq-question-icon" />
      </div>
      <hr />
      <div className="faq-question-cont">
        <p className="faq-question">What happens if my item arrives damaged?</p>
        <GrFormDown className="faq-question-icon" />
      </div>
      <hr />
    </div>
    <FooterSection />
  </div>
);

export default Faq;

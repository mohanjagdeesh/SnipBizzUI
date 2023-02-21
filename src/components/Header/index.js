import { Link } from "react-router-dom";
import { BsCart2, BsFillCaretDownFill, BsSearch } from "react-icons/bs";

const Header = () => (
  <div className="header">
    <Link to="/">
      <img
        className="logo"
        src="https://res.cloudinary.com/duapyyftc/image/upload/v1675420710/SnipBiz-Logos_1_s5_ii6rte.png"
        alt="Logo"
      />
    </Link>
    <ul className="list-container">
      <li className="list-item">How It Works</li>
      <li className="list-item">Partners</li>
      <li className="list-item">Tracking</li>
      <Link to="/faq">
        <li className="list-item">FAQ</li>
      </Link>
      <li className="list-item">US Debit card</li>
      <li className="list-item">Contact</li>
      <Link to="careers">
        <li className="list-item">Careers</li>
      </Link>
    </ul>
    <button className="login-button" type="button">
      Login/Register
    </button>
    <BsCart2 className="cart" />
    <span className="en">
      en <BsFillCaretDownFill />
    </span>
    <BsSearch />
  </div>
);

export default Header;

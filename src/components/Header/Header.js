import React from "react";
import logo from "../../img/logos/omnifood-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header" id="header">
      <Link activeClass="active" to="/" className="main-nav-link">
        <img src={logo} alt="omnifood logo" className="logo"></img>
      </Link>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link
              activeClass="active"
              to="how-it-works"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="main-nav-link"
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="meals"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
              className="main-nav-link"
            >
              Meals
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
              className="main-nav-link"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
              className="main-nav-link"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="first-meal"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="main-nav-link"
            >
              Try for free
            </Link>
          </li>
        </ul>
      </nav>
      <button id="mobile-btn-nav" className="btn-mobile-nav">
        <MenuIcon
          className="icon-mobile-nav"
          name="menu-outline"
          fontSize="large"
        />
        <CloseIcon
          className="icon-mobile-nav"
          name="close-outline"
          fontSize="large"
        />
      </button>
    </header>
  );
};

export default Header;

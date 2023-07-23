import React from "react";
import logo from "../img/logos/omnifood-logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img src={logo} alt="omnifood logo" className="logo"></img>
          </a>

          <ul className="social-links">
            <li>
              <a href="#" className="footer-link">
                <InstagramIcon
                  name="instagram-logo"
                  className="social-icon"
                  sx={{ fontSize: "2.5rem" }}
                />
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <FacebookOutlinedIcon
                  name="facebook-logo"
                  className="social-icon"
                  sx={{ fontSize: "2.5rem" }}
                />
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <TwitterIcon
                  name="twitter-icon"
                  className="social-icon"
                  sx={{ fontSize: "2.5rem" }}
                />
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; 2023 by Omnifood, Inc. All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a href="tel:415-201-6370" className="footer-link">
                415-201-6370
              </a>
              <br />
              <a href="mailto:hello@omnifood.com" className="footer-link">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                About Omnifood
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Recipe directory{" "}
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

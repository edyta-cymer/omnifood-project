import React from "react";
import hero from "../img/hero.webp";
import customerOne from "../img/customers/customer-1.jpg";
import customerTwo from "../img/customers/customer-2.jpg";
import customerThree from "../img/customers/customer-3.jpg";
import customerFour from "../img/customers/customer-4.jpg";
import customerFive from "../img/customers/customer-5.jpg";
import customerSix from "../img/customers/customer-6.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <Link
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
              className="btn btn--full margin-right-sm"
            >
              Start Eating Well
            </Link>
            {/* <a href="#" className="btn btn--full margin-right-sm">
              
            </a> */}
            <Link
              activeClass="active"
              to="how-it-works"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="btn btn--outline"
            >
              Learn more &darr;
            </Link>
            {/* <a href="/" className="">
              
            </a> */}
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src={customerOne} alt="customer's face"></img>
                <img src={customerTwo} alt="customer's face"></img>
                <img src={customerThree} alt="customer's face"></img>
                <img src={customerFour} alt="customer's face"></img>
                <img src={customerFive} alt="customer's face"></img>
                <img src={customerSix} alt="customer's face"></img>
              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src={hero}
              alt="Woman enjoying food, meal"
              className="hero-img"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

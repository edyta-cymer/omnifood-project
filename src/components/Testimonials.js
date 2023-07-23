import React from "react";
import customerOne from "../img/customers/dave.jpg";
import customerTwo from "../img/customers/ben.jpg";
import customerThree from "../img/customers/steve.jpg";
import customerFour from "../img/customers/hannah.jpg";
import gallery01 from "../img/gallery/gallery-1.jpg";
import gallery02 from "../img/gallery/gallery-2.jpg";
import gallery03 from "../img/gallery/gallery-3.jpg";
import gallery04 from "../img/gallery/gallery-4.jpg";
import gallery05 from "../img/gallery/gallery-5.jpg";
import gallery06 from "../img/gallery/gallery-6.jpg";
import gallery07 from "../img/gallery/gallery-7.jpg";
import gallery08 from "../img/gallery/gallery-8.jpg";
import gallery09 from "../img/gallery/gallery-9.jpg";
import gallery10 from "../img/gallery/gallery-10.jpg";
import gallery11 from "../img/gallery/gallery-11.jpg";
import gallery12 from "../img/gallery/gallery-12.jpg";

const Testimonials = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className="testimonials">
          <figure className="testimonial">
            <img
              src={customerOne}
              alt="Customer Dave Bryson"
              className="testimonial-img"
            ></img>
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>
          <figure className="testimonial">
            <img
              src={customerTwo}
              alt="Customer Ben Hadley"
              className="testimonial-img"
            ></img>
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>
          <figure className="testimonial">
            <img
              src={customerThree}
              alt="Customer Steve Miller"
              className="testimonial-img"
            ></img>
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>
          <figure className="testimonial">
            <img
              src={customerFour}
              alt="Customer Hannah Smith"
              className="testimonial-img"
            ></img>
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>
      <div className="gallery">
        <figure className="gallery-item">
          <img src={gallery01} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery02} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery03} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery04} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery05} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery06} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery07} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery08} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery09} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery10} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery11} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="gallery-item">
          <img src={gallery12} alt="Beautifully arranged food"></img>
          {/* <figcaption>Caption</figcaption> */}
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;

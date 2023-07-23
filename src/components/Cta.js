import React from "react";

const Cta = () => {
  return (
    <section className="section-cta" id="first-meal">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free!</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form className="cta-form" action="#">
              <div>
                <label for="full name">Full name</label>
                <input
                  id="full name"
                  type="text"
                  placeholder="John Smith"
                  required
                ></input>
              </div>

              <div>
                <label for="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                ></input>
              </div>

              <div>
                <label for="select-where">Where did you hear from us?</label>
                <select id="select-where" required>
                  <option value="">Please choose one option</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">Youtube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="facebook">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <button className="btn btn--form">Sign up now</button>
            </form>
          </div>

          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
          >
            Image
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;

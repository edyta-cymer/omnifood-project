import React from "react";
import firstLogo from "../img/logos/techcrunch.png";
import secondLogo from "../img/logos/business-insider.png";
import thirdLogo from "../img/logos/the-new-york-times.png";
import fourthLogo from "../img/logos/forbes.png";
import fifthLogo from "../img/logos/usa-today.png";

const FeaturedIn = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src={firstLogo} alt="tech crunch logo"></img>
          <img src={secondLogo} alt="business insider logo"></img>
          <img src={thirdLogo} alt="The New York Times logo"></img>
          <img src={fourthLogo} alt="forbes logo"></img>
          <img src={fifthLogo} alt="usa today logo"></img>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;

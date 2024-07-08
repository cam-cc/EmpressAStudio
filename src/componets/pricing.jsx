import React, { Component } from "react";
import PricingCarousel from "./pricingCarousel";

class Pricing extends Component {
  state = {};
  render() {
    return (
      <div
        className="testimonials-main-container-area"
        style={{ minHeight: 800 }}
      >
        <div className="header">
          <h1 data-aos="fade-up">Pricing</h1>
        </div>
        <div className="carousel-container">
          <PricingCarousel/>
        </div>
      </div>
    );
  }
}

export default Pricing;

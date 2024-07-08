
import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconContext } from "react-icons";
import {FiArrowLeft, FiArrowRight, FiDollarSign, FiImage} from "react-icons/fi";
import logoImg from "../assets/img/logo.png";

const Slide = ({ title , description }) => {
  return (
    <div className="testimonial-slide-item" data-aos="zoom-in">
        <div className="Carousel-item-container">
            <div>
                <img className="image-container-pricing" src={logoImg} alt="" />
                <h3>{title}</h3>
            </div>
            <div className="body">
                {description.map((desc, index) => (
                   <p key={index}> {desc} </p>
                ))}
            </div>
            <div style={{fontStyle: "italic", fontSize: 12}}>
                plus taxes
                <br/> *Prices subject to change*
            </div>
        </div>
    </div>
  );
};

class PricingCarousel extends Component {
  state = {};
  render() {
    const items = [
      <Slide
        title="General Admissions"
        description={["Adults: $25",
            "Students (16 to 18) and Seniors (60 +) : $20",
            "Children 5 to 15 : $15",
            "5 an under: $5"]}
      />,
    <Slide
        title="Private Bookings"
        description={["Private bookings $35/hr",
            "Group rates contact us!",
            "Birthday and other events contact us!"]}
    />,
    ];
    return (
      <div className="testimonials-carousel-main-container">
        <AliceCarousel
          mouseTracking
          items={items}
          animationDuration={1000}
          autoPlay
          infinite
          autoPlayInterval={10000}
          renderPrevButton={() => (
            <div className="carousel-control-btn-wrapper left">
              <IconContext.Provider
                value={{ className: "carousel-control-btn-icon" }}
              >
                <FiArrowLeft />
              </IconContext.Provider>
            </div>
          )}
          renderDotsItem={({ isActive }) => (
            <div
              className={isActive ? "carousel-dots active" : "carousel-dots"}
            ></div>
          )}
          renderNextButton={() => (
            <div className="carousel-control-btn-wrapper right">
              <IconContext.Provider
                value={{ className: "carousel-control-btn-icon" }}
              >
                <FiArrowRight />
              </IconContext.Provider>
            </div>
          )}
        />
      </div>
    );
  }
}

export default PricingCarousel;


import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconContext } from "react-icons";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import image1 from "../assets/img/john-test-1.jpg";
import image2 from "../assets/img/bonnie-test-2.jpg";
import image3 from "../assets/img/ariana-test-3.jpg";

const Slide = ({ image, name, testimonial }) => {
  return (
    <div className="testimonial-slide-item" data-aos="zoom-in">
      <div className="Carousel-item-container">
        <div className="profile-wrapper">
          <img src={image} alt={name} />
        </div>
        <div className="profile-details">
          <h3>{name}</h3>
          <span>Customer</span>
        </div>
        <div className="body">{testimonial}</div>
      </div>
    </div>
  );
};

class TestimonialsCarousel extends Component {
  state = {};
  render() {
    const items = [
      <Slide
        image={image1}
        name="John"
        testimonial="Empress A Studio is amazing! The themed rooms are so creative and perfect for selfies. I had a blast and got some fantastic photos. Highly recommend!"
      />,
      <Slide
        image={image2}
        name="Bonnie"
        testimonial="What a fantastic experience! Empress A Studio offers such unique and fun themes. Each room is a new adventure. Loved every minute of it!"
      />,
      <Slide
        image={image3}
        name="Ariana"
        testimonial="Empress A Studio exceeded my expectations. The variety of themed rooms is incredible, and I got so many great shots. Can't wait to come back!"
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
          autoPlayInterval={5000}
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

export default TestimonialsCarousel;

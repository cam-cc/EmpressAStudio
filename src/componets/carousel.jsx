import React, { Component } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons/";
import image2 from "../assets/img/lollipop-room.jpeg";
import image3 from "../assets/img/bd-1.jpeg";
import image1 from "../assets/img/bd-2.jpeg";
import Slide from "./slide";

const carouselSlides = [
  {
    id: 1,
    title: "Higher resolution",
    subtitle: "FUN & UNIQUE",
    image: image2,
    details: "unique photo booths, props and ring lights for taking selfies",
  },
  {
    id: 2,
    title: "",
    subtitle: "CLEAN & SIMPLE",
    image: image1,
    details: "simple and hassle free way to capture memories",
  },
  {
    id: 3,
    title: "",
    image: image3,
    subtitle: "SELFIE STUDIO",
    details: "interactive photo studio that accommodates for all levels of Photo Capturing experience",
  },
];

class HomeCarousel extends Component {
  state = {
    activeSlide: 0,
    arrowsShown: true,
  };
  componentDidMount() {
    setInterval(() => {
      this.handleGoToNext();
    }, 8000);
  }
  handleChangeSlide = (index) => {
    this.setState({ activeSlide: index });
  };
  handleGoToNext = () => {
    let index = this.state.activeSlide;
    const slidesLength = carouselSlides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }
    index++;
    this.setState({ activeSlide: index });
  };
  handleGoToPrev = () => {
    let index = this.state.activeSlide;
    const slidesLength = carouselSlides.length;

    if (index < 1) {
      index = slidesLength;
    }
    index--;

    this.setState({ activeSlide: index });
  };
  handleShowArrows = () => {
    // this.setState({ arrowsShown: true });
  };
  handleHiderrows = () => {
    // this.setState({ arrowsShown: false });
  };
  render() {
    return (
      <div className="home-carousel-main-container">
        <div
          onClick={this.handleGoToPrev}
          className={
            this.state.arrowsShown
              ? "carousel-prev-btn shown"
              : "carousel-prev-btn"
          }
          onMouseEnter={this.handleShowArrows}
        >
          <IconContext.Provider value={{ className: "carousel-control-icon" }}>
            <BsArrowLeft />
          </IconContext.Provider>
        </div>
        <div
          onClick={this.handleGoToNext}
          className={
            this.state.arrowsShown
              ? "carousel-next-btn shown"
              : "carousel-next-btn"
          }
          onMouseEnter={this.handleShowArrows}
        >
          <IconContext.Provider value={{ className: "carousel-control-icon" }}>
            <BsArrowRight />
          </IconContext.Provider>
        </div>
        {carouselSlides.map((slide, index) => (
          <Slide
            key={slide.id + index}
            slide={slide}
            index={index}
            activeSlide={this.state.activeSlide}
          />
        ))}
        <div className="home-carousel-dots-area">
          {carouselSlides.map((item, index) => (
            <span
              className={index === this.state.activeSlide && "active"}
              key={item.id + index}
              onClick={() => this.handleChangeSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeCarousel;

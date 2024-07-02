import React, { Component } from "react";
import About from "../about";
import image1 from "../../assets/img/2.jpeg";
import image2 from "../../assets/img/lollipop-room.jpeg";
import Acomplishments from "../acomplishments";
import Testimonials from "../testimonials";
class AboutPage extends Component {
  state = {};
  render() {
    return (
      <div className="about-page-main-container-area">
        <div className="header-about-page">
          <div className="overlay"></div>
          <h1>ABOUT US</h1>
          <h4>Empress A Studio Ltd.</h4>
        </div>
        <About />
        <div className="skills-main-area">
          <div className="image-wrapper">
            <img src={image1} alt="" />
          </div>
          <div className="text-wrapper">
            <div className="skills-header">
              <h1>Features</h1>
              <h4>What we do</h4>
            </div>
            <div className="skill-slider-container">
              <h3>Photography</h3>
              <div className="slider">
                <div className="slider-active"></div>
              </div>
            </div>
            <div className="skill-slider-container filmage">
              <h3>Lighting</h3>
              <div className="slider">
                <div className="slider-active filmage"></div>
              </div>
            </div>
            <div className="skill-slider-container">
              <h3>Design</h3>
              <div className="slider">
                <div className="slider-active design"></div>
              </div>
            </div>
            <div className="skill-slider-container ">
              <h3>Props</h3>
              <div className="slider">
                <div className="slider-active web"></div>
              </div>
            </div>
          </div>
        </div>
        <Acomplishments />
        <div className="about-page-about-us-area">
          <div className="text-container-area">
            <div className="about-about-header">
              <h1>How it works</h1>
              <p>
              Each photo booth is equipped with tripods & right lights. Clients can take their own photos and videos with their mobile devices using a Bluetooth remote controller that we provide. Clients can move from booth to booth to capture photos or videos with different scenes. Clients can book in one hour increments or reserve the space for private events.

Seasonally photo sets will change to suit your holiday needs!
              </p>
            </div>
          </div>
          <div className="image-wrapper-about">
            <img src={image2} alt="" />
          </div>
        </div>
        <Testimonials />
      </div>
    );
  }
}

export default AboutPage;

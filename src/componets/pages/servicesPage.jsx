import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaCameraRetro } from "react-icons/fa";
import {ImVideoCamera, ImPrinter, ImImages} from "react-icons/im";
import Testimonials from "../testimonials";
class ServicesPage extends Component {
  state = {};
  render() {
    return (
      <div className="services-page-main-container">
        <div className="header-service-page">
          <div className="overlay"></div>
          <h1>SERVICES</h1>
          <h4>What we do</h4>
        </div>
        <div className="services-container">
          <div className="services-grid-wrapper">
            <div className="service-item-wrapper">
              <div className="service-item-icon-wrapper">
                <IconContext.Provider value={{ className: "service-icon" }}>
                  <FaCameraRetro />
                </IconContext.Provider>
              </div>
              <div className="service-item-details">
                <h1>Photography</h1>
                <p>
                  Unleash your inner photographer at Empress A Studio. Our diverse range of themed rooms provides the perfect canvas for your creative shots. Whether you're a professional looking to expand your portfolio or an enthusiast capturing moments with friends, our studio offers the ideal environment to bring your photography ideas to life.
                </p>
              </div>
            </div>
            <div className="service-item-wrapper">
              <div className="service-item-icon-wrapper">
                <IconContext.Provider value={{ className: "service-icon" }}>
                  <ImVideoCamera />
                </IconContext.Provider>
              </div>
              <div className="service-item-details">
                <h1>Selfies</h1>
                <p>
                 Capture your best moments at Empress A Studio, where every corner is designed to be your perfect selfie backdrop. With an array of lighting options and creative themes, you’ll find the ideal setting to showcase your style and personality. Snap, share, and create unforgettable memories in a space that’s all about you.
                </p>
              </div>
            </div>
            <div className="service-item-wrapper">
              <div className="service-item-icon-wrapper">
                <IconContext.Provider value={{ className: "service-icon" }}>
                  <ImImages/>
                </IconContext.Provider>
              </div>
              <div className="service-item-details">
                <h1>Unique Booths</h1>
                <p>
                  Step into a world of imagination with our unique booths, each meticulously crafted to transport you to a different scene. Whether you’re looking for a whimsical fairytale setting, a chic urban vibe, or a vintage retro look, Empress A Studio has a booth that fits your vision. Each visit offers a new experience and endless possibilities for creative expression.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
      </div>
    );
  }
}

export default ServicesPage;

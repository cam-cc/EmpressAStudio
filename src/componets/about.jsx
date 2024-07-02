import React, { Component } from "react";
import { IconContext } from "react-icons";
import { GiAbstract062, GiArcheryTarget } from "react-icons/gi";
import { IoTelescopeSharp } from "react-icons/io5";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-page-main-area">
        <div className="header">
          <h1 data-aos="fade-up">What is a Selfie Studio?</h1>
          <h3 data-aos="fade-up">-the best photography-</h3>
        </div>
        <div className="bio-area">
          <p data-aos="fade-up">
          Looking for a fun and Unique evening out? Come strike a pose and capture memories that will last a lifetime. You wont want to leave!
          </p>
        </div>
        <div className="about-grid-area">
          <div className="grid-container">
            <div className="grid-item-area" data-aos="fade-up-left">
              <div className="header">
                <div className="icon-container">
                  <IconContext.Provider
                    value={{ className: "about-grid-icon" }}
                  >
                    <GiAbstract062 />
                  </IconContext.Provider>
                </div>
                <h2 className="title">Unique</h2>
              </div>
              <div className="body">
            A Selfie Studio it is an interactive entertainment venue. It is similar to traditional style photo studios but with unique photo booths, props and ring lights for taking "selfies".
              </div>
            </div>
            <div className="grid-item-area" data-aos="zoom-in-up">
              <div className="header">
                <div className="icon-container">
                  <IconContext.Provider
                    value={{ className: "about-grid-icon" }}
                  >
                    <IoTelescopeSharp />
                  </IconContext.Provider>
                </div>
                <h2 className="title">Vision</h2>
              </div>
              <div className="body">
              A selfie studio is an interactive photo studio that accommodates for all levels of Photo Capturing experience, with the click of a button.
              </div>
            </div>
            <div className="grid-item-area" data-aos="fade-up-right">
              <div className="header">
                <div className="icon-container">
                  <IconContext.Provider
                    value={{ className: "about-grid-icon" }}
                  >
                    <GiArcheryTarget />
                  </IconContext.Provider>
                </div>
                <h2 className="title">Simple</h2>
              </div>
              <div className="body">
              Its and incredibly simple and hassle free way to capture memories if all kinds and have those ever lasting moments with family and friends.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

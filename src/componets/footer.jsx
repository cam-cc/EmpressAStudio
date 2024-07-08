import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaFacebookF, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoLogoWhatsapp, IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-main-area">
        <div className="footer-upper-area">
          <div className="left-area">
            <h1>EMPRESS A STUDIO</h1>
            <p>
            Looking for a fun and Unique evening out? Come strike a pose and capture memories that will last a lifetime. You wont want to leave!
            </p>
          </div>
          <div className="right-links-area">
            <div className="links-grid-area">
              <div className="link-item-wrapper">
                <h4>What We Do</h4>

                <ul>
                  <li>
                    <a href="#1">Selfies</a>
                  </li>
                  <li>
                    <a href="#1">Design</a>
                  </li>
                  <li>
                    <a href="#1">Scenery</a>
                  </li>
                  <li>
                    <a href="#1">Props</a>
                  </li>
                </ul>
              </div>
              <div className="link-item-wrapper">
                <h4>Navigation</h4>

                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="link-item-wrapper">
                <h4>Contact Us</h4>

                <ul>
                  <li>
                    <a href="#1">
                      <IconContext.Provider
                        value={{
                          className: "footer-link-social-media-icon contact",
                        }}
                      >
                        <FaMapMarkerAlt />
                      </IconContext.Provider>{" "}
                      1750 Ernest ave, London Ontario
                    </a>
                  </li>
                  <li>
                    <a href="#1">
                      {" "}
                      <IconContext.Provider
                        value={{
                          className: "footer-link-social-media-icon contact",
                        }}
                      >
                        <IoMdPhonePortrait />
                      </IconContext.Provider>{" "}
                      (519) 630 6779
                    </a>
                  </li>
                  <li>
                    <a href="#1">
                      <IconContext.Provider
                        value={{
                          className: "footer-link-social-media-icon contact",
                        }}
                      >
                        <MdEmail />
                      </IconContext.Provider>{" "}
                      empressaphotostudio@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#1">
                      <IconContext.Provider
                        value={{
                          className: "footer-link-social-media-icon contact",
                        }}
                      >
                        <AiOutlineGlobal />
                      </IconContext.Provider>{" "}
                      www.empressAstudio.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="links-wrapper">
            <a href="https://www.facebook.com/groups/381036687776848">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <FaFacebookF />
              </IconContext.Provider>
            </a>
            <a href="https://www.instagram.com/empressaphoto?igsh=ZW4wYXIycWxzNzVi">
              <IconContext.Provider
                value={{ className: "footer-link-social-media-icon" }}
              >
                <ImInstagram />
              </IconContext.Provider>
            </a>
          </div>
          <div className="copyright">
            &copy;{" "}
            <span>
              {new Date().getFullYear()} EMPRESS A STUDIO | ALL RIGHTS RESERVED |
              Powered by
              <a href="https://cameroncc.com">Cameron Coenjarts</a>{" "}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

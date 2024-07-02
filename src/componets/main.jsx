import React, { Component } from "react";

import Acomplishments from "../componets/acomplishments";
import Testimonials from "../componets/testimonials";
import About from "../componets/about";
import Galery from "../componets/galery";
import Home from "../componets/home";

class Main extends Component {
  handleHideHeader = () => {
    const header = document.querySelector(".header-container-area");
    header.classList.remove("open");
  };
  render() {
    return (
      <>
        <div className="app-container" onClick={this.handleHideHeader}>
          <Home />
          <About />
          <Galery />
          <Acomplishments />
          <Testimonials />
        </div>
      </>
    );
  }
}

export default Main;

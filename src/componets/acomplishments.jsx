import React, { Component } from "react";
import { IconContext } from "react-icons";
import { GiLinkedRings } from "react-icons/gi";
import { FaBirthdayCake } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";
import { BsSpeaker } from "react-icons/bs";
import { Spring } from "react-spring/renderprops";

class Acomplishments extends Component {
  state = {};
  render() {
    return (
      <div className="acomplishments-main-container">
        <div className="accomplishemnt-item">
          <IconContext.Provider value={{ className: "accomplishment-icon" }}>
            <GiLinkedRings />
          </IconContext.Provider>
          <Spring
            from={{ number: 0 }}
            to={{ number: 60 }}
            config={{ duration: 2000 }}
          >
            {(props) => <h1>{Math.ceil(props.number)}</h1>}
          </Spring>
          <span>Minutes</span>
        </div>
        <div className="accomplishemnt-item">
          <IconContext.Provider value={{ className: "accomplishment-icon" }}>
            <FaBirthdayCake />
          </IconContext.Provider>
          <Spring
            from={{ number: 0 }}
            to={{ number: 13 }}
            config={{ duration: 2000 }}
            delay={500}
          >
            {(props) => <h1>{Math.ceil(props.number)}</h1>}
          </Spring>
          <span>Unique Rooms & Backdrops </span>
        </div>
        <div className="accomplishemnt-item">
          <IconContext.Provider value={{ className: "accomplishment-icon" }}>
            <MdLibraryMusic />
          </IconContext.Provider>
          <Spring
            from={{ number: 0 }}
            to={{ number: 20 }}
            config={{ duration: 2000 }}
            delay={1000}
          >
            {(props) => <h1>{Math.ceil(props.number)}</h1>}
          </Spring>
          <span>Example</span>
        </div>
        <div className="accomplishemnt-item">
          <IconContext.Provider value={{ className: "accomplishment-icon" }}>
            <BsSpeaker />
          </IconContext.Provider>
          <Spring
            from={{ number: 0 }}
            to={{ number: 20 }}
            config={{ duration: 2000 }}
            delay={1500}
          >
            {(props) => <h1>{Math.ceil(props.number)}</h1>}
          </Spring>
          <span>Example</span>
        </div>
      </div>
    );
  }
}

export default Acomplishments;

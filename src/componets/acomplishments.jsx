import React, { Component } from "react";
import { IconContext } from "react-icons";
import {GiAlarmClock, GiLinkedRings, GiPropellerBeanie} from "react-icons/gi";
import { BsSpeaker } from "react-icons/bs";
import { Spring } from "react-spring/renderprops";
import {HiCash, HiOutlinePhotograph} from "react-icons/hi";

class Acomplishments extends Component {
  state = {};
  render() {
    return (
        <div className="acomplishments-main-container">
          <div className="accomplishemnt-item">
            <IconContext.Provider value={{className: "accomplishment-icon"}}>
              <GiAlarmClock/>
            </IconContext.Provider>
            <Spring
                from={{number: 0}}
                to={{number: 60}}
                config={{duration: 2000}}
            >
              {(props) => <h1>{Math.ceil(props.number)}</h1>}
            </Spring>
            <span>Minutes</span>
          </div>
          <div className="accomplishemnt-item">
            <IconContext.Provider value={{className: "accomplishment-icon"}}>
              <GiPropellerBeanie/>
            </IconContext.Provider>
            <Spring
                from={{number: 0}}
                to={{number: 100}}
                config={{duration: 2000}}
            >
              {(props) => <h1>{Math.ceil(props.number)} +</h1>}
            </Spring>
            <span>Different Props</span>
          </div>
          <div className="accomplishemnt-item">
            <IconContext.Provider value={{className: "accomplishment-icon"}}>
              <HiOutlinePhotograph/>
            </IconContext.Provider>
            <Spring
                from={{number: 0}}
                to={{number: 13}}
                config={{duration: 2000}}
                delay={500}
            >
              {(props) => <h1>{Math.ceil(props.number)}</h1>}
            </Spring>
            <span>Unique Rooms & Backdrops </span>
          </div>
          <div className="accomplishemnt-item">
            <IconContext.Provider value={{className: "accomplishment-icon"}}>
              <HiCash/>
            </IconContext.Provider>
            <Spring
                from={{number: 0}}
                to={{number: 9}}
                config={{duration: 2000}}
                delay={1000}
            >
              {(props) => <h1>{Math.ceil(props.number)}</h1>}
            </Spring>
            <span>Pricing options</span>
          </div>

        </div>
    );
  }
}

export default Acomplishments;

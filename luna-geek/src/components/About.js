import React, { Component } from "react";
import Title from "./Title";
import hero from "../back2.png";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <img class="display-2" src={hero} alt="hero" width="100%" />
            <div className="container py-5">
              <Title name="About" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

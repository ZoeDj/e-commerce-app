import React, { Component } from "react";
import Title from "./Title";

export default class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Your Card" />
          </div>
          <div className="row"></div>
        </div>
      </React.Fragment>
    );
  }
}

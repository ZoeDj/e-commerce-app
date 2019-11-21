import React from "react";
import Title from "./Title";

class Signup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Sign Up" />
          </div>
          <div className="row"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;

import React, { Component } from "react";
// import Product from "./Product";
import { shirts } from "../data";
import Title from "./Title";

export default class ProductList extends Component {
  state = {
    products: shirts
  };

  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Shirts" />
          </div>
          <div className="row"></div>
        </div>
      </React.Fragment>
    );
  }
}

import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import hero from "../back2.png";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <img class="display-2" src={hero} alt="hero" width="100%" />
        </div>
        <div className="container py-5">
          <Title name="Shirts" />
        </div>
        <div className="row">
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </React.Fragment>
    );
  }
}

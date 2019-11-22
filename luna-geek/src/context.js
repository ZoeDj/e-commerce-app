import React, { Component } from "react";
import { shirts, detailProduct } from "./data";

const ProductContext = React.createContext();
// ProductProvider
// Consumer

class ProductProvider extends Component {
  state = {
    products: shirts,
    detailProduct: detailProduct
  };
  handleDetail = () => {
    console.log("hello from detail");
  };
  addToCart = () => {
    console.log("hello from the cart");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

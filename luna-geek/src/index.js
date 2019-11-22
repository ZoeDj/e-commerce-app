import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { ProductProvider } from "./context";

render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.querySelector("#root")
);

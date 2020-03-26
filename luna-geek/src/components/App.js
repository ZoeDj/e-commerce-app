import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import About from "./About";
import ProductList from "./ProductList";
import Details from "./Details";
import Card from "./Cart";
import Default from "./Default";
import Signin from "./Signin";
import Signup from "./Signup";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route component={ProductList} exact path="/" />
          <Route component={About} exact path="/about" />
          <Route component={Details} exact path="/details" />
          <Route component={Card} exact path="/card" />
          <Route component={Signin} path="/signin" />
          <Route component={Signup} path="/signup" />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

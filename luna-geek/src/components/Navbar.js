import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-sm px-sm-5">
    {/* Logo*/}
    <NavLink to="/">
      <img
        height="100px"
        alt="luna geek logo"
        src="./logo.svg"
        className="navbar-brand"
      />
    </NavLink>
    <ul className="navbar-nav align-items-center">
      <li className="nav-item ml-5">
        <NavLink to="/">Products</NavLink>
      </li>
      <li className="nav-item ml-5"></li>

      <li className="nav-item ml-5">
        {/* Signin Link */}
        <NavLink activeClassName="active" to="/signin">
          Sign In
        </NavLink>
      </li>
      <li className="nav-item ml-5">
        {/* Signin Link */}
        <NavLink activeClassName="active" to="/signup">
          Sign Up
        </NavLink>
      </li>
    </ul>
    <NavLink to="/card" className="ml-auto">
      <i className="fas fa-shopping-bag"></i>
    </NavLink>
  </nav>
);

export default Navbar;

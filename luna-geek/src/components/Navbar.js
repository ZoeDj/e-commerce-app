import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    {/* Logo*/}
    <NavLink to="/">
      <img height="100px" alt="luna geek logo" src="./logo.svg" />
    </NavLink>
    {/* Signin Link */}
    <NavLink className="navlink" to="/signin">
      Sign In
    </NavLink>

    {/* Signin Link */}
    <NavLink className="navlink" to="/signup">
      Sign Up
    </NavLink>
  </div>
);

export default Navbar;

// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="logoname">Portfolio.</h1>
      <nav className="navitems">
        <NavLink to="/" end className="navlink">
          Home
        </NavLink>
        <NavLink to="/about" className="navlink">
          About
        </NavLink>
        <NavLink to="/skills" className="navlink">
          Skills
        </NavLink>
        <NavLink to="/contact" className="navlink">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

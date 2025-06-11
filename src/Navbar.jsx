import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on link click (optional, for better UX)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <h1 className="logoname">Portfolio.</h1>

      {/* Hamburger toggle button - visible only on mobile */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter") setIsOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav items, toggle class for mobile */}
      <nav className={`navitems ${isOpen ? "show" : ""}`}>
        <NavLink to="/" end className="navlink" onClick={handleLinkClick}>
          Home
        </NavLink>
        <NavLink to="/about" className="navlink" onClick={handleLinkClick}>
          About
        </NavLink>
        <NavLink to="/skills" className="navlink" onClick={handleLinkClick}>
          Skills
        </NavLink>
        <NavLink to="/projects" className="navlink" onClick={handleLinkClick}>
          Projects
        </NavLink>
        <NavLink to="/contact" className="navlink" onClick={handleLinkClick}>
          Contact
        </NavLink>
        
      </nav>
    </header>
  );
};

export default Navbar;

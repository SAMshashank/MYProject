import React from "react";

import "./nav.css";
const Navbar = ({ svg, dandi, courses, story }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#" className="logo">
            <img src={svg} alt="logo" />
          </a>

          <div className="search-box">{dandi}</div>
          <span className="val">{story}</span>
        </div>

        <div className="navbar-right">{courses}</div>
      </nav>
    </div>
  );
};

export default Navbar;

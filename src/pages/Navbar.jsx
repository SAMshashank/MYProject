import React from 'react'; 
import ttt from "./ttt.svg";
import "./nav.css";
const Navbar = () => {
  return (
    <div>
<nav className="navbar">
    <div className="navbar-left">
        <a href="#" className="logo"><img src={ttt} alt='logo'/></a>

        <div className="search-box">
            |
        </div>
        <span className="val">STORIES</span>

    </div>

    <div className="navbar-right">
        Courses
    </div>
    


</nav>
    </div>
    
  )
}

export default Navbar;

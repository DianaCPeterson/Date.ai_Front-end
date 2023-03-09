import React, { useState } from "react";
// import Logo from "../assets/DateLogo.png";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar({ onLogout}) {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  
  
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src="https://i.imgur.com/qQOm7lX.png" alt="Home"/>
        <div className="hiddenLinks">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Signup </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Login </Link>
        <Link to="/signup"> Signup </Link>

        <button onClick={toggleNavbar}>
          {/* <ReorderIcon /> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
// import Logo from "../assets/DateLogo.png";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
// import Logout from "./Logout";

function Navbar2({ onLogin}) {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  
  
  
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      <img src="https://i.imgur.com/qQOm7lX.png" alt="Home"/>
        <div className="hiddenLinks">
        <Link to="/profile"> Profile </Link>
        <Link to="/matches"> Matches </Link>
        <Link to="/profilecards"> You </Link>
        <Link to="/Ai"> AI </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/profile"> Profile </Link>
        <Link to="/matches"> Matches </Link>
        <Link to="/profilecards"> You </Link>
        <Link to="/Ai"> AI </Link>
        <Link to="/logout"> Logout </Link>

        <button onClick={toggleNavbar}>
          {/* <ReorderIcon /> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar2;

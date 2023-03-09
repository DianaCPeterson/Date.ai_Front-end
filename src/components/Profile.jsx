import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

function Home({user, setUser}) {
  return (
    <div className="profile">
      <div className="headerContainer">
        <h1>Welcome Back! </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="ProfileText">
        <p>The more we learn from you the closer we get to your perfect match. Keep identifying matches. </p>
        </div>
        </div> 
      <img src="https://www.brcrecovery.com/spearhead-lodge/wp-content/uploads/sites/5/2019/05/self-esteem.jpg" alt="Hi" className="ProfileImage"/>
    </div>
  );
}

export default Home;

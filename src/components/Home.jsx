import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";

function Home({user, setUser}) {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1> Date.ai </h1>
        <p>Dating powered by AI</p>
        <Link to="/signup">
          <button> Get Started </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

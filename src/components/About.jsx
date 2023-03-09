import React from 'react'
import { Link } from 'react-router-dom';
import Video from './Video';

function About({user, setUser, video}) {
  return (
    <div className="home">
      <div>{video}</div>
      <div className="abouthead">
        <h1>Your AI Matchmaker</h1> 
        <div className="about"></div>
        <p>Find a match in less than 5 minutes a day. No dick pics. No opening lines. No messaging forever. 
{/* <br></br>We handle everything, from intros to messaging our AI is there every step of the way. When our AI avatars for both you and your mate agree to meet, we connect you and you take it from there. */}
          </p>
          <Link to="/signup">
          <button> Get Started </button>
        </Link>
      <div className="video-responsive"></div>
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/twjVaAfrThA" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>

  );
}


export default About;





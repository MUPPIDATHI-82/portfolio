import React from "react";
import "./Home.css";
import dpImage from "./assets/Dp1.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home-detail">
        <h1 className="heading">
          Hello! <span className="highlight">I'm Muppidathi M</span>
        </h1>
        <p className="tagline">Creating Ideas, Crafting Success...!</p>
        <div className="downloads">
          <a href="#" className="download">
            Download Resume
          </a>
        </div>
      </div>
      <div className="dp">
        <img src={dpImage} alt="Profile" className="image" />
      </div>
    </div>
  );
};

export default Home;

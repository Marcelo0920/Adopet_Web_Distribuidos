import React from "react";
import { Link } from "react-router-dom";

import hero from "../assets/hero.png";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-action">
        <h2>Encuentra a tu amigo IDEAL</h2>
        <p>Tu mejor amigo esta a tan solo un click de distancia!</p>
        <Link className="btn">
          <button>Adoptar</button>
        </Link>
      </div>
      <div className="hero-img">
        <img src={hero} />
      </div>
    </div>
  );
};

export default Hero;

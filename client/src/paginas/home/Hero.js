import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { downArrow, videoBanner } from "../../assets";

const Hero = () => {
  return (
    <article className="banner-hero">
      <div className="box-banner-title">
        <p className="title1">Antójate</p>
        <p className="descrp1">con las mejores marcas</p>
      </div>
      <video width="100%" height="60%" autoPlay loop muted >
        <source src={videoBanner} type="video/mp4" />
      </video>
      <div className="arrow bounce">
        <a href="#section-our-products">
          <p>Descubre más</p>
        </a>
        <Link to="" className="fa">
          <img src={downArrow} alt={downArrow} />
        </Link>
      </div>
    </article>
  );
};

export default Hero;

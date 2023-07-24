import React from "react";

const Footer = () => {
  return (
    <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary align-items-center">
      {/* Copyright */}
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2022. All rights reserved.
      </div>
      {/* Copyright */}
      <img
        src="https://i.ibb.co/LN0f3tb/Mision-TIC-UIS.png"
        alt="Mision-TIC-UIS"
        border="0"
        width="150px"
      />
      {/* Right */}
      <div>
        <a href="#!" className="text-white mx-4">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#!" className="text-white mx-4">
          <i className="fab fa-twitter" />
        </a>
        <a href="#!" className="text-white mx-4">
          <i className="fab fa-google" />
        </a>
        <a href="#!" className="text-white">
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
      {/* Right */}
    </div>
  );
};

export default Footer;

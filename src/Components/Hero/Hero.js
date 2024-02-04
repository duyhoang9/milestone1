import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="" id="hero-wrapper">
      <div className="title bg-light px-4 py-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Raspberry Pi Weather Charts
        </h1>
      </div>
      {/* <div id="btn-wrapper" className="py-5">
        <button type="button" className="btn btn-primary btn-lg">
          Refresh Data
        </button>
      </div> */}
    </div>
  );
};

export default Hero;

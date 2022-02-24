import React from "react";
import "./logoAndLocation.css";
import { logoImgSrc } from "./logoAndLocation.Helper";
import { location } from "./logoAndLocation.Helper";

const LogoAndLocation = () => {
  function renderLogo() {
    return (
      <div className="logo">
        <img className="logoImg" src={logoImgSrc} />
      </div>
    );
  }

  function renderLocaion() {
    return (
      <div className="location">
        <h3>{location}</h3>
        <i class="fi fi-rr-angle-down downIcon"></i>
      </div>
    );
  }
  return (
    <div className="logoAndLocation">
      {renderLogo()}
      {renderLocaion()}
    </div>
  );
};

export default LogoAndLocation;

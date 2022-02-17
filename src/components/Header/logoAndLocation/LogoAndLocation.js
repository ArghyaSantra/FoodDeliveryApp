import React from "react";
import "./logoAndLocation.css";

function LogoAndLocation() {
  return (
    <div className="logoAndLocation">
      <div className="logo">
        <img
          className="logoImg"
          src="https://res.cloudinary.com/swiggy/image/upload/portal/c/favicon-96x96.png"
        />
      </div>
      <div className="location">
        <h3>Bengaluru, Karnataka, India</h3>
        <i className="fi fi-rr-angle-down downIcon"></i>
      </div>
    </div>
  );
}

export default LogoAndLocation;

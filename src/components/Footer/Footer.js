import React, { Component } from "react";

import "./footer.css";
import SocialMediaLinks from "./socialMediaLinks";

const Footer = () => {
  return (
    <div className="footerParent">
      <div className="supportTeamInfo">
        <span className="suppportContactNumber">
          <i class="fi fi-rr-call-outgoing"></i>
          <div className="supportDetails">+91 3323243234</div>
        </span>
        <br />
        <span className="suppportEmailAddress">
          <i class="fi fi-rr-envelope"></i>
          <div className="supportDetails">supportteam@swiggy.com</div>
        </span>
      </div>
      <div className="socialMediaLinks">
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default Footer;

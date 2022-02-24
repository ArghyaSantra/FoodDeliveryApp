import React from "react";
import "./footer.css";
import { supportEmail, supportPhoneNo } from "./footer.Helper";
import SocialMediaLinks from "./socialMediaLinks";

const Footer = () => {
  function renderPhoneAndEmailDetails() {
    return (
      <div className="supportTeamInfo">
        <span className="suppportContactNumber">
          <i class="fi fi-rr-call-outgoing"></i>
          <div className="supportDetails">{supportPhoneNo}</div>
        </span>
        <br />
        <span className="suppportEmailAddress">
          <i class="fi fi-rr-envelope"></i>
          <div className="supportDetails">{supportEmail}</div>
        </span>
      </div>
    );
  }
  return (
    <div className="footer">
      {renderPhoneAndEmailDetails()}
      <SocialMediaLinks />
    </div>
  );
};

export default Footer;

import React, { Component } from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

import "./footer.css";

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
          <div className="support-details">supportteam@swiggy.com</div>
        </span>
      </div>
      <div className="socialMediaLinks">
        <div className="socialMediaLink">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="5"
            borderStyle="solid"
            icon="twitter"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(26,166,233,1)"
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="38"
          />
        </div>
        <div className="socialMediaLink">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="5"
            borderStyle="solid"
            icon="facebook"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(26,166,233,1)"
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="38"
          />
        </div>
        <div className="socialMediaLink">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="5"
            borderStyle="solid"
            icon="instagram"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="pink"
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="38"
          />
        </div>
        <div className="socialMediaLink">
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="5"
            borderStyle="solid"
            icon="youtube"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="red"
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="38"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

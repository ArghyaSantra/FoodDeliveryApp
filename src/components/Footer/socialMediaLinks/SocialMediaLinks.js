import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { LINKS } from "./socialMediaLinks.Helper";
import _ from "lodash";
import "./socialMediaLinks.css";

const renderSocialMediaLinks = (LINK) => {
  return (
    <SocialMediaIconsReact
      borderColor={LINK.borderColor}
      borderWidth={LINK.borderWidth}
      borderStyle={LINK.borderStyle}
      icon={LINK.icon}
      iconColor={LINK.iconColor}
      backgroundColor={LINK.backgroundColor}
      iconSize={LINK.iconSize}
      roundness={LINK.roundness}
      url={LINK.url}
      size={LINK.size}
    />
  );
};

const SocialMediaLinks = () => {
  return (
    <div className="socialMediaLinks">
      {_.map(LINKS, renderSocialMediaLinks)}
    </div>
  );
};

export default SocialMediaLinks;

import React from "react";
import { SocialMediaIconsReact } from "social-media-icons-react";

function SocialMediaLinks({ icon, backgroundColor }) {
  const links = [
    {
      id: 1,
      icon: "twitter",
      backgroundColor: "rgba(26,166,233,1)",
    },
    {
      id: 2,
      icon: "facebook",
      backgroundColor: "rgba(26,166,233,1)",
    },
  ];
  let bgColor = "rgba(26,166,233,1)";
  return (
    <div>
      <div className="socialMediaLink">
        {links.map((link) => {
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="5"
            borderStyle="solid"
            icon={link.icon}
            iconColor="rgba(255,255,255,1)"
            backgroundColor={link.backgroundColor}
            iconSize="5"
            roundness="50%"
            url="https://some-website.com/my-social-media-url"
            size="38"
          />;
        })}
      </div>
    </div>
  );
}

export default SocialMediaLinks;

import React from "react";
import "./header.css";
import LogoAndLocation from "./logoAndLocation";
import options from "./tabOptions/tabOptions.Helper";

//Importing Components
import TabOptions from "./tabOptions";
//

const Header = () => {
  function renderLogoAndLocation() {
    return <LogoAndLocation />;
  }

  function renderHeaderTabs() {
    return <TabOptions tabOptions={options} />;
  }
  return (
    <div className="header">
      {renderLogoAndLocation()}
      {renderHeaderTabs()}
    </div>
  );
};

export default Header;

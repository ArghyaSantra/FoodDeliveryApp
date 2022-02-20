import React, { Component, useState } from "react";
import "./header.css";
import LogoAndLocation from "./logoAndLocation";
import options from "./tabOptions/tabOptions.Helper";

//Importing Components
import TabOptions from "./tabOptions";
//

const Header = () => {
  const [tabOptions, setTabOptions] = useState([]);
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

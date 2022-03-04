import React from "react";
import "./header.css";
import LogoAndLocation from "./logoAndLocation";
import options from "./tabOptions/tabOptions.Helper";

import TabOptions from "./tabOptions";

const Header = () => {
  return (
    <div className="header">
      <LogoAndLocation />
      <TabOptions tabOptions={options} />
    </div>
  );
};

export default Header;

import React, { Component } from "react";
import "./header.css";
import LogoAndLocation from "./logoAndLocation";
import options from "./tabOptions/tabOptions.Helper";

//Importing Components
import TabOptions from "./tabOptions";
//

class Header extends Component {
  state = {
    tabOptions: [],
  };
  renderLogoAndLocation() {
    return <LogoAndLocation />;
  }

  renderHeaderTabs() {
    return <TabOptions tabOptions={options} />;
  }
  render() {
    return (
      <div className="header">
        {this.renderLogoAndLocation()}
        {this.renderHeaderTabs()}
      </div>
    );
  }
}

export default Header;

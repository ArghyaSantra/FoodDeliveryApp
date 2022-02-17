import React, { Component } from "react";
import "./header.css";
import LogoAndLocation from "./logoAndLocation";
import options from "./tabOptions/tabOptions.Helper";

import TabOptions from "./tabOptions";
import AppContext from "../../Context";
import toggleThemeInHeader, { getNameOnThemeButton } from "./header.Helper";
import { getClassNameBasedOnTheme } from "../../utilities/themeRelatedUtils";

class Header extends Component {
  state = {
    tabOptions: [],
  };

  static contextType = AppContext;

  renderLogoAndLocation() {
    return <LogoAndLocation />;
  }

  renderHeaderTabs() {
    return <TabOptions tabOptions={options} />;
  }

  changeTheme = () => {
    const { currentTheme } = this.context;
    const updatedTheme = toggleThemeInHeader(currentTheme);
    this.context.changeTheme(updatedTheme);
  };

  render() {
    const { currentTheme } = this.context;
    return (
      <div className={getClassNameBasedOnTheme(currentTheme, "header")}>
        {this.renderLogoAndLocation()}
        {this.renderHeaderTabs()}
        <button
          onClick={this.changeTheme}
          className={getClassNameBasedOnTheme(currentTheme, "btnTheme")}
        >
          {getNameOnThemeButton(currentTheme)}
        </button>
      </div>
    );
  }
}

export default Header;

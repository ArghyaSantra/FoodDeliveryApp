import React, { Component } from "react";
import "./header.css";
import LogoAndLocation from "./logoAndLocation";

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
    const options = [
      {
        name: "Search",
        id: 1,
        iconClass: "fi fi-rr-search",
      },
      {
        name: "Offers",
        id: 2,
        iconClass: "fi fi-rr-ticket",
      },
      {
        name: "Sign In",
        id: 3,
        iconClass: "fi fi-rr-user",
      },
      {
        name: "Cart",
        id: 4,
        iconClass: "fi fi-rr-shopping-cart",
      },
    ];
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

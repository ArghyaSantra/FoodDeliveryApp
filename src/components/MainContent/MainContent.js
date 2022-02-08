import React, { Component } from "react";
import Highlights from "./Highlights/Highlights";
import RestroLists from "./RestroLists/RestroLists";
import "./MainContent.css";

export class MainContent extends Component {
  constructor(props) {
    super(props);
  }
  restroClicked = (restro) => {
    console.log(restro);
    this.props.restroClicked(restro);
  };

  render() {
    return (
      <div className="maincontent">
        <div className="highlights">
          <Highlights />
        </div>
        <div className="restro-lists">
          <RestroLists restroClicked={this.restroClicked} />
          <div className="more-options">
            More Options<i class="fi fi-rr-arrow-right arrow-right"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;

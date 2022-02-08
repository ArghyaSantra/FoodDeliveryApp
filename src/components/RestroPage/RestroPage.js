import React, { Component } from "react";
import RestroDetailsLists from "./RestroDetailsLists/RestroDetailsLists";
import RestroPageBanner from "./RestroPage_Banner/RestroPageBanner";

export class RestroPage extends Component {
  render() {
    return (
      <div className="restropage-parent">
        {/*<div className="bread-crumb">Bread Crumb</div>*/}
        <RestroPageBanner />
        <RestroDetailsLists />
      </div>
    );
  }
}

export default RestroPage;

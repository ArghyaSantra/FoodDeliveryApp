import React, { Component } from "react";
import AppContext from "../../../Context";
import { getClassNameBasedOnTheme } from "../../../utilities/themeRelatedUtils";
import "./restroPageBanner.css";

export class RestroPageBanner extends Component {
  static contextType = AppContext;

  renderLeftSection() {
    return (
      <div className="bannerLeft">
        <img
          className="restroPicBanner"
          src="https://assets.cntraveller.in/photos/612f08a19fd022fa9f74f1e8/16:9/w_1280,c_limit/The%20Verandah.jpeg"
        />
      </div>
    );
  }

  renderCenterSection(currentRestro) {
    return (
      <div className="bannerCenter">
        <div className="bannerCenterInsider">
          <h1>{currentRestro}</h1>
          <h2>North Indian, Punjabi </h2>
          <h2>5th Block, Kormangala - Bangalore</h2>
          <div className="restroInfo">
            <div className="bannerRatings">
              <i class="fi fi-rr-star starRating"></i>4.5
              <br />
              <span>20+ ratings</span>
            </div>
            <div className="bannerEta">
              45 mins
              <br />
              <span>Delivery Time</span>
            </div>
            <div className="bannerPrice">
              ₹ 450
              <br />
              <span>Cost for Two</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderRightSection() {
    return (
      <div className="bannerRight">
        Offers
        <div className="bannerOffers">
          20% OFF | Use Code Party
          <br />
          30% off up to ₹150 on orders above ₹400 | Use code JUMBO
        </div>
      </div>
    );
  }
  render() {
    const { currentRestro, changeCurrentRestro, currentTheme } = this.context;
    return (
      <div class={getClassNameBasedOnTheme(currentTheme, "restroPageBanner")}>
        {this.renderLeftSection()}
        {this.renderCenterSection(currentRestro)}
        {this.renderRightSection()}
      </div>
    );
  }
}

export default RestroPageBanner;

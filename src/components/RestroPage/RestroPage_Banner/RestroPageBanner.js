import React, { Component } from "react";
import "./RestroPageBanner.css";

export class RestroPageBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="restro-page-banner">
        <div className="banner-left">
          <img
            className="restro-pic-banner"
            src="https://assets.cntraveller.in/photos/612f08a19fd022fa9f74f1e8/16:9/w_1280,c_limit/The%20Verandah.jpeg"
          />
        </div>
        <div className="banner-center">
          <div className="banner-center-insider">
            <h1>Kings Of Spice</h1>
            <h2>North Indian, Punjabi </h2>
            <h2>5th Block, Kormangala - Bangalore</h2>
            <div className="restro-info">
              <div className="banner-ratings">
                <i class="fi fi-rr-star star-rating"></i>4.5
                <br />
                <span>20+ ratings</span>
              </div>
              <div className="banner-eta">
                45 mins
                <br />
                <span>Delivery Time</span>
              </div>
              <div className="banner-price">
                ₹ 450
                <br />
                <span>Cost for Two</span>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-right">
          Offers
          <div className="banner-offers">
            20% OFF | Use Code Party
            <br />
            30% off up to ₹150 on orders above ₹400 | Use code JUMBO
          </div>
        </div>
      </div>
    );
  }
}

export default RestroPageBanner;

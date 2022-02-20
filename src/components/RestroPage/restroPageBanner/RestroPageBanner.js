import React, { useContext } from "react";
import AppContext from "../../../Context";
import "./restroPageBanner.css";

const RestroPageBanner = () => {
  const { currentRestro, changeCurrentRestro } = useContext(AppContext);
  return (
    <div class="restroPageBanner">
      <div className="bannerLeft">
        <img
          className="restroPicBanner"
          src="https://assets.cntraveller.in/photos/612f08a19fd022fa9f74f1e8/16:9/w_1280,c_limit/The%20Verandah.jpeg"
        />
      </div>
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
      <div className="bannerRight">
        Offers
        <div className="bannerOffers">
          20% OFF | Use Code Party
          <br />
          30% off up to ₹150 on orders above ₹400 | Use code JUMBO
        </div>
      </div>
    </div>
  );
};

export default RestroPageBanner;

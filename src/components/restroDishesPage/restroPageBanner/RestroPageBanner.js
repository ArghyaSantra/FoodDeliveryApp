import React from "react";
import { useSelector } from "react-redux";
import { getChosenRestroSelector } from "../../../Redux/selectors/restroRelatedSelectors";
import "./restroPageBanner.css";

const RestroPageBanner = () => {
  const currentRestro = useSelector(getChosenRestroSelector);
  const { picId, eta, name, offers, price, ratings, tags } = currentRestro;
  console.log(currentRestro);

  function renderBannerRightSection() {
    return (
      <div className="bannerRight">
        Offers
        <div className="bannerOffers">
          {offers}
          <br />
          30% off up to ₹150 on orders above ₹400 | Use code JUMBO
        </div>
      </div>
    );
  }

  function renderBannerLeftSection() {
    return (
      <div className="bannerLeft">
        <img className="restroPicBanner" src={picId} />
      </div>
    );
  }

  function formatTags() {
    return tags.join(", ");
  }

  function renderBannerCenterSection() {
    return (
      <div className="bannerCenter">
        <div className="bannerCenterInsider">
          <h1>{name}</h1>
          <h3>{formatTags()} </h3>
          <h3>5th Block, Kormangala - Bangalore</h3>
          <div className="restroInfo">
            <div className="bannerRatings">
              <i class="fi fi-rr-star starRating"></i>
              {ratings}
              <br />
              <span>20+ ratings</span>
            </div>
            <div className="bannerEta">
              {eta}
              <br />
              <span>Delivery Time</span>
            </div>
            <div className="bannerPrice">
              {price}
              <br />
              <span>Cost for Two</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div class="restroPageBanner">
      {renderBannerLeftSection()}
      {renderBannerCenterSection()}
      {renderBannerRightSection()}
    </div>
  );
};

export default RestroPageBanner;

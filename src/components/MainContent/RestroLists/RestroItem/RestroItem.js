import React, { Component } from "react";
import { Rating } from "react-simple-star-rating";
import "./RestroItem.css";

const RestroItem = ({ details, restroClicked }) => {
  const { pic_id, Name, Tags, ETA, Price, Ratings, Offers } = details;
  return (
    <div
      className="restroitem-parent"
      onClick={(event) => {
        restroClicked(Name);
      }}
    >
      <div className="restroitem-details">
        <img className="restro-pic" src={pic_id} />
        <span className="restro-name">{Name}</span>
        <span className="cuisine">{Tags.join()}</span>
        <div className="rating-and-eta">
          <span>
            <i class="fi fi-rr-star star-rating"></i>
            {Ratings}
          </span>
          <span>{ETA}</span>
          <span>{Price}</span>
        </div>
        <div className="offers">
          <i class="fi fi-rr-earnings star-rating"></i>
          {Offers}
        </div>
      </div>
      <div className="quick-view">Quick View</div>
    </div>
  );
};

export default RestroItem;

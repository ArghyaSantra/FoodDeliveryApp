import React from "react";
import "./genericCardItem.css";

function GenericCardItem({ details, onClickEvent }) {
  const { name, picId, tags, eta, ratings, price, offers } = details;
  return (
    <div className="itemParent" onClick={(event) => onClickEvent(name)}>
      <div className="itemDetails">
        <img className="itemPic" src={picId} />
        <span className="itemName">{name}</span>
        <span className="itemCuisine">{tags.join()}</span>
        <div className="itemRatingAndEta">
          <span>
            <i class="fi fi-rr-star starRating"></i>
            {ratings}
          </span>
          <span>{eta}</span>
          <span>{price}</span>
        </div>
        {offers && (
          <div className="itemOffers">
            <i class="fi fi-rr-earnings starRating"></i>
            {offers}
          </div>
        )}
      </div>
      <div className="quickView">Quick View</div>
    </div>
  );
}

export default GenericCardItem;

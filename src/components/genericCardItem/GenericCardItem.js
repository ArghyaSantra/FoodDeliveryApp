import React from "react";
import "./genericCardItem.css";

function GenericCardItem({ details, onClickEvent, renderAdditionalInfo }) {
  const { name, picId, tags, eta, ratings, price, offers } = details;

  function mainContent() {
    return (
      <>
        <img className="itemPic" src={picId} />
        <span className="itemName">{name}</span>
        <span className="itemCuisine">{tags.join()}</span>
      </>
    );
  }

  function renderOffers() {
    return (
      offers && (
        <div className="itemOffers">
          <i class="fi fi-rr-earnings starRating"></i>
          {offers}
        </div>
      )
    );
  }

  function renderRatingAndEta() {
    return (
      <div className="itemRatingAndEta">
        <span>
          <i class="fi fi-rr-star starRating"></i>
          {ratings}
        </span>
        <span>{eta}</span>
        <span>{price}</span>
      </div>
    );
  }

  function renderQuickView() {
    return <div className="quickView">Quick View</div>;
  }

  return (
    <div className="itemParent" onClick={(event) => onClickEvent(name)}>
      <div className="itemDetails">
        {mainContent()}
        {renderRatingAndEta()}
        {renderOffers()}
      </div>
      {renderQuickView()}
      {renderAdditionalInfo()}
    </div>
  );
}

export default GenericCardItem;

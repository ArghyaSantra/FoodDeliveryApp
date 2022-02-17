import React from "react";
import "./restroDetailList.css";
import Button from "@material-ui/core/Button";

function RestroDetailList({ id, details, dishClicked }) {
  let itemCount = 0;
  const itemCounter = (count) => {
    itemCount = count;
  };
  const { name, price, description, picId } = details;

  function renderDishDetails() {
    return (
      <div className="restroDetailListInfo">
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    );
  }

  function renderDishPicAndAddButton() {
    return (
      <div className="restroDetailListImage">
        <img className="dishPic" src={picId} />
        <Button
          variant="contained"
          color="default"
          onClick={() => {
            dishClicked([details, itemCount]);
          }}
        >
          Add
        </Button>
      </div>
    );
  }
  return (
    <div className="restroDetailList">
      {renderDishDetails()}
      {renderDishPicAndAddButton()}
    </div>
  );
}

export default RestroDetailList;

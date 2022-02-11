import React from "react";
import "./restroDetailList.css";
import Button from "@material-ui/core/Button";

function RestroDetailList({ id, details, dishClicked }) {
  let itemCount = 0;
  const itemCounter = (count) => {
    itemCount = count;
  };

  return (
    <div className="restroDetailList">
      <div className="restroDetailListInfo">
        <p>{details.name}</p>
        <p>{details.price}</p>
        <p>{details.description}</p>
      </div>
      <div className="restroDetailListImage">
        <img className="dishPic" src={details.picId} />
        {/*<CartCounterButton itemCount={itemCount} />*/}
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
    </div>
  );
}

export default RestroDetailList;

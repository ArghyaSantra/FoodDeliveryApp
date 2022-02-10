import React, { useEffect } from "react";
import "./RestroDetailList.css";
import Button from "@material-ui/core/Button";
import CartCounterButton from "../../../CartCounterButton/CartCounterButton";

function RestroDetailList({ id, details, dishClicked }) {
  let ItemCount = 0;
  const itemCount = (count) => {
    console.log("itemCount=>" + count);
    ItemCount = count;
  };

  return (
    <div className="restrodetaillist">
      <div className="restrodetaillist-info">
        <p>{details.Name}</p>
        <p>{details.Price}</p>
        <p>{details.Description}</p>
      </div>
      <div className="restrodetaillist-image">
        <img className="dish-pic" src={details.Pic_Id} />
        {/*<CartCounterButton itemCount={itemCount} />*/}
        <Button
          variant="contained"
          color="tertiary"
          onClick={() => {
            //console.log(JSON.stringify(details.Name));
            dishClicked([details, ItemCount]);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default RestroDetailList;

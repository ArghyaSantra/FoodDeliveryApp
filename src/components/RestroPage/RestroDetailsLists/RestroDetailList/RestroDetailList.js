import React from "react";
import "./restroDetailList.css";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

function RestroDetailList({ id, details, dishClicked }) {
  /*let itemCount = 0;
  const itemCounter = (count) => {
    itemCount = count;
  };*/
  const navigate = useNavigate();
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
            dishClicked([details]);
            //navigate("/checkout");
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default RestroDetailList;

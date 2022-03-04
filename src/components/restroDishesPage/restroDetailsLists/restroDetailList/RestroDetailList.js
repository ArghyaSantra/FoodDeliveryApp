import React from "react";
import "./restroDetailList.css";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderDetails } from "../../../../Redux/actions";

function RestroDetailList({ details }) {
  const dispatch = useDispatch();
  const { name, price, description, picId } = details;

  const currentOrderDetails = useSelector(
    (state) => state.orderDetails.orderDetails
  );
  const dishAdd = () => {
    currentOrderDetails.push(details);
    dispatch(changeOrderDetails(currentOrderDetails));
  };

  function renderRestroDishInfo() {
    return (
      <div className="restroDetailListInfo">
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
      </div>
    );
  }

  function renderRestroDishPicAndAddBtn() {
    return (
      <div className="restroDetailListImage">
        <img className="dishPic" src={picId} />
        <Button variant="contained" color="default" onClick={dishAdd}>
          Add
        </Button>
      </div>
    );
  }
  return (
    <div className="restroDetailList">
      {renderRestroDishInfo()}
      {renderRestroDishPicAndAddBtn()}
    </div>
  );
}

export default RestroDetailList;

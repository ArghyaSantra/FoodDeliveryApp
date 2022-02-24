import React from "react";
import "./restroDetailList.css";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeOrderDetails } from "../../../../Redux/actions";

function RestroDetailList({ id, details, dishClicked }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentOrderDetails = useSelector(
    (state) => state.orderDetails.orderDetails
  );
  const dishAdd = () => {
    currentOrderDetails.push(details);
    console.log("currentOrderDetails");
    console.log(currentOrderDetails);
    dispatch(changeOrderDetails(currentOrderDetails));
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
        <Button variant="contained" color="default" onClick={dishAdd}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default RestroDetailList;

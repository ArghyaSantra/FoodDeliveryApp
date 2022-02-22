import React from "react";
import "./cart.css";
import Button from "@material-ui/core/Button";
import { filteredData } from "./cart.Helper";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  changeCheckoutStatus,
  changeFinalCheckoutStatus,
} from "../../../../Redux/actions";

function Cart({
  //checkoutClicked,
  //finalCheckoutClicked,
  orderConfirmationPage,
}) {
  const currentOrder = useSelector((state) => state.orderDetails.orderDetails);
  let [finalCartDetails, total] = filteredData(currentOrder);
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function checkoutClicked() {
    dispatch(changeCheckoutStatus());
    //setCheckoutClickFlag(true);
    navigate("/checkout");
  }

  function finalCheckoutClicked() {
    dispatch(changeFinalCheckoutStatus());
    //setFinalCheckoutClickFlag(true);
    navigate("/orderConfirmation"); // need to modify this....
  }

  function chooseRightFunctionForCheckout() {
    const path = location.pathname;
    let fn;
    if (path.includes("restro")) {
      fn = checkoutClicked;
    } else {
      fn = finalCheckoutClicked;
    }
    return fn;
  }

  function renderItemList() {
    return finalCartDetails.map((dishes, id) => {
      return <li key={id}>1 {dishes.name}</li>;
    });
  }

  function decideHeading() {
    return orderConfirmationPage ? "Order" : "Cart";
  }

  function renderCheckoutBtn() {
    return (
      !orderConfirmationPage && (
        <Button
          variant="contained"
          color="primary"
          onClick={chooseRightFunctionForCheckout()}
        >
          Checkout
        </Button>
      )
    );
  }
  return (
    <div className="cart">
      <h1>{decideHeading()}</h1>
      <p>from Kitchens of Punjab</p>
      <p>{finalCartDetails.length} Item</p>
      <ul>{renderItemList()}</ul>
      <p className="Subtotal">
        Subtotal
        <span>Extra charges may apply</span>
      </p>
      <p> Total : ₹ {total}</p>
      <div className="btn-checkout">{renderCheckoutBtn()}</div>
    </div>
  );
}

export default Cart;

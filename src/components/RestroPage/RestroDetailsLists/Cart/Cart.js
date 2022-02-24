import React from "react";
import "./cart.css";
import Button from "@material-ui/core/Button";
import { filteredData } from "./cart.Helper";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  changeCheckoutStatus,
  changeFinalCheckoutStatus,
} from "../../../../Redux/actions";
import { orderSelector } from "../../../../Redux/orderSelector";
import CartCounterButton from "../../../cartCounterButton/CartCounterButton";

function Cart({
  checkOut,
  finalCheckOut,
  currentOrderDetails,
  orderConfirmationPage,
}) {
  console.log("currentOrderDetails");
  console.log(currentOrderDetails);
  const currentOrder = currentOrderDetails; //useSelector((state) => state.orderDetails.orderDetails);
  let [finalCartDetails, total] = filteredData(currentOrder);
  const location = useLocation();
  const navigate = useNavigate();

  function checkoutClicked() {
    checkOut();
    navigate("/checkout");
  }

  function finalCheckoutClicked() {
    finalCheckOut();
    navigate("/orderConfirmation");
  }

  //Simplify this
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
      return (
        <>
          <li key={id}>1 {dishes.name}</li>
          {/*<CartCounterButton qty={1} />*/}
        </>
      );
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

const mapStateToProps = (state) => {
  return {
    currentOrderDetails: orderSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkOut: () => dispatch(changeCheckoutStatus()),
    finalCheckOut: () => dispatch(changeFinalCheckoutStatus()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

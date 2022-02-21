import React from "react";
import "./cart.css";
import Button from "@material-ui/core/Button";
import { filteredData } from "./index";

function Cart({
  cartDetails,
  ItemCount,
  checkoutClicked,
  finalCheckoutClicked,
  orderConfirmationPage,
}) {
  let [finalCartDetails, total] = filteredData(cartDetails);

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
          onClick={checkoutClicked ? checkoutClicked : finalCheckoutClicked}
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

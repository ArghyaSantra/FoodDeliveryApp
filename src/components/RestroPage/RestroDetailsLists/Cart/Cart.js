import React from "react";
import "./cart.css";
import Button from "@material-ui/core/Button";
import { filteredData } from "./index";

function Cart({ cartDetails, ItemCount, checkoutClicked }) {
  console.log("cartDetails");
  console.log(cartDetails);
  let [finalCartDetails, total] = filteredData(cartDetails);
  console.log(finalCartDetails + "******");
  console.log(total);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>from Kitchens of Punjab</p>
      <p>{finalCartDetails.length} Item</p>
      <ul>
        {finalCartDetails.map((dishes) => {
          return <li>1 {dishes.name}</li>;
        })}
      </ul>
      <p className="Subtotal">
        Subtotal
        <span>Extra charges may apply</span>
      </p>
      <p> Total : ₹ {total}</p>
      <div className="btn-checkout">
        <Button variant="contained" color="primary" onClick={checkoutClicked}>
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;

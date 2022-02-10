import React from "react";
import "./Cart.css";
import Button from "@material-ui/core/Button";

function Cart({ cartDetails, ItemCount, checkoutClicked }) {
  console.log("cartDetails" + JSON.stringify(cartDetails));
  let total = 0;

  let finalCartDetails = cartDetails.filter((detail, id) => id % 2 == 0);
  finalCartDetails.forEach((dishes) => {
    total += parseFloat(dishes.Price.substring(1));
  });
  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>from Kitchens of Punjab</p>
      <p>{finalCartDetails.length} Item</p>
      <ul>
        {finalCartDetails.map((dishes) => {
          return <li>1 {dishes.Name}</li>;
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

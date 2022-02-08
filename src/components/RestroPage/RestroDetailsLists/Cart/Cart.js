import React from "react";
import "./Cart.css";
import Button from "@material-ui/core/Button";

function Cart({ cartDetails }) {
  console.log("cartDetails" + JSON.stringify(cartDetails));
  let total = 0;
  cartDetails.forEach((dishes) => {
    total += parseFloat(dishes.Price.substring(1));
  });
  return (
    <div className="cart">
      <h1>Cart</h1>
      <p>from Kitchens of Punjab</p>
      <p>{cartDetails.length} Item</p>
      <ul>
        {cartDetails.map((dishes) => {
          return <li>1 {dishes.Name}</li>;
        })}
      </ul>
      <p className="Subtotal">
        Subtotal
        <span>Extra charges may apply</span>
      </p>
      <p> Total : ₹ {total}</p>
      <div className="btn-checkout">
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default Cart;

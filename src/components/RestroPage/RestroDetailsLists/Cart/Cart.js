import React from "react";
import "./cart.css";
import Button from "@material-ui/core/Button";
import { filteredData } from "./index";
import { useNavigate } from "react-router";

function Cart({
  cartDetails,
  ItemCount,
  checkoutClicked,
  finalCheckoutClicked,
}) {
  let [finalCartDetails, total] = filteredData(cartDetails);
  const navigate = useNavigate();
  function renderCartItems() {
    return (
      <ul>
        {finalCartDetails.map((dishes) => {
          return <li key={dishes.id}>1 {dishes.name}</li>;
        })}
      </ul>
    );
  }

  function renderRestroDetailsAndItemCount() {
    return (
      <>
        <h1>Cart</h1>
        <p>from Kitchens of Punjab</p>
        <p>{finalCartDetails.length} Item</p>
      </>
    );
  }

  function renderSubTotalAndCheckoutBtn() {
    return (
      <>
        <p className="Subtotal">
          Subtotal
          <span>Extra charges may apply</span>
        </p>
        <p> Total : ₹ {total}</p>
        <div className="btn-checkout">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </Button>
        </div>
      </>
    );
  }
  return (
    <div className="cart">
      {renderRestroDetailsAndItemCount()}
      {renderCartItems()}
      {renderSubTotalAndCheckoutBtn()}
    </div>
  );
}

export default Cart;

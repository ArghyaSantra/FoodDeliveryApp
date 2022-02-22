import React from "react";
import DeliveryDetails from "./deliveryDetails";
import Cart from "../restroPage/restroDetailsLists/cart";

import "./checkout.css";

const Checkout = () => {
  function renderDeliveryDetails() {
    return <DeliveryDetails />;
  }
  function renderCart() {
    return <Cart />;
  }
  return (
    <div className="checkoutParent">
      {renderDeliveryDetails()}
      {renderCart()}
    </div>
  );
};

export default Checkout;

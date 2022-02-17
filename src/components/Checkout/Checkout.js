import React, { Component } from "react";
import DeliveryDetails from "./deliveryDetails";
import Cart from "../restroPage/restroDetailsLists/cart";

import "./checkout.css";

const Checkout = ({
  addressDetails,
  getAddress,
  cartDetails,
  finalCheckoutClicked,
}) => {
  function renderDeliveryDetails() {
    return (
      <DeliveryDetails
        addressDetails={addressDetails}
        getAddress={getAddress}
      />
    );
  }

  function renderCart() {
    return (
      <Cart
        cartDetails={cartDetails}
        finalCheckoutClicked={finalCheckoutClicked}
      />
    );
  }
  return (
    <div className="checkoutParent">
      {renderDeliveryDetails()}
      {renderCart()}
    </div>
  );
};

export default Checkout;

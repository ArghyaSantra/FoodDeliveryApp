import React, { Component } from "react";
import DeliveryDetails from "./DeliveryDetails";
import Cart from "../RestroPage/RestroDetailsLists/Cart";

import "./Checkout.css";

const Checkout = (props) => {
  return (
    <div className="checkout-parent">
      <DeliveryDetails
        addressDetails={props.addressDetails}
        getAddress={props.getAddress}
      />
      <Cart cartDetails={props.cartDetails} />
    </div>
  );
};

export default Checkout;

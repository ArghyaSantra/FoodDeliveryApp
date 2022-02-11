import React, { Component } from "react";
import DeliveryDetails from "./deliveryDetails";
import Cart from "../restroPage/restroDetailsLists/cart";

import "./checkout.css";

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

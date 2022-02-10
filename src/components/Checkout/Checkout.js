import React, { Component } from "react";
import DeliveryDetails from "./DeliveryDetails";
import Cart from "../RestroPage/RestroDetailsLists/Cart";

import "./Checkout.css";

export class Checkout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="checkout-parent">
        <DeliveryDetails />
        <Cart cartDetails={this.props.cartDetails} />
      </div>
    );
  }
}

export default Checkout;

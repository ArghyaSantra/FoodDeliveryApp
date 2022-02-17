import React, { Component } from "react";
import AppContext from "../../Context";
import "./orderConfirmation.css";

class OrderConfirmation extends Component {
  static contextType = AppContext;
  render() {
    const { currentAddress } = this.context;

    return (
      <div className="orderConfirmationParent">
        <p>Order Successfully Placed!!!</p>
      </div>
    );
  }
}

export default OrderConfirmation;

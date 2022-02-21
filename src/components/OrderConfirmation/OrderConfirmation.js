import React, { Component } from "react";
import AppContext from "../../Context";
import "./orderConfirmation.css";

class OrderConfirmation extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = AppContext;
  render() {
    const { currentAddress } = this.context;

    return (
      <div className="orderConfirmationParent">
        {/*<h2> Address:</h2>
        <br />
        <p>{currentAddress.firstLine}</p>
        <p>{currentAddress.secondLine}</p>
        <p>{currentAddress.thirdLine}</p>
        <p>{this.props.cartDetails}</p>*/}
        <p>Order Successfully Placed!!!</p>
      </div>
    );
  }
}

export default OrderConfirmation;

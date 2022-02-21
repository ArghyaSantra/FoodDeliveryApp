import React, { Component, useContext } from "react";
import AppContext from "../../Context";
import "./orderConfirmation.css";

const OrderConfirmation = (props) => {
  const context = useContext(AppContext);

  const { currentAddress } = context;

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
};

export default OrderConfirmation;

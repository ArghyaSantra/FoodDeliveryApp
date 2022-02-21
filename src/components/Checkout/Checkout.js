import React from "react";
import DeliveryDetails from "./deliveryDetails";
import Cart from "../restroPage/restroDetailsLists/cart";

import "./checkout.css";

const Checkout = (props) => {
  const { addressDetails, finalCheckoutClicked, cartDetails } = props;
  function renderDeliveryDetails() {
    return <DeliveryDetails addressDetails={addressDetails} />;
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

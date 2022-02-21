import React, { useContext } from "react";
import AddressContext from "../../Context/AddressContext";
import Cart from "../restroPage/restroDetailsLists/cart";
import "./orderConfirmation.css";

const OrderConfirmation = ({ cartDetails }) => {
  const context = useContext(AddressContext);

  const { currentAddress } = context;
  const { firstLine, secondLine, thirdLine } = currentAddress;

  return (
    <div className="orderConfirmationParent">
      <p> Address: {firstLine + "," + secondLine + "," + thirdLine}</p>
      <br />
      <Cart cartDetails={cartDetails} orderConfirmationPage={true} />
      <p>Order Successfully Placed!!!</p>
    </div>
  );
};

export default OrderConfirmation;

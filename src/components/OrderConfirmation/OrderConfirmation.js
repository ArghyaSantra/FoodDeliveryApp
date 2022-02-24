import React from "react";
import { useSelector } from "react-redux";
import { addressSelector } from "../../Redux/selectors/addressSelector";
import Cart from "../restroPage/restroDetailsLists/cart";
import "./orderConfirmation.css";

const OrderConfirmation = ({ cartDetails }) => {
  const currentAddress = useSelector((state) => addressSelector(state));

  const { firstLine, secondLine, thirdLine } = currentAddress;

  return (
    <div className="orderConfirmationParent">
      <h2> Address: </h2>
      <h3>{firstLine} ,</h3>
      <h3>{secondLine} ,</h3>
      <h3>{thirdLine}</h3>
      <br />
      <Cart cartDetails={cartDetails} orderConfirmationPage={true} />
      <p>Order Successfully Placed!!!</p>
    </div>
  );
};

export default OrderConfirmation;

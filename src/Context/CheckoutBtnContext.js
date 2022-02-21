import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutBtnContext = React.createContext();

export const CheckoutBtnProvider = (props) => {
  const [checkoutClickFlag, setCheckoutClickFlag] = useState(false);
  const [finalCheckoutClickFlag, setFinalCheckoutClickFlag] = useState(false);

  const navigate = useNavigate();

  const checkoutClicked = () => {
    setCheckoutClickFlag(true);
    navigate("/checkout");
  };

  const finalCheckoutClicked = () => {
    setFinalCheckoutClickFlag(true);
    navigate("/orderConfirmation"); // need to modify this....
  };

  /*changeCurrentAddress = (name, value) => {
    if (name === "address-txtfield") {
      this.setState({
        currentAddress: { ...this.state.currentAddress, firstLine: value },
      });
    }
    if (name === "flat-txtfield") {
      this.setState({
        currentAddress: { ...this.state.currentAddress, secondLine: value },
      });
    }
    if (name === "landmark-txtfield") {
      this.setState({
        currentAddress: { ...this.state.currentAddress, thirdLine: value },
      });
    }
  };*/

  /*const { currentAddress } = this.state;
  const { changeCurrentAddress } = this;*/
  const { children } = props;
  return (
    <CheckoutBtnContext.Provider
      value={{
        checkoutClickFlag,
        finalCheckoutClickFlag,
        checkoutClicked,
        finalCheckoutClicked,
      }}
    >
      {children}
    </CheckoutBtnContext.Provider>
  );
};

export default CheckoutBtnContext;

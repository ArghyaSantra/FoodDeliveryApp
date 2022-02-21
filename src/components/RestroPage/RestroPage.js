import React, { Component, useContext, useEffect, useState } from "react";
import RestroDetailsLists from "./restroDetailsLists";
import RestroPageBanner from "./restroPageBanner";
import Checkout from "../checkout";
import OrderConfirmation from "../orderConfirmation";
import { getRestroDishes } from "./restroPage.Helper";
import "./restroPage.css";
import CartContext from "../../Context/CartContext";
import AddressContext from "../../Context/AddressContext";
import { useNavigate } from "react-router-dom";
import CheckoutBtnContext from "../../Context/CheckoutBtnContext";

let restroDishesFixed = [];

const RestroPage = () => {
  const [cart, setCart] = useState([]);
  const [ItemCount, setItemCount] = useState(0);
  const [restroDishes, setRestroDishes] = useState([]);

  const cartContext = useContext(CartContext);
  const addressContext = useContext(AddressContext);
  const checkoutBtnContext = useContext(CheckoutBtnContext);

  useEffect(() => {
    getRestroDishes().then((RestroDishesResponse) => {
      restroDishesFixed = RestroDishesResponse;
      setRestroDishes(RestroDishesResponse);
    });
  }, []);

  const searchFunctionality = (searchTxt) => {
    const RestroDishes = restroDishesFixed;
    let searchedDishes = RestroDishes.filter((dish) => {
      return dish.details.name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    setRestroDishes(searchedDishes);
  };

  const filterFunctionality = (choice) => {
    const RestroDishes = restroDishesFixed;
    let filteredDishes = RestroDishes;
    if (choice) {
      filteredDishes = RestroDishes.filter((dish) => {
        return dish.details.choice.toLowerCase() === "veg";
      });
    }
    setRestroDishes(filteredDishes);
  };

  const dishClicked = ([dishdetails, ItemCount]) => {
    const { changeCartDetails } = cartContext;
    setItemCount(ItemCount);
    let updatedCart = cart;
    updatedCart.push(dishdetails);
    changeCartDetails(updatedCart);
  };

  function renderRestroPageBanner() {
    return <RestroPageBanner />;
  }

  function renderRestroDetailsLists() {
    const { cart } = cartContext;
    const { checkoutClicked } = checkoutBtnContext;
    return (
      <RestroDetailsLists
        restroDishes={restroDishes}
        searchFunctionality={searchFunctionality}
        filterFunctionality={filterFunctionality}
        dishClicked={dishClicked}
        cartDetails={cart}
        checkoutClicked={checkoutClicked}
      />
    );
  }

  function renderCheckoutPage() {
    const { cart } = cartContext;
    const { finalCheckoutClicked } = checkoutBtnContext;
    return (
      <Checkout
        cartDetails={cart}
        finalCheckoutClicked={finalCheckoutClicked}
      />
    );
  }

  function renderOrderConfirmation() {
    const { currentAddress } = addressContext;
    const { cart } = cartContext;
    return (
      <OrderConfirmation residenceDetails={currentAddress} cartDetails={cart} />
    );
  }

  const { checkoutClickFlag, finalCheckoutClickFlag } = checkoutBtnContext;
  return (
    <div className="restroPageParent">
      {renderRestroPageBanner()}
      {!checkoutClickFlag && <>{renderRestroDetailsLists()}</>}
      {checkoutClickFlag && (
        <div className="restroPageCheckoutPage">
          {finalCheckoutClickFlag
            ? renderOrderConfirmation()
            : renderCheckoutPage()}
        </div>
      )}
    </div>
  );
};

export default RestroPage;

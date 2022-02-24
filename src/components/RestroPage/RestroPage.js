import React, { useEffect, useState } from "react";
import RestroDetailsLists from "./restroDetailsLists";
import RestroPageBanner from "./restroPageBanner";
import Checkout from "../checkout";
import OrderConfirmation from "../orderConfirmation";
import { getRestroDishes } from "./restroPage.Helper";
import "./restroPage.css";
import { useDispatch, useSelector } from "react-redux";
import { orderSelector } from "../../Redux/orderSelector";
import { setRestroDishes } from "../../Redux/actions";
import { dishesSelector } from "../../Redux/selectors/dishesSelector";

let restroDishesFixed = []; //needs to be removed....

const RestroPage = () => {
  const currentOrder = useSelector((state) => orderSelector(state)); //(state) => state.orderDetails.orderDetails

  const listOfRestroDishes = useSelector((state) => dishesSelector(state));

  const checkoutDetails = useSelector((state) => state.checkout);
  const { checkoutClickedFlag, finalCheckoutClickedFlag } = checkoutDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    getRestroDishes().then((RestroDishesResponse) => {
      restroDishesFixed = RestroDishesResponse;
      dispatch(setRestroDishes(RestroDishesResponse));
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

  function renderRestroPageBanner() {
    return <RestroPageBanner />;
  }

  function renderRestroDetailsLists() {
    return (
      <RestroDetailsLists
        restroDishes={listOfRestroDishes}
        searchFunctionality={searchFunctionality}
        filterFunctionality={filterFunctionality}
      />
    );
  }

  function renderCheckoutPage() {
    return <Checkout cartDetails={currentOrder} />;
  }

  function renderOrderConfirmation() {
    return <OrderConfirmation cartDetails={currentOrder} />;
  }

  return (
    <div className="restroPageParent">
      {renderRestroPageBanner()}
      {!checkoutClickedFlag && renderRestroDetailsLists()}
      {checkoutClickedFlag && (
        <div className="restroPageCheckoutPage">
          {finalCheckoutClickedFlag
            ? renderOrderConfirmation()
            : renderCheckoutPage()}
        </div>
      )}
    </div>
  );
};

export default RestroPage;

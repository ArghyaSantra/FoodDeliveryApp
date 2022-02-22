import React, { useEffect, useState } from "react";
import RestroDetailsLists from "./restroDetailsLists";
import RestroPageBanner from "./restroPageBanner";
import Checkout from "../checkout";
import OrderConfirmation from "../orderConfirmation";
import { getRestroDishes } from "./restroPage.Helper";
import "./restroPage.css";
import { useSelector } from "react-redux";

let restroDishesFixed = [];

const RestroPage = () => {
  const [restroDishes, setRestroDishes] = useState([]);
  const currentOrder = useSelector((state) => state.orderDetails.orderDetails);

  const checkoutDetails = useSelector((state) => state.checkout);
  const { checkoutClickedFlag, finalCheckoutClickedFlag } = checkoutDetails;

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

  function renderRestroPageBanner() {
    return <RestroPageBanner />;
  }

  function renderRestroDetailsLists() {
    return (
      <RestroDetailsLists
        restroDishes={restroDishes}
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
      {!checkoutClickedFlag && <>{renderRestroDetailsLists()}</>}
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

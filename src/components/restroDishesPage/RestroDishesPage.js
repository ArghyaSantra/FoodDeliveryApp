import React, { useEffect, useState } from "react";
import RestroDetailsLists from "./restroDetailsLists";
import RestroPageBanner from "./restroPageBanner";
import Checkout from "../checkout";
import OrderConfirmation from "../orderConfirmation";
import { getRestroDishes } from "./restroPage.Helper";
import "./restroDishesPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentOrderSelector } from "../../Redux/selectors/orderSelector"; //vas
import { setRestroDishes } from "../../Redux/actions";
import { getRestroDishesSelector } from "../../Redux/selectors/dishesSelector";
import { useParams } from "react-router-dom";

const RestroDishesPage = () => {
  const currentOrder = useSelector(getCurrentOrderSelector);

  const listOfRestroDishes = useSelector(getRestroDishesSelector);

  const checkoutDetails = useSelector((state) => state.checkout);
  const { checkoutClickedFlag, finalCheckoutClickedFlag } = checkoutDetails;
  const dispatch = useDispatch();
  const [displayedDishes, setDisplayedDishes] = useState([]);

  const params = useParams();
  const { restroId } = params;
  //Need to make a query param related HOC to pass id
  useEffect(() => {
    getRestroDishes(restroId).then((RestroDishesResponse) => {
      setDisplayedDishes(RestroDishesResponse);
      dispatch(setRestroDishes(RestroDishesResponse));
    });
  }, [restroId]);

  const searchFunctionality = (searchTxt) => {
    const searchedDishes = listOfRestroDishes.filter((dish) => {
      return dish.details.name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    setDisplayedDishes(searchedDishes);
  };

  const filterFunctionality = (choice) => {
    const filteredDishes = choice
      ? listOfRestroDishes.filter((dish) => {
          return dish.details.choice.toLowerCase() === "veg";
        })
      : listOfRestroDishes;
    setDisplayedDishes(filteredDishes);
  };

  return (
    <div className="restroPageParent">
      <RestroPageBanner />
      {!checkoutClickedFlag && (
        <RestroDetailsLists
          restroDishes={displayedDishes}
          searchFunctionality={searchFunctionality}
          filterFunctionality={filterFunctionality}
        />
      )}
      {checkoutClickedFlag && (
        <div className="restroPageCheckoutPage">
          {finalCheckoutClickedFlag ? (
            <OrderConfirmation cartDetails={currentOrder} />
          ) : (
            <Checkout cartDetails={currentOrder} />
          )}
        </div>
      )}
    </div>
  );
};

export default RestroDishesPage;

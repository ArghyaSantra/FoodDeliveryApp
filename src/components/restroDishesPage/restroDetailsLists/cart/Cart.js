import React from "react";
import "./cart.css";
import Button from "@material-ui/core/Button";
import { filteredData, getTotalItemsQuantity } from "./cart.Helper";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeCheckoutStatus,
  changeFinalCheckoutStatus,
} from "../../../../Redux/actions";
import { getCurrentOrderSelector } from "../../../../Redux/selectors/orderSelector"; //vas
import QueryParamHOC from "../../../queryParamHOC/QueryParamHOC";
import { getChosenRestroSelector } from "../../../../Redux/selectors/restroRelatedSelectors";

function Cart({
  checkOut,
  finalCheckOut,
  currentOrderDetails,
  orderConfirmationPage,
  step,
}) {
  let [finalCartDetails, total] = filteredData(currentOrderDetails);
  const navigate = useNavigate();

  const restroDetails = useSelector(getChosenRestroSelector);
  const { name } = restroDetails;

  function checkoutClicked() {
    checkOut();
    navigate("/checkout");
  }

  function finalCheckoutClicked() {
    finalCheckOut();
    navigate("/orderConfirmation");
  }

  function selectCheckoutFunction() {
    if (step === "checkout") {
      return checkoutClicked;
    } else {
      return finalCheckoutClicked;
    }
  }

  function renderItemList() {
    return finalCartDetails.map((dishes, id) => {
      return <li key={id}>1 {dishes.name}</li>;
    });
  }

  function getHeading() {
    return orderConfirmationPage ? "Order" : "Cart";
  }

  function renderCheckoutBtn() {
    return (
      !orderConfirmationPage && (
        <Button
          variant="contained"
          color="primary"
          onClick={selectCheckoutFunction()}
        >
          Checkout
        </Button>
      )
    );
  }

  const totalQuantity = getTotalItemsQuantity(finalCartDetails);
  return (
    <div className="cart">
      <h1>{getHeading()}</h1>
      <p>from {name}</p>
      <p>{totalQuantity} Item</p>
      <ul>{renderItemList()}</ul>
      <p className="Subtotal">
        Subtotal
        <span>Extra charges may apply</span>
      </p>
      <p> Total : ₹ {total}</p>
      <div className="btn-checkout">{renderCheckoutBtn()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentOrderDetails: getCurrentOrderSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkOut: () => dispatch(changeCheckoutStatus()),
    finalCheckOut: () => dispatch(changeFinalCheckoutStatus()),
  };
};

const EnhancedCartWithURLParams = QueryParamHOC(Cart);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnhancedCartWithURLParams);

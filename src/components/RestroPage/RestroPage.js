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

const RestroPage = () => {
  /*state = {
    cart: [],
    ItemCount: 0,
    restroDishes: [],
    checkoutClick: false,
    finalCheckoutClicked: false,
    residenceDetails: { FirstLine: "", SecondLine: "", ThirdLine: "" },
  };*/

  const [cart, setCart] = useState([]);
  const [ItemCount, setItemCount] = useState(0);
  const [restroDishes, setRestroDishes] = useState([]);
  const [checkoutStateClick, setCheckoutStateClick] = useState(false);
  const [finalCheckoutStateClicked, setFinalCheckoutStateClicked] =
    useState(false);
  /*const [residenceDetails, setResidenceDetails] = useState({
    FirstLine: "",
    SecondLine: "",
    ThirdLine: "",
  });*/

  // static contextType = CartContext;
  const cartContext = useContext(CartContext);
  const addressContext = useContext(AddressContext);
  const checkoutBtnContext = useContext(CheckoutBtnContext);

  const navigate = useNavigate();

  let restroDishesFixed = [];
  useEffect(() => {
    getRestroDishes().then((RestroDishesResponse) => {
      restroDishesFixed = RestroDishesResponse;
      setRestroDishes(RestroDishesResponse);
    });
  }, []);
  /*componentDidMount() {
    getRestroDishes().then((RestroDishesResponse) => {
      this.restroDishesFixed = RestroDishesResponse;
      this.setState({ restro_dishes: RestroDishesResponse });
    });
  }*/

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
    //this.setState((state) => {
    let updatedCart = cart;
    updatedCart.push(dishdetails);
    cartContext.changeCartDetails(updatedCart);
    //setCart(updatedCart);//arghya check this.....
    //cartContext.changeCartDetails(updatedCart);
    //return { cart: updatedCart };
    // });
  };

  /*const checkoutClicked = () => {
    setCheckoutStateClick(true);
    navigate("/checkout");
  };

  const finalCheckoutClicked = () => {
    setFinalCheckoutStateClicked(true);
  };*/

  /*getAddress = (address) => {
    let updatedAddress = this.state.residenceDetails;
    if (address.name === "address-txtfield") {
      updatedAddress.FirstLine = updatedAddress.FirstLine
        ? updatedAddress.FirstLine.concat(address.value)
        : address.value;
    } else if (address.name === "flat-txtfield") {
      updatedAddress.SecondLine = updatedAddress.SecondLine
        ? updatedAddress.SecondLine.concat(address.value)
        : address.value;
    } else {
      updatedAddress.ThirdLine = updatedAddress.ThirdLine
        ? updatedAddress.ThirdLine.concat(address.value)
        : address.value;
    }
    this.setState((state) => {
      return { residenceDetails: updatedAddress };
    });
  };*/

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
        /*getAddress={this.getAddress}*/
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
    //navigate("/orderConfirmation");
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

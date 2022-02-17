import React, { Component } from "react";
import RestroDetailsLists from "./restroDetailsLists";
import RestroPageBanner from "./restroPageBanner";
import Checkout from "../checkout";
import OrderConfirmation from "../orderConfirmation";
import { getRestroDishes } from "./restroPage.Helper";
import "./restroPage.css";
import AppContext from "../../Context";
import { getClassNameBasedOnTheme } from "../../utilities/themeRelatedUtils";

export class RestroPage extends Component {
  state = {
    cart: [],
    ItemCount: 0,
    restro_dishes: [],
    checkoutClick: false,
    finalCheckoutClicked: false,
    residenceDetails: { FirstLine: "", SecondLine: "", ThirdLine: "" },
  };

  static contextType = AppContext;

  restroDishesFixed = [];
  componentDidMount() {
    console.log("yaha aaye");
    getRestroDishes().then((RestroDishesResponse) => {
      this.restroDishesFixed = RestroDishesResponse;
      this.setState({ restro_dishes: RestroDishesResponse });
    });
  }

  searchFunctionality = (searchTxt) => {
    const RestroDishes = this.restroDishesFixed;
    let searchedDishes = RestroDishes.filter((dish) => {
      return dish.details.name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    this.setState({ ...this.state, restro_dishes: searchedDishes });
  };

  filterFunctionality = (choice) => {
    const RestroDishes = this.restroDishesFixed;
    let searchDishes = RestroDishes;
    if (choice) {
      searchDishes = RestroDishes.filter((dish) => {
        return dish.details.choice.toLowerCase() === "veg";
      });
    }
    this.setState({ ...this.state, restro_dishes: searchDishes });
  };

  dishClicked = ([dishdetails, ItemCount]) => {
    this.setState({ ItemCount: ItemCount });
    this.setState((state) => {
      let updatedCart = state.cart;
      updatedCart.push(dishdetails);
      return { ...this.state, cart: updatedCart };
    });
  };

  checkoutClicked = () => {
    this.setState({ ...this.state, checkoutClick: true });
  };

  finalCheckoutClicked = () => {
    this.setState({ ...this.state, finalCheckoutClicked: true });
  };

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
      return { ...state, residenceDetails: updatedAddress };
    });
  };*/

  renderRestroPageBanner() {
    return <RestroPageBanner />;
  }

  renderRestroDetailsLists() {
    return (
      <RestroDetailsLists
        restroDishes={this.state.restro_dishes}
        searchFunctionality={this.searchFunctionality}
        filterFunctionality={this.filterFunctionality}
        dishClicked={this.dishClicked}
        cartDetails={this.state.cart}
        checkoutClicked={this.checkoutClicked}
      />
    );
  }

  renderCheckoutPage() {
    return (
      <Checkout
        cartDetails={this.state.cart}
        finalCheckoutClicked={this.finalCheckoutClicked}
      />
    );
  }

  renderOrderConfirmation() {
    return (
      <OrderConfirmation
        residenceDetails={this.state.residenceDetails}
        cartDetails={this.state.cart}
      />
    );
  }

  render() {
    const { currentTheme } = this.context;
    return (
      <div className="restroPageParent">
        {this.renderRestroPageBanner()}
        {!this.state.checkoutClick && <>{this.renderRestroDetailsLists()}</>}
        {this.state.checkoutClick && (
          <div
            className={getClassNameBasedOnTheme(
              currentTheme,
              "restroPageCheckoutPage"
            )}
          >
            {this.state.finalCheckoutClicked
              ? this.renderOrderConfirmation()
              : this.renderCheckoutPage()}
          </div>
        )}
      </div>
    );
  }
}

export default RestroPage;

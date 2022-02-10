import React, { Component } from "react";
import { getRestroDishes } from "../RestroPageDummyAPISetup";
import RestroDetailsLists from "./RestroDetailsLists";
import RestroPageBanner from "./RestroPage_Banner";
import Checkout from "../Checkout";
import OrderConfirmation from "../OrderConfirmation";

export class RestroPage extends Component {
  constructor() {
    super();
    this.restroDishesFixed = [];
    this.state = {
      cart: [],
      ItemCount: 0,
      restro_dishes: [],
      checkoutClick: false,
      residenceDetails: { FirstLine: "", SecondLine: "", ThirdLine: "" },
    };
  }

  componentDidMount() {
    console.log("componentDidMount******");
    getRestroDishes().then((RestroDishesResponse) => {
      console.log(
        "RestroDishesResponse=>" + JSON.stringify(RestroDishesResponse)
      );
      this.restroDishesFixed = RestroDishesResponse;
      this.setState({ restro_dishes: RestroDishesResponse });
    });
  }

  searchFunctionality = (searchTxt) => {
    const RestroDishes = this.restroDishesFixed;
    //const RestroDishes = this.state.restro_dishes;
    console.log("RestroDishes->" + JSON.stringify(this.state.restro_dishes));
    let searchedDishes = RestroDishes.filter((dish) => {
      return dish.details.Name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    this.setState({ ...this.state, restro_dishes: searchedDishes });
  };

  filterFunctionality = (choice) => {
    const RestroDishes = this.restroDishesFixed;
    //const RestroDishes = this.state.restro_dishes;
    //console.log("RestroDishes->" + JSON.stringify(RestroDishes));
    let searchDishes = RestroDishes;
    if (choice) {
      searchDishes = RestroDishes.filter((dish) => {
        return dish.details.Choice.toLowerCase() === "veg";
      });
    }
    console.log("filterFunctionality");
    this.setState({ ...this.state, restro_dishes: searchDishes });
  };

  dishClicked = ([dishdetails, ItemCount]) => {
    this.setState({ ItemCount: ItemCount });
    console.log("this.state.cart12345=>" + JSON.stringify(this.state.cart));
    this.setState((state) => {
      let updatedCart = state.cart;
      updatedCart.push(dishdetails);
      console.log("updatedCart:" + JSON.stringify(updatedCart));
      return { ...this.state, cart: updatedCart };
    });
  };

  checkoutClicked = () => {
    this.setState({ ...this.state, checkoutClick: true });
  };

  getAddress = (address) => {
    console.log(
      "Address=>" + JSON.stringify(this.state.residenceDetails.FirstLine)
    );
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
  };

  render() {
    console.log("render******");
    console.log("render RestroPage");
    console.log(this.state.restro_dishes);
    return (
      <div className="restropage-parent">
        <RestroPageBanner />
        {/*<div className="bread-crumb">Bread Crumb</div>*/}
        {!this.state.checkoutClick && (
          <>
            <RestroDetailsLists
              restroDishes={this.state.restro_dishes}
              searchFunctionality={this.searchFunctionality}
              filterFunctionality={this.filterFunctionality}
              dishClicked={this.dishClicked}
              cartDetails={this.state.cart}
              checkoutClicked={this.checkoutClicked}
            />
          </>
        )}
        {this.state.checkoutClick && (
          <>
            <Checkout
              cartDetails={this.state.cart}
              getAddress={this.getAddress}
            />
            <OrderConfirmation
              residenceDetails={this.state.residenceDetails}
              cartDetails={this.state.cart}
            />
          </>
        )}
      </div>
    );
  }
}

export default RestroPage;

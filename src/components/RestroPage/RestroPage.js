import React, { Component } from "react";
import { getRestroDishes } from "../RestroPageDummyAPISetup";
import RestroDetailsLists from "./RestroDetailsLists";
import RestroPageBanner from "./RestroPage_Banner";

export class RestroPage extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      ItemCount: 0,
      restro_dishes: [],
      checkoutClick: false,
    };
  }

  componentDidMount() {
    getRestroDishes().then((RestroDishesResponse) => {
      console.log(
        "RestroDishesResponse=>" + JSON.stringify(RestroDishesResponse)
      );
      this.setState({ restro_dishes: RestroDishesResponse });
    });
  }

  searchFunctionality = (searchedDishes) => {
    //console.log("Restro Page inside");
    //console.log(searchedDishes);
    this.setState({ ...this.state, restro_dishes: searchedDishes });
  };
  render() {
    //console.log("render RestroPage");
    return (
      <div className="restropage-parent">
        {/*<div className="bread-crumb">Bread Crumb</div>*/}
        <RestroPageBanner />
        <RestroDetailsLists
          restroDishes={this.state.restro_dishes}
          searchFunctionality={this.searchFunctionality}
        />
        {/*<Checkout />*/}
      </div>
    );
  }
}

export default RestroPage;

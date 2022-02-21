import React, { Component } from "react";
import _ from "lodash";

import Cart from "./cart";
import RestroDetailList from "./restroDetailList";
import "./restroDetailsLists.css";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

class RestroDetailsLists extends Component {
  constructor(props) {
    super(props);
  }

  renderRestroDetailsLists = (dish) => {
    return (
      <RestroDetailList
        key={dish.id}
        details={dish.details}
        dishClicked={this.props.dishClicked}
      />
    );
  };

  renderCompleteRestroList() {
    return _.map(this.props.restroDishes, this.renderRestroDetailsLists);
  }

  renderCartSection() {
    return (
      <Cart
        cartDetails={this.props.cartDetails}
        checkoutClicked={this.props.checkoutClicked}
      />
    );
  }

  render() {
    return (
      <div className="restroDishesLists">
        <div className="restroDishesListsLeft">Left-section</div>
        <div className="restroDishesListsMain">
          <div className="searchAndFilter">
            <div className="search">
              <TextField
                id="outlined-basic"
                label="Search..."
                variant="outlined"
                onChange={(event) =>
                  this.props.searchFunctionality(event.target.value)
                }
              />
            </div>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
              onChange={(event) => {
                this.props.filterFunctionality(event.target.checked);
              }}
            />
            Veg Only
          </div>
          {this.renderCompleteRestroList()}
        </div>
        <div className="restroDishesListsRight">{this.renderCartSection()}</div>
      </div>
    );
  }
}

export default RestroDetailsLists;

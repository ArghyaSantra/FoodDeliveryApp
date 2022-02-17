import React, { Component } from "react";
import _ from "lodash";

import Cart from "./cart";
import RestroDetailList from "./restroDetailList";
import "./restroDetailsLists.css";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import AppContext from "../../../Context";
import { getClassNameBasedOnTheme } from "../../../utilities/themeRelatedUtils";

class RestroDetailsLists extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = AppContext;

  renderRestroDetailsLists = ({ id, details }) => {
    const { dishClicked } = this.props;
    return (
      <RestroDetailList key={id} details={details} dishClicked={dishClicked} />
    );
  };

  renderCompleteRestroList() {
    const { restroDishes } = this.props;
    return _.map(restroDishes, this.renderRestroDetailsLists);
  }

  renderSearchAndFilter(searchFunctionality, filterFunctionality) {
    return (
      <div className="searchAndFilter">
        <div className="search">
          <TextField
            id="outlined-basic"
            label="Search..."
            variant="outlined"
            onChange={(event) => searchFunctionality(event.target.value)}
          />
        </div>
        <Checkbox
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          onChange={(event) => {
            filterFunctionality(event.target.checked);
          }}
        />
        Veg Only
      </div>
    );
  }
  renderRestroDishesSection() {
    const { searchFunctionality, filterFunctionality } = this.props;
    return (
      <div className="restroDishesListsMain">
        {this.renderSearchAndFilter(searchFunctionality, filterFunctionality)}
        {this.renderCompleteRestroList()}
      </div>
    );
  }

  renderCartSection() {
    const { cartDetails, checkoutClicked } = this.props;
    return <Cart cartDetails={cartDetails} checkoutClicked={checkoutClicked} />;
  }

  render() {
    const { currentTheme } = this.context;
    return (
      <div
        className={getClassNameBasedOnTheme(currentTheme, "restroDishesLists")}
      >
        <div className="restroDishesListsLeft">Left-section</div>
        {this.renderRestroDishesSection()}
        <div className="restroDishesListsRight">{this.renderCartSection()}</div>
      </div>
    );
  }
}

export default RestroDetailsLists;

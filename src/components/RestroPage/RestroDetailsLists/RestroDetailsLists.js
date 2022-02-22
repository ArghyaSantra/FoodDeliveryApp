import React from "react";
import _ from "lodash";

import Cart from "./cart";
import RestroDetailList from "./restroDetailList";
import "./restroDetailsLists.css";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const RestroDetailsLists = (props) => {
  const {
    restroDishes,
    //checkoutClicked,
    searchFunctionality,
    filterFunctionality,
  } = props;

  const renderRestroDetailsLists = ({ id, details }) => {
    return <RestroDetailList key={id} details={details} />;
  };

  function renderCompleteRestroList() {
    return _.map(restroDishes, renderRestroDetailsLists);
  }

  function renderCartSection() {
    return <Cart />; //checkoutClicked={checkoutClicked} />;
  }

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
        {renderCompleteRestroList()}
      </div>
      <div className="restroDishesListsRight">{renderCartSection()}</div>
    </div>
  );
};

export default RestroDetailsLists;

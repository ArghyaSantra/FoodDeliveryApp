import React, { Component } from "react";
import RestroItem from "./restroItem";
import _ from "lodash";
import "./restroLists.css";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";

const RestroLists = ({ restroClicked, restroList }) => {
  const restroClickedHere = (restro) => {
    restroClicked(restro);
  };

  function AdditionalInfo() {
    return <div>Additional Info</div>;
  }

  function renderRestroItems({ id, details }) {
    return (
      <RestroItem
        key={id}
        details={details}
        restroClicked={restroClickedHere}
        renderAdditionalInfo={AdditionalInfo}
      />
    );
  }

  function renderRestroList() {
    //throw new Error("Something went wrong in Restro Items");
    return (
      <ErrorBoundary>
        <div className="restroList">{_.map(restroList, renderRestroItems)}</div>
      </ErrorBoundary>
    );
  }
  return renderRestroList();
};

export default RestroLists;

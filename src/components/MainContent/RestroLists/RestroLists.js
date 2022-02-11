import React, { Component } from "react";
import RestroItem from "./restroItem";
import _ from "lodash";
import "./restroLists.css";

const RestroLists = ({ restroClicked, restroList }) => {
  const restroClickedHere = (restro) => {
    restroClicked(restro);
  };

  function renderRestroItems(restroitem) {
    return (
      <RestroItem
        key={restroitem.id}
        details={restroitem.details}
        restroClicked={restroClickedHere}
      />
    );
  }

  function renderRestroList() {
    return (
      <div className="restroList">{_.map(restroList, renderRestroItems)}</div>
    );
  }
  return renderRestroList();
};

export default RestroLists;

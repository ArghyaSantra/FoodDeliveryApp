import React from "react";
import RestroItem from "./restroItem";
import _ from "lodash";
import "./restroLists.css";

const RestroLists = ({ restroList }) => {
  function renderRestroItems(restroitem) {
    const { id, details } = restroitem;
    return <RestroItem key={id} details={details} />;
  }

  function renderRestroList() {
    return (
      <div className="restroList">{_.map(restroList, renderRestroItems)}</div>
    );
  }
  return renderRestroList();
};

export default RestroLists;

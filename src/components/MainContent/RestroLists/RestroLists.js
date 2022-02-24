import React from "react";
import RestroItem from "./restroItem";
import _ from "lodash";
import "./restroLists.css";

const RestroLists = ({ restroList, highlightChosen }) => {
  function renderRestroItems({ id, details }) {
    //const { id, details } = restroitem;
    return (
      <RestroItem
        key={id}
        restroId={id}
        details={details}
        highlightChosen={highlightChosen}
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

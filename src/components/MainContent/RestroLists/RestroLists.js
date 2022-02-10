import React, { Component } from "react";
import RestroItem from "./RestroItem";
import _ from "lodash";
import "./RestroLists.css";

const RestroLists = ({ restroClicked, restroList }) => {
  const restroClickedHere = (restro) => {
    restroClicked(restro);
  };
  return (
    <div className="restrolist">
      {_.map(restroList, (restroitem) => {
        return (
          <RestroItem
            key={restroitem.id}
            details={restroitem.details}
            restroClicked={restroClickedHere}
          />
        );
      })}
    </div>
  );
};

export default RestroLists;

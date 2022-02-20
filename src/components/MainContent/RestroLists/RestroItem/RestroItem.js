import React, { Component, useContext } from "react";
import AppContext from "../../../../Context";
import GenericCardItem from "../../../genericCardItem";
import "./restroItem.css";

const RestroItem = (props) => {
  //static contextType = AppContext;
  const { currentRestro, changeCurrentRestro } = useContext(AppContext);

  const restroClicked = (restro) => {
    changeCurrentRestro(restro);
    props.restroClicked(restro);
  };
  return (
    <GenericCardItem details={props.details} onClickEvent={restroClicked} />
  );
};

export default RestroItem;

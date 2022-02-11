import React from "react";
import GenericCardItem from "../../../genericCardItem";
import "./restroItem.css";

const RestroItem = ({ details, restroClicked }) => {
  const { picId, name, tags, eta, price, ratings, offers } = details;
  return <GenericCardItem details={details} onClickEvent={restroClicked} />;
};

export default RestroItem;

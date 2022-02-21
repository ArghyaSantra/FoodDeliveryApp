import React, { useContext } from "react";
import AppContext from "../../../../Context";
import GenericCardItem from "../../../genericCardItem";
import "./restroItem.css";

const RestroItem = (props) => {
  const { currentRestro, changeCurrentRestro } = useContext(AppContext);
  const { details } = props;
  const restroClicked = (restro) => {
    changeCurrentRestro(restro);
    props.restroClicked(restro);
  };
  return <GenericCardItem details={details} onClickEvent={restroClicked} />;
};

export default RestroItem;

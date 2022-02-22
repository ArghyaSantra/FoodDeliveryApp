import React from "react";
import { useDispatch } from "react-redux";
import GenericCardItem from "../../../genericCardItem";
import "./restroItem.css";
import { selectRestro } from "../../../../Redux/actions";
import { useNavigate } from "react-router-dom";

const RestroItem = (props) => {
  const { details } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restroClicked = (restro) => {
    dispatch(selectRestro(restro));
    navigate(`/restro/${restro}`);
  };
  return <GenericCardItem details={details} onClickEvent={restroClicked} />;
};

export default RestroItem;

import React from "react";
import { useDispatch } from "react-redux";
import GenericCardItem from "../../../genericCardItem";
import "./restroItem.css";
import { selectRestro } from "../../../../Redux/actions";
import { useNavigate } from "react-router-dom";

const RestroItem = (props) => {
  const { details, restroId, highlightChosen } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restroClicked = (restroDetails) => {
    dispatch(selectRestro(restroDetails));
    navigate(`/restro/${highlightChosen}/${restroId}`);
  };
  return <GenericCardItem details={details} onClickEvent={restroClicked} />;
};

export default RestroItem;

import React from "react";
import RestroItem from "./restroItem";
import _ from "lodash";
import "./restroLists.css";
import { getRestrosSelector } from "../../../Redux/selectors/restroRelatedSelectors";
import { setRestros } from "../../../Redux/actions";
import { getRestroList } from "./restroLists.Helper";
import useLoaderAndRedux from "../../customHooks/useLoaderAndRedux";

const RestroLists = ({ highlightChosen }) => {
  const { data, isLoading } = useLoaderAndRedux(
    getRestroList,
    setRestros,
    getRestrosSelector
  );

  const restroList = data[highlightChosen];
  console.log("restroList");
  console.log(restroList);

  function renderRestroItems({ id, details }) {
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

  function properLoading(isLoading) {
    if (isLoading) {
      return (
        <div className="restroList">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return renderRestroList();
    }
  }

  return properLoading(isLoading);
};

export default RestroLists;

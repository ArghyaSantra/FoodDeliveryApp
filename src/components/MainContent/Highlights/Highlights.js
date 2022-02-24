import React, { useEffect } from "react";
import Highlight from "./highlight";
import _ from "lodash";

import "./highlights.css";
import { setHighlights } from "../../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getHighlightListSelector } from "../../../Redux/selectors/highlightRelatedSelectors";
import { getHighlightsList } from "./highlight/highights.Helper";
import useLoaderAndRedux from "../../customHooks/useLoaderAndRedux";

const Highlights = ({ /*highlights,*/ onHighlightClicked }) => {
  /*const dispatch = useDispatch();
  //const highlightsList = useSelector(getHighlightListSelector);
  useEffect(() => {
    getHighlightsList().then((values) => {
      dispatch(setHighlights(values));
    });
  }, []);
*/

  //Use of Custom Hook

  const { data, isLoading } = useLoaderAndRedux(
    getHighlightsList,
    setHighlights,
    getHighlightListSelector
  );

  const highlightsList = data;

  function properLoading(isLoading) {
    if (isLoading) {
      return (
        <div className="highlightsInside">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="highlightsInside">
          {_.map(highlightsList, renderHighlights)}
        </div>
      );
    }
  }

  function renderHighlights({ id, details }) {
    return (
      <Highlight
        key={id}
        details={details}
        onHighlightClicked={onHighlightClicked}
      />
    );
  }

  return properLoading(isLoading);
};

export default Highlights;

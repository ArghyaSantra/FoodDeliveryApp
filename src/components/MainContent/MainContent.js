import React, { useEffect, useState } from "react";
import Highlights from "./highlights";
import RestroLists from "./restroLists";
import "./mainContent.css";
import { getHighlightsList } from "./highlights/highlight/highights.Helper";
import { getRestroList } from "./restroLists/restroLists.Helper";
import { useDispatch, useSelector } from "react-redux";
import { setHighlights, setRestros } from "../../Redux/actions";
import { getHighlightListSelector } from "../../Redux/selectors/highlightRelatedSelectors";
import { getRestrosSelector } from "../../Redux/selectors/restroRelatedSelectors";

const MainContent = () => {
  //From Local State of the component
  const [highlightChosen, setHighlightChosen] = useState("Offers Near You");
  //From Redux Store
  const highlightsList = useSelector(getHighlightListSelector);
  const restroList = useSelector(getRestrosSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([getRestroList(), getHighlightsList()]).then((values) => {
      dispatch(setHighlights(values[1]));
      dispatch(setRestros(values[0]));
    });
  }, []);

  const highlightClicked = (highlight) => {
    setHighlightChosen(highlight);
  };

  function getRestroListBasedOnHighlight() {
    return restroList[highlightChosen];
  }

  return (
    <div className="mainContent">
      <div className="highLights">
        <Highlights
          highlights={highlightsList}
          onHighlightClicked={highlightClicked}
        />
      </div>
      <div className="restroLists">
        <RestroLists
          restroList={getRestroListBasedOnHighlight()}
          highlightChosen={highlightChosen}
        />
      </div>
    </div>
  );
};

export default MainContent;

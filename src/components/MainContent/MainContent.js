import React, { useEffect, useState } from "react";
import Highlights from "./highlights";
import RestroLists from "./restroLists";
import "./mainContent.css";
import { getHighlightsList } from "./highlights/highlight/highights.Helper";
import { getRestroList } from "./restroLists/restroLists.Helper";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const MainContent = (props) => {
  const [restrolist, setRestrolist] = useState([]);
  const [highlights, setHighlights] = useState([]);
  const [hightlightPicked, setHightlightPicked] = useState(null);

  useEffect(() => {
    Promise.all([getRestroList(), getHighlightsList()]).then((values) => {
      setHighlights(values[1]);
      setRestrolist(values[0]);
    });
  }, []);

  useEffect(() => {
    getRestroList(hightlightPicked).then((values) => {
      setRestrolist(values);
    });
  }, [hightlightPicked]);

  const restroClicked = (restro) => {
    props.restroClicked(restro);
  };

  const highlightClicked = (highlightName) => {
    setHightlightPicked(highlightName);
  };

  return (
    <div className="mainContent">
      <div className="highLights">
        <ErrorBoundary>
          <Highlights
            highlights={highlights}
            highlightClicked={highlightClicked}
          />
        </ErrorBoundary>
      </div>
      <div className="restroLists">
        <RestroLists restroClicked={restroClicked} restroList={restrolist} />
      </div>
    </div>
  );
};

export default MainContent;

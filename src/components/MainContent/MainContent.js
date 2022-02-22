import React, { useEffect, useState } from "react";
import Highlights from "./highlights";
import RestroLists from "./restroLists";
import "./mainContent.css";
import { getHighlightsList } from "./highlights/highlight/highights.Helper";
import { getRestroList } from "./restroLists/restroLists.Helper";
import { useSelector } from "react-redux";

const MainContent = () => {
  const [restrolist, setRestrolist] = useState([]);
  const [highlights, setHighlights] = useState([]);

  const highlightChosen = useSelector(
    (state) => state.hightlightSelect.highlightChosen
  );

  useEffect(() => {
    Promise.all([getRestroList(), getHighlightsList()]).then((values) => {
      setHighlights(values[1]);
      setRestrolist(values[0]);
    });
  }, []);

  useEffect(() => {
    getRestroList(highlightChosen).then((values) => {
      setRestrolist(values);
    });
  }, [highlightChosen]);

  return (
    <div className="mainContent">
      <div className="highLights">
        <Highlights highlights={highlights} />
      </div>
      <div className="restroLists">
        <RestroLists restroList={restrolist} />
      </div>
    </div>
  );
};

export default MainContent;

import React, { useEffect } from "react";
import Highlights from "./highlights";
import RestroLists from "./restroLists";
import "./mainContent.css";
import { getHighlightsList } from "./highlights/highlight/highights.Helper";
import { getRestroList } from "./restroLists/restroLists.Helper";
import { useDispatch, useSelector } from "react-redux";
import { setHighlights, setRestros } from "../../Redux/actions";

const MainContent = () => {
  const highlightChosen = useSelector(
    (state) => state.hightlightSelect.highlightChosen
  );

  const highlightsList = useSelector(
    (state) => state.hightlightSelect.highlights
  );

  const restroList = useSelector((state) => state.selectRestro.restroList);

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([getRestroList(), getHighlightsList()]).then((values) => {
      dispatch(setHighlights(values[1]));
      dispatch(setRestros(values[0]));
    });
  }, []);

  useEffect(() => {
    getRestroList(highlightChosen).then((values) => {
      dispatch(setRestros(values));
    });
  }, [highlightChosen]);

  return (
    <div className="mainContent">
      <div className="highLights">
        <Highlights highlights={highlightsList} />
      </div>
      <div className="restroLists">
        <RestroLists restroList={restroList} />
      </div>
    </div>
  );
};

export default MainContent;

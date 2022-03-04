import React, { useState } from "react";
import Highlights from "./highlights";
import RestroLists from "./restroLists";
import "./mainContent.css";

const MainContent = () => {
  const [highlightChosen, setHighlightChosen] = useState("Offers Near You");

  const highlightClicked = (highlight) => {
    setHighlightChosen(highlight);
  };

  return (
    <div className="mainContent">
      <div className="highLights">
        <Highlights onHighlightClicked={highlightClicked} />
      </div>
      <div className="restroLists">
        <RestroLists highlightChosen={highlightChosen} />
      </div>
    </div>
  );
};

export default MainContent;

import React from "react";
import Highlight from "./highlight";
import _ from "lodash";

import "./highlights.css";

const Highlights = ({ highlights, onHighlightClicked }) => {
  function renderHighlights({ id, details }) {
    return (
      <Highlight
        key={id}
        details={details}
        onHighlightClicked={onHighlightClicked}
      />
    );
  }
  return (
    <div className="highlightsInside">
      {_.map(highlights, renderHighlights)}
    </div>
  );
};

export default Highlights;

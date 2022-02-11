import React, { Component } from "react";
import Highlight from "./highlight";
import _ from "lodash";

import "./highlights.css";

const Highlights = ({ highlights, highlightClicked }) => {
  function renderHighlights(highlight) {
    return (
      <Highlight
        key={highlight.id}
        details={highlight.details}
        highlightClicked={highlightClicked}
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

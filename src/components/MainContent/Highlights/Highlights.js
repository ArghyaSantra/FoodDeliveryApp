import React, { Component } from "react";
import Highlight from "./highlight";
import _ from "lodash";

import "./highlights.css";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";

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
  throw new Error("Something went wrong!!!");
  return (
    <ErrorBoundary>
      <div className="highlightsInside">
        {_.map(highlights, renderHighlights)}
      </div>
    </ErrorBoundary>
  );
};

export default Highlights;

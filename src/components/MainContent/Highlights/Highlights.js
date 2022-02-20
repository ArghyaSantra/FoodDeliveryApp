import React, { Component } from "react";
import Highlight from "./highlight";
import _ from "lodash";

import "./highlights.css";
import ErrorBoundary from "../../errorBoundary/ErrorBoundary";

const Highlights = ({ highlights, highlightClicked }) => {
  function renderHighlights({ id, details }) {
    return (
      <Highlight
        key={id}
        details={details}
        highlightClicked={highlightClicked}
      />
    );
  }
  //throw new Error("Something went wrong!!!");
  return (
    <ErrorBoundary>
      <div className="highlightsInside">
        {_.map(highlights, renderHighlights)}
      </div>
    </ErrorBoundary>
  );
};

export default Highlights;

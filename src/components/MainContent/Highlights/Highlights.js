import React, { Component } from "react";
import Highlight from "./Highlight";
import _ from "lodash";

import "./Highlights.css";

const Highlights = ({ highlights }) => {
  return (
    <div className="highlights-inside">
      {_.map(highlights, (highlight) => {
        return <Highlight key={highlight.id} details={highlight.details} />;
      })}
    </div>
  );
};

export default Highlights;

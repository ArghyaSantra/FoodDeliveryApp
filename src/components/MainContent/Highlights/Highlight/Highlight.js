import React, { Component } from "react";
import ErrorBoundary from "../../../errorBoundary/ErrorBoundary";
import "./highlight.css";

const Highlight = ({ details, highlightClicked }) => {
  console.log("details");
  console.log(details);
  const { title, iconClass, options } = details;
  console.log("title");
  console.log(title);
  return (
    <div className="highlight" onClick={() => highlightClicked(title)}>
      <span className="highlightLogo">
        <i class={iconClass}></i>
      </span>
      <span className="highlightInfo">
        <span>{title}</span>
        <span className="highlightInfoOptions">{options}</span>
      </span>
    </div>
  );
};

export default Highlight;

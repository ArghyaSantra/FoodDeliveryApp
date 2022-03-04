import React from "react";
import "./highlight.css";

const Highlight = ({ details, onHighlightClicked }) => {
  const { title, iconClass, options } = details;

  function handleHighlightClick() {
    onHighlightClicked(title);
  }

  function renderhighlightLogo() {
    return (
      <span className="highlightLogo">
        <i class={iconClass}></i>
      </span>
    );
  }

  function renderhighlightInfo() {
    return (
      <span className="highlightInfo">
        <span>{title}</span>
        <span className="highlightInfoOptions">{options}</span>
      </span>
    );
  }
  return (
    <div className="highlight" onClick={handleHighlightClick}>
      {renderhighlightLogo()}
      {renderhighlightInfo()}
    </div>
  );
};

export default Highlight;

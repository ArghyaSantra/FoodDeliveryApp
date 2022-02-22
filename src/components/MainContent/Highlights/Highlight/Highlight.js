import React from "react";
import { useDispatch } from "react-redux";
import "./highlight.css";
import { changeHighlight } from "../../../../Redux/actions";

const Highlight = ({ details }) => {
  const { title, iconClass, options } = details;
  const dispatch = useDispatch();
  return (
    <div className="highlight" onClick={() => dispatch(changeHighlight(title))}>
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

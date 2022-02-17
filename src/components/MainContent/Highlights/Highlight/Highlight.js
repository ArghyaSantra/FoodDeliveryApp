import React, { Component } from "react";
import AppContext from "../../../../Context";
import { getClassNameBasedOnTheme } from "../../../../utilities/themeRelatedUtils";
import ErrorBoundary from "../../../errorBoundary/ErrorBoundary";
import "./highlight.css";

export class Highlight extends Component {
  constructor(props) {
    super(props);
    this.details = this.props.details;
  }

  static contextType = AppContext;

  render() {
    const { currentTheme } = this.context;
    const { iconClass, title, options } = this.details;
    return (
      <div
        className={getClassNameBasedOnTheme(currentTheme, "highlight")}
        onClick={() => this.props.highlightClicked(title)}
      >
        <span className="highlightLogo">
          <i class={iconClass}></i>
        </span>
        <span className="highlightInfo">
          <span>{title}</span>
          <span className="highlightInfoOptions">{options}</span>
        </span>
      </div>
    );
  }
}

export default Highlight;

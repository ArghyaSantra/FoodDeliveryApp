import React, { Component } from "react";
import ErrorBoundary from "../../../errorBoundary/ErrorBoundary";
import "./highlight.css";

export class Highlight extends Component {
  constructor(props) {
    super(props);
    this.details = this.props.details;
  }
  render() {
    return (
      <div
        className="highlight"
        onClick={() => this.props.highlightClicked(this.details.title)}
      >
        <span className="highlightLogo">
          <i class={this.details.iconClass}></i>
        </span>
        <span className="highlightInfo">
          <span>{this.details.title}</span>
          <span className="highlightInfoOptions">{this.details.options}</span>
        </span>
      </div>
    );
  }
}

export default Highlight;

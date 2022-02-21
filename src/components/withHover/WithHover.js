import React, { Component } from "react";

const WithHover = (OriginalComponent) => {
  class NewComponent extends Component {
    state = {};
    hoverEffect = () => {};

    render() {
      return <OriginalComponent withHover={this.hoverEffect} />;
    }
  }
  return NewComponent;
};

export default WithHover;

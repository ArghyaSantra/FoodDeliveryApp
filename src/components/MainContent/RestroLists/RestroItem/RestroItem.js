import React, { Component } from "react";
import AppContext from "../../../../Context";
import GenericCardItem from "../../../genericCardItem";
import "./restroItem.css";

class RestroItem extends Component {
  constructor(props) {
    super(props);
  }

  static contextType = AppContext;

  restroClicked = (restro) => {
    const { currentRestro, changeCurrentRestro } = this.context;
    changeCurrentRestro(restro);
    this.props.restroClicked(restro);
  };
  render() {
    return (
      <GenericCardItem
        details={this.props.details}
        onClickEvent={this.restroClicked}
      />
    );
  }
}

export default RestroItem;

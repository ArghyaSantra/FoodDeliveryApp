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
    const { restroClicked } = this.props;
    const { currentRestro, changeCurrentRestro } = this.context;
    changeCurrentRestro(restro);
    restroClicked(restro);
  };
  render() {
    const { details, renderAdditionalInfo } = this.props;
    return (
      <GenericCardItem
        details={details}
        onClickEvent={this.restroClicked}
        renderAdditionalInfo={renderAdditionalInfo}
      />
    );
  }
}

export default RestroItem;

import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import "./deliveryDetails.css";
import AppContext from "../../../Context";

class DeliveryDetails extends Component {
  eventHandler = (event) => {
    const { name, value } = event.target;
    const { changeCurrentAddress } = this.context;
    changeCurrentAddress(name, value);
  };

  static contextType = AppContext;

  renderTextField(name, label) {
    return (
      <TextField
        style={{ backgroundColor: "white" }}
        id="outlined-basic"
        name={name}
        label={label}
        variant="outlined"
        onChange={this.eventHandler}
      />
    );
  }
  render() {
    return (
      <div className="delivery-details-parent">
        {this.renderTextField("address-txtfield", "Address")}
        {this.renderTextField("flat-txtfield", "Door/Flat No.")}
        {this.renderTextField("landmark-txtfield", "Landmark")}
      </div>
    );
  }
}

export default DeliveryDetails;

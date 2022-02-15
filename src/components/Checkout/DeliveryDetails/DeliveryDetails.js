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

  render() {
    return (
      <div className="delivery-details-parent">
        <TextField
          id="outlined-basic"
          name="address-txtfield"
          label="Address"
          variant="outlined"
          onChange={this.eventHandler}
        />
        <TextField
          id="outlined-basic"
          name="flat-txtfield"
          label="Door/Flat No."
          variant="outlined"
          onChange={this.eventHandler}
        />
        <TextField
          id="outlined-basic"
          name="landmark-txtfield"
          label="Landmark"
          variant="outlined"
          onChange={this.eventHandler}
        />
      </div>
    );
  }
}

export default DeliveryDetails;

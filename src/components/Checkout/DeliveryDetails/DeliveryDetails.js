import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddressBtn from "./AddressBtn";

import "./DeliveryDetails.css";

export class DeliveryDetails extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="delivery-details-parent">
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Door/Flat No."
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Landmark" variant="outlined" />
        <div className="checkout-btn-group">
          <AddressBtn name="Home" />
          <AddressBtn name="Work" />
          <AddressBtn name="Others" />
        </div>
      </div>
    );
  }
}

export default DeliveryDetails;

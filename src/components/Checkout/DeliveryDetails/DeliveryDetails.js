import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import "./deliveryDetails.css";

const DeliveryDetails = ({ getAddress }) => {
  const eventHandler = (event) => {
    let { name, value } = event.target;
    getAddress({ name, value });
  };
  return (
    <div className="delivery-details-parent">
      <TextField
        id="outlined-basic"
        name="address-txtfield"
        label="Address"
        variant="outlined"
        onChange={eventHandler}
      />
      <TextField
        id="outlined-basic"
        name="flat-txtfield"
        label="Door/Flat No."
        variant="outlined"
        onChange={eventHandler}
      />
      <TextField
        id="outlined-basic"
        name="landmark-txtfield"
        label="Landmark"
        variant="outlined"
        onChange={eventHandler}
      />
    </div>
  );
};

export default DeliveryDetails;

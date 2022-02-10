import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddressBtn from "./AddressBtn";

import "./DeliveryDetails.css";

const DeliveryDetails = ({ getAddress }) => {
  return (
    <div className="delivery-details-parent">
      <TextField
        id="outlined-basic"
        name="address-txtfield"
        label="Address"
        variant="outlined"
        onChange={(event) => {
          let { name, value } = event.target;
          getAddress({ name, value });
        }}
      />
      <TextField
        id="outlined-basic"
        name="flat-txtfield"
        label="Door/Flat No."
        variant="outlined"
        onChange={(event) => {
          let { name, value } = event.target;
          getAddress({ name, value });
        }}
      />
      <TextField
        id="outlined-basic"
        name="landmark-txtfield"
        label="Landmark"
        variant="outlined"
        onChange={(event) => {
          let { name, value } = event.target;
          getAddress({ name, value });
        }}
      />
      {/* <div className="checkout-btn-group">
          <AddressBtn name="Home" />
          <AddressBtn name="Work" />
          <AddressBtn name="Others" />
    </div>*/}
    </div>
  );
};

export default DeliveryDetails;

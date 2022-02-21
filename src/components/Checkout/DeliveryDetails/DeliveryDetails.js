import React, { Component, useContext } from "react";
import TextField from "@material-ui/core/TextField";

import "./deliveryDetails.css";
import AddressContext from "../../../Context/AddressContext";

const DeliveryDetails = () => {
  const context = useContext(AddressContext);
  function eventHandler(event) {
    const { name, value } = event.target;
    const { changeCurrentAddress } = context;
    changeCurrentAddress(name, value);
  }

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

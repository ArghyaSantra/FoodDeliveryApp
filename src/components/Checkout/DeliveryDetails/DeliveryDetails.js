import React from "react";
import TextField from "@material-ui/core/TextField";

import "./deliveryDetails.css";
import { changeCurrentAddress } from "./deliveryDetails.Helper";
import { useDispatch, useSelector } from "react-redux";
import { changeAddressDetails } from "../../../Redux/actions";

const DeliveryDetails = () => {
  const currentAddress = useSelector((state) => state.address.currentAddress);
  const dispatch = useDispatch();

  const eventHandler = (event) => {
    const { name, value } = event.target;
    const updatedAddress = changeCurrentAddress(currentAddress, name, value);
    dispatch(changeAddressDetails(updatedAddress));
  };

  function renderTxtField(txtField, label) {
    return (
      <TextField
        id="outlined-basic"
        name={txtField}
        label={label}
        variant="outlined"
        onChange={eventHandler}
      />
    );
  }
  return (
    <div className="deliveryDetailsParent">
      {renderTxtField("address-txtfield", "Address")}
      {renderTxtField("flat-txtfield", "Door/Flat No.")}
      {renderTxtField("landmark-txtfield", "Landmark")}
    </div>
  );
};

export default DeliveryDetails;

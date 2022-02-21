import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";

import "./deliveryDetails.css";
import AddressContext from "../../../Context/AddressContext";

const DeliveryDetails = () => {
  const context = useContext(AddressContext);
  const eventHandler = (event) => {
    const { name, value } = event.target;
    const { changeCurrentAddress } = context;
    changeCurrentAddress(name, value);
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

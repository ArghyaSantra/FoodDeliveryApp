import React, { useEffect } from "react";
import "./RestroDetailList.css";
import Button from "@material-ui/core/Button";

function RestroDetailList({ id, details, dishClicked }) {
  return (
    <div className="restrodetaillist">
      <div className="restrodetaillist-info">
        <p>{details.Name}</p>
        <p>{details.Price}</p>
        <p>{details.Description}</p>
      </div>
      <div className="restrodetaillist-image">
        <img className="dish-pic" src={details.Pic_Id} />
        <Button
          variant="contained"
          color="tertiary"
          onClick={() => {
            //console.log(JSON.stringify(details.Name));
            dishClicked(details);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default RestroDetailList;

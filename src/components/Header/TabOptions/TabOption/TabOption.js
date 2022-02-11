import React, { Component } from "react";
import "./tabOption.css";

const TabOption = ({ details }) => {
  return (
    <div className="tabOption">
      <span className="tabIcon">
        <i class={details.iconClass}></i>
      </span>
      <span className="tabName">{details.name}</span>
    </div>
  );
};

export default TabOption;

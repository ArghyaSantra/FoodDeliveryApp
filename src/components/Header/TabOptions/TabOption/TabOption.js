import React, { Component } from "react";
import "./TabOption.css";

const TabOption = ({ details }) => {
  return (
    <div className="tab_option">
      <span className="tab_icon">
        <i class={details.icon_class}></i>
      </span>
      <span className="tab_name">{details.name}</span>
    </div>
  );
};

export default TabOption;

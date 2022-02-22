import React from "react";
import "./tabOption.css";

const TabOption = ({ details }) => {
  const { iconClass, name } = details;
  return (
    <div className="tabOption">
      <span className="tabIcon">
        <i class={iconClass}></i>
      </span>
      <span className="tabName">{name}</span>
    </div>
  );
};

export default TabOption;

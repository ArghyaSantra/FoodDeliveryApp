import React, { Component } from "react";
import "./tabOptions.css";
//Importing componenents
import TabOption from "./tabOption";
//
const TabOptions = ({ tabOptions }) => {
  return (
    <div className="tabOptions">
      {tabOptions.map((option) => {
        return <TabOption key={option.id} details={option} />;
      })}
    </div>
  );
};

export default TabOptions;

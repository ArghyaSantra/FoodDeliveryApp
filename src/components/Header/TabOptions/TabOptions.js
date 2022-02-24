import React from "react";
import "./tabOptions.css";
import TabOption from "./tabOption";
//
const TabOptions = ({ tabOptions }) => {
  function tabOption(option) {
    return <TabOption key={option.id} details={option} />;
  }

  function renderTabOptions() {
    return <div className="tabOptions">{tabOptions.map(tabOption)}</div>;
  }
  return renderTabOptions();
};

export default TabOptions;

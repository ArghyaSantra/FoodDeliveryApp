import React, { Component } from "react";
import "./TabOptions.css";
//Importing componenents
import TabOption from "./TabOption";
//
const TabOptions = () => {
  const options = [
    {
      name: "Search",
      id: 1,
      icon_class: "fi fi-rr-search",
    },
    {
      name: "Offers",
      id: 2,
      icon_class: "fi fi-rr-ticket",
    },
    {
      name: "Sign In",
      id: 3,
      icon_class: "fi fi-rr-user",
    },
    {
      name: "Cart",
      id: 4,
      icon_class: "fi fi-rr-shopping-cart",
    },
  ];
  return (
    <div className="tab_options">
      {options.map((option) => {
        console.log("option=>" + JSON.stringify(option));
        return <TabOption key={option.id} details={option} />;
      })}
    </div>
  );
};

export default TabOptions;

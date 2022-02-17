import React, { Component } from "react";
import "./bannerItem.css";
import { backGroundStyleBuilder } from "./BannerItem.Helper";

const BannerItem = ({ details }) => {
  const { picId, bannerText, bannerUnderline } = details;
  return (
    <div className="bannerItem" style={backGroundStyleBuilder(picId)}>
      <div className="bannerDetails">
        <span className="bannerText">{bannerText}</span>
        <span className="bannerUnderline">{bannerUnderline}</span>
      </div>
    </div>
  );
};

export default BannerItem;

import React, { Component } from "react";
import "./bannerItem.css";
import { backGroundStyleBuilder } from "./BannerItem.Helper";

const BannerItem = ({ details }) => {
  const { picId, bannerText, bannerUnderline } = details;
  return (
    <div className="banneritem" style={backGroundStyleBuilder(picId)}>
      <div className="banner-details">
        <span className="banner-text">{bannerText}</span>
        <span className="banner-underline">{bannerUnderline}</span>
      </div>
    </div>
  );
};

export default BannerItem;

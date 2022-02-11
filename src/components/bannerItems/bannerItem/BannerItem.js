import React, { Component } from "react";
import { backGroundStyleBuilder } from "./index";
import "./bannerItem.css";

const BannerItem = ({ details }) => {
  return (
    <div className="banneritem" style={backGroundStyleBuilder(details.pic_id)}>
      <div className="banner-details">
        <span className="banner-text">{details.banner_text}</span>
        <span className="banner-underline">{details.banner_underline}</span>
      </div>
    </div>
  );
};

export default BannerItem;

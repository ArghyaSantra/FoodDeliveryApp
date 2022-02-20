import React, { Component, useEffect, useState } from "react";
import BannerItem from "./bannerItem";
import _ from "lodash";
import "./bannerItems.css";
import { getBannerItems } from "./bannerItems.Helper";

const BannerItems = () => {
  const [bannerItems, setBannerItems] = useState();

  useEffect(() => {
    getBannerItems().then((BannerResponse) => {
      setBannerItems(BannerResponse);
    });
  }, []);

  const renderBannerItems = ({ id, details }) => {
    return <BannerItem key={id} details={details} />;
  };

  return (
    <div className="bannerItems">{_.map(bannerItems, renderBannerItems)}</div>
  );
};

export default BannerItems;

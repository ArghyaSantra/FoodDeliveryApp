import React, { useEffect, useState } from "react";
import BannerItem from "./bannerItem";
import _ from "lodash";
import "./bannerItems.css";
import { getBannerItems } from "./bannerItems.Helper";
import useLoader from "../customHooks/useLoader";

const BannerItems = () => {
  /*const [bannerItems, setBannerItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBannerItems().then((state) => {
      storeBannerItems(state);
      setIsLoading(false);
    });
  }, []);*/

  const { data, isLoading } = useLoader(getBannerItems);
  const bannerItems = data;

  const renderBannerItems = ({ id, details }) => {
    return <BannerItem key={id} details={details} />;
  };

  function properLoading(isLoading) {
    if (isLoading) {
      return (
        <div className="bannerItems">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="bannerItems">
          {_.map(bannerItems, renderBannerItems)}
        </div>
      );
    }
  }

  return properLoading(isLoading);
};

export default BannerItems;

import React, { Component } from "react";
import BannerItem from "./bannerItem";
import _ from "lodash";
import "./bannerItems.css";
import { getBannerItems } from "./bannerItems.Helper";
import AppContext from "../../Context";
import { getClassNameBasedOnTheme } from "../../utilities/themeRelatedUtils";

export class BannerItems extends Component {
  state = {
    bannerItems: [],
  };

  static contextType = AppContext;

  componentDidMount() {
    getBannerItems().then((BannerResponse) => {
      this.setState({ bannerItems: BannerResponse });
    });
  }

  renderBannerItems = ({ id, details }) => {
    return <BannerItem key={id} details={details} />;
  };

  render() {
    const { currentTheme } = this.context;
    const { bannerItems } = this.state;
    return (
      <div className={getClassNameBasedOnTheme(currentTheme, "bannerItems")}>
        {_.map(bannerItems, this.renderBannerItems)}
      </div>
    );
  }
}

export default BannerItems;

import React, { Component } from "react";
import BannerItem from "./bannerItem";
import _ from "lodash";
import "./bannerItems.css";
import { getBannerItems } from "./bannerItems.Helper";

export class BannerItems extends Component {
  state = {
    bannerItems: [],
  };

  componentDidMount() {
    getBannerItems().then((BannerResponse) => {
      this.setState({ bannerItems: BannerResponse });
    });
  }

  renderBannerItems = ({ id, details }) => {
    return <BannerItem key={id} details={details} />;
  };

  render() {
    return (
      <div className="bannerItems">
        {_.map(this.state.bannerItems, this.renderBannerItems)}
      </div>
    );
  }
}

export default BannerItems;

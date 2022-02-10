import React, { Component } from "react";
import BannerItem from "./BannerItem";
import _ from "lodash";
import { getBannerItems } from "../../HomePageDummyAPISetup";
import "./BannerItems.css";

export class BannerItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banneritems: [],
    };
  }

  componentDidMount = () => {
    getBannerItems().then((BannerResponse) => {
      this.setState({ banneritems: BannerResponse });
    });
  };

  render() {
    return (
      <div className="banner_items">
        {_.map(this.state.banneritems, (banner_item) => {
          return (
            <BannerItem key={banner_item.id} details={banner_item.details} />
          );
        })}
      </div>
    );
  }
}

export default BannerItems;

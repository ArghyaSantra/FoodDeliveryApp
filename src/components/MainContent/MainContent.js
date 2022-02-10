import React, { Component } from "react";
import Highlights from "./Highlights";
import RestroLists from "./RestroLists";
import "./MainContent.css";
import { getHighlightsList, getRestroList } from "../HomePageDummyAPISetup";

export class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restrolist: [],
      highlights: [],
    };
  }

  componentDidMount() {
    getRestroList().then((RestroResponse) => {
      getHighlightsList().then((HighlightsResponse) => {
        this.setState({
          highlights: HighlightsResponse,
          restrolist: RestroResponse,
        });
      });
    });
  }
  restroClicked = (restro) => {
    console.log(restro);
    this.props.restroClicked(restro);
  };

  render() {
    return (
      <div className="maincontent">
        <div className="highlights">
          <Highlights highlights={this.state.highlights} />
        </div>
        <div className="restro-lists">
          <RestroLists
            restroClicked={this.restroClicked}
            restroList={this.state.restrolist}
          />
          <div className="more-options">
            More Options<i class="fi fi-rr-arrow-right arrow-right"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;

import React, { Component } from "react";
import Highlights from "./highlights";
import RestroLists from "./restroLists";
import "./mainContent.css";
import { getHighlightsList } from "./highlights/highlight/highights.Helper";
import { getRestroList } from "./restroLists/restroLists.Helper";

export class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restrolist: [],
      highlights: [],
      hightlightPicked: null,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    Promise.all([getRestroList(), getHighlightsList()]).then((values) => {
      this.setState({
        highlights: values[1],
        restrolist: values[0],
      });
    });
  }
  restroClicked = (restro) => {
    console.log(restro);
    this.props.restroClicked(restro);
  };

  highlightClicked = (highlightName) => {
    this.setState({ ...this.state, hightlightPicked: highlightName });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.hightlightPicked &&
      prevState.hightlightPicked !== this.state.hightlightPicked
    ) {
      getRestroList(this.state.hightlightPicked).then((values) => {
        this.setState({ ...this.state, restrolist: values });
      });
    }
  }

  render() {
    console.log("render");
    return (
      <div className="mainContent">
        <div className="highLights">
          <Highlights
            highlights={this.state.highlights}
            highlightClicked={this.highlightClicked}
          />
        </div>
        <div className="restroLists">
          <RestroLists
            restroClicked={this.restroClicked}
            restroList={this.state.restrolist}
          />
        </div>
      </div>
    );
  }
}

export default MainContent;

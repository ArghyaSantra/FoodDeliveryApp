import React, { Component } from "react";
import Highlights from "./highlights";
import RestroLists from "./restroLists";
import "./mainContent.css";
import { getHighlightsList } from "./highlights/highlight/highights.Helper";
import { getRestroList } from "./restroLists/restroLists.Helper";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppContext from "../../Context";
import { isHighlightChanged } from "./mainContent.Helper";
import { getClassNameBasedOnTheme } from "../../utilities/themeRelatedUtils";

export class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restrolist: [],
      highlights: [],
      hightlightPicked: null,
    };
  }

  static contextType = AppContext;

  componentDidMount() {
    Promise.all([getRestroList(), getHighlightsList()]).then((values) => {
      this.setState({
        highlights: values[1],
        restrolist: values[0],
      });
    });
  }

  restroClicked = (restro) => {
    this.props.restroClicked(restro);
  };

  highlightClicked = (highlightName) => {
    this.setState({ hightlightPicked: highlightName });
  };

  componentDidUpdate(prevProps, prevState) {
    const { hightlightPicked } = this.state;
    if (isHighlightChanged(this.state, prevState)) {
      getRestroList(hightlightPicked).then((values) => {
        console.log(values);
        this.setState({ restrolist: values });
      });
    }
  }

  render() {
    const { currentTheme } = this.context;
    const { highlights, restrolist } = this.state;
    return (
      <div className={getClassNameBasedOnTheme(currentTheme, "mainContent")}>
        <div className="highLights">
          <ErrorBoundary>
            <Highlights
              highlights={highlights}
              highlightClicked={this.highlightClicked}
            />
          </ErrorBoundary>
        </div>
        <div className={getClassNameBasedOnTheme(currentTheme, "restroLists")}>
          <RestroLists
            restroClicked={this.restroClicked}
            restroList={restrolist}
          />
        </div>
      </div>
    );
  }
}

export default MainContent;

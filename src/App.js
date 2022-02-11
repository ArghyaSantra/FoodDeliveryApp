import "./App.css";

//Importing Components
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import RestroPage from "./components/restroPage";
import { Component } from "react";
import BannerItems from "./components/bannerItems";

class App extends Component {
  state = {
    restroClickedFlag: false,
  };

  restroClicked = (restro) => {
    if (restro) {
      this.setState({ restroClickedFlag: true });
    }
  };

  renderHeader() {
    return <Header />;
  }

  renderRestroDetailsAndHighlights() {
    return (
      <>
        <BannerItems />
        <MainContent restroClicked={this.restroClicked} />
        <Footer />
      </>
    );
  }

  renderRestroDishesPage() {
    {
      return <RestroPage />;
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {!this.state.restroClickedFlag &&
          this.renderRestroDetailsAndHighlights()}
        {this.state.restroClickedFlag && this.renderRestroDishesPage()}
      </div>
    );
  }
}

export default App;

import "./App.css";

//Importing Components
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import RestroPage from "./components/restroPage";
import { Component } from "react";
import BannerItems from "./components/bannerItems";
import { AppProvider } from "./Context/AppContext";

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
    const { currentRestro, changeCurrentRestro } = this.context;
    return (
      <div className="App">
        <AppProvider>
          {this.renderHeader()}
          {this.state.restroClickedFlag
            ? this.renderRestroDishesPage()
            : this.renderRestroDetailsAndHighlights()}
        </AppProvider>
      </div>
    );
  }
}

export default App;

import "./App.css";

//Importing Components
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import RestroPage from "./components/restroPage";
import { Component } from "react";
import BannerItems from "./components/bannerItems";
import { AppProvider } from "./Context/AppContext";
import { toggleTheme } from "./utilities/themeRelatedUtils";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  Redirect,
} from "react-router-dom";
import history from "./history";
import Checkout from "./components/checkout";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restroClickedFlag: false,
      currentTheme: "light",
    };
  }

  restroClicked = (restro) => {
    /*if (restro) {
      this.setState({ restroClickedFlag: true });
    }*/
    history.push("/restaurants/1");
  };

  changeTheme = () => {
    const { currentTheme } = this.state;
    const updatedTheme = toggleTheme(currentTheme);
    this.setState({ currentTheme: updatedTheme });
  };

  renderHeader() {
    return <Header changeTheme={this.changeTheme} />;
  }

  renderRestroDetailsAndHighlights() {
    const { currentTheme } = this.state;
    return (
      <>
        <BannerItems />
        <MainContent
          restroClicked={this.restroClicked}
          currentTheme={currentTheme}
        />
      </>
    );
  }

  renderFooter() {
    return <Footer />;
  }

  renderRestroDishesPage() {
    {
      return <RestroPage />;
    }
  }

  render() {
    const { currentRestro, changeCurrentRestro } = this.context;
    return (
      <Router history={history}>
        <div className="App">
          <AppProvider>
            {this.renderHeader()}
            <Routes>
              {this.state.restroClickedFlag ? (
                <Route
                  path="restaurants/1"
                  element={this.renderRestroDishesPage()}
                ></Route>
              ) : (
                <Route
                  path="/"
                  element={this.renderRestroDetailsAndHighlights()}
                ></Route>
              )}
              <Route path="checkout" element={<Checkout />}></Route>
              <Route path="footer" element={this.renderFooter()}></Route>
            </Routes>
          </AppProvider>
        </div>
      </Router>
    );
  }
}

export default App;

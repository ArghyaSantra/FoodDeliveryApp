import logo from "./logo.svg";
import "./App.css";

//Importing Components
import Header from "./components/Header";
import BannerItems from "./components/Banner/BannerItems";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import RestroPage from "./components/RestroPage";
import { Component } from "react";
import CartCounterButton from "./components/CartCounterButton/CartCounterButton";
import Checkout from "./components/Checkout/Checkout";

//

class App extends Component {
  constructor() {
    super();
    this.state = {
      restroClickedFlag: false,
    };
  }

  restroClicked = (restro) => {
    if (restro) {
      this.setState({ restroClickedFlag: true });
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.restroClickedFlag && (
          <>
            <BannerItems />
            <MainContent restroClicked={this.restroClicked} />
            <Footer />
          </>
        )}
        {this.state.restroClickedFlag && <RestroPage />}
        {/*Comments*/}
      </div>
    );
  }
}

export default App;

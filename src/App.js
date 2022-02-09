import logo from "./logo.svg";
import "./App.css";

//Importing Components
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import RestroPage from "./components/RestroPage/RestroPage";
import { Component } from "react";
import CartCounterButton from "./components/CartCounterButton/CartCounterButton";
import DeliveryDetails from "./components/Checkout/DeliveryDetails/DeliveryDetails";
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
            <Banner />
            <MainContent restroClicked={this.restroClicked} />
            <Footer />
          </>
        )}
        {this.state.restroClickedFlag && <RestroPage />}
        {/*<DeliveryDetails />*/}
      </div>
    );
  }
}

export default App;

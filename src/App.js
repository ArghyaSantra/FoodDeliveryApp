import "./App.css";

//Importing Components
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import RestroPage from "./components/restroPage";
import { useContext } from "react";
import BannerItems from "./components/bannerItems";
import { AppProvider } from "./Context/AppContext";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Checkout from "./components/checkout";
import OrderConfirmation from "./components/orderConfirmation";
import { useSelector } from "react-redux";
import CartCounterButton from "./components/cartCounterButton/CartCounterButton";

const App = () => {
  //const restroChosen = useSelector((state) => state.selectRestro.restroChosen);
  //console.log(useSelector((state) => state));

  function renderHeader() {
    return <Header />;
  }

  function renderRestroDetailsAndHighlights() {
    return (
      <>
        <BannerItems />
        <MainContent />
      </>
    );
  }

  function renderRestroDishesPage() {
    {
      return <RestroPage />;
    }
  }

  function renderCheckout() {
    return <Checkout />;
  }

  function renderOrderConfirmation() {
    return (
      <div className="orderConfirmationMain">
        <OrderConfirmation />
      </div>
    );
  }

  function renderFooter() {
    return <Footer />;
  }

  return (
    <div className="App">
      {renderHeader()}
      <Routes>
        <Route
          path="/restro/:restroId"
          element={renderRestroDishesPage()}
        ></Route>
        <Route path="/" element={<Navigate replace to="/restro" />}></Route>
        <Route
          path="/restro"
          element={renderRestroDetailsAndHighlights()}
        ></Route>
        <Route path="/checkout" element={renderCheckout()}></Route>
        <Route
          path="/orderConfirmation"
          element={renderOrderConfirmation()}
        ></Route>
      </Routes>
      {renderFooter()}
    </div>
  );
};

export default App;

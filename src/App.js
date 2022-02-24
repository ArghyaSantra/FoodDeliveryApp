import "./App.css";

//Importing Components
import Header from "./components/header";
import Footer from "./components/footer";
import RestroDishesPage from "./components/restroDishesPage";
import { Routes, Route, Navigate } from "react-router-dom";
import Checkout from "./components/checkout";
import OrderConfirmation from "./components/orderConfirmation";
import LandingPage from "./components/landingPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/restro/:highlight/:restroId"
          element={<RestroDishesPage />}
        ></Route>
        <Route path="/" element={<Navigate replace to="/restro" />}></Route>
        <Route path="/restro" element={<LandingPage />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="/orderConfirmation"
          element={<OrderConfirmation />}
        ></Route>
      </Routes>
      {<Footer />}
    </div>
  );
};

export default App;

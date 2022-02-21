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
import CartContext from "./Context/CartContext";
import AddressContext from "./Context/AddressContext";
import CheckoutBtnContext from "./Context/CheckoutBtnContext";
import OrderConfirmation from "./components/orderConfirmation";

const App = () => {
  /*Navigation*/
  const navigate = useNavigate();
  /*Navigation*/

  /*Multiple Context*/
  const cartContext = useContext(CartContext);
  const addressContext = useContext(AddressContext);
  const checkoutBtnContext = useContext(CheckoutBtnContext);
  /*Multiple Context*/

  const restroClicked = (restro) => {
    navigate(`restro/${restro}`);
  };

  function renderHeader() {
    return <Header />;
  }

  function renderRestroDetailsAndHighlights() {
    return (
      <>
        <BannerItems />
        <MainContent restroClicked={restroClicked} />
      </>
    );
  }

  function renderRestroDishesPage() {
    {
      return <RestroPage />;
    }
  }

  function renderCheckout() {
    const { finalCheckoutClicked } = checkoutBtnContext;
    const { cart } = cartContext;
    return (
      <Checkout
        cartDetails={cart}
        finalCheckoutClicked={finalCheckoutClicked}
      />
    );
  }

  function renderOrderConfirmation() {
    const { currentAddress } = addressContext;
    const { cart } = cartContext;
    return (
      <div className="orderConfirmationMain">
        <OrderConfirmation
          residenceDetails={currentAddress}
          cartDetails={cart}
        />
      </div>
    );
  }

  function renderFooter() {
    return <Footer />;
  }
  return (
    <div className="App">
      <AppProvider>
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
      </AppProvider>
    </div>
  );
};

export default App;

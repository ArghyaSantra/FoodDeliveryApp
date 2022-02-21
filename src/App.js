import "./App.css";

//Importing Components
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import RestroPage from "./components/restroPage";
import { useContext, useState } from "react";
import BannerItems from "./components/bannerItems";
import { AppProvider } from "./Context/AppContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Checkout from "./components/checkout";
import CartContext from "./Context/CartContext";
import AddressContext from "./Context/AddressContext";

const App = () => {
  const [restroClickedFlag, setRestroClickedFlag] = useState(false);
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const addressContext = useContext(AddressContext);

  const restroClicked = (restro) => {
    /* if (restro) {
      setRestroClickedFlag(true);
    }*/
    console.log("restroClicked");
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
  function renderFooter() {
    return <Footer />;
  }
  //const { currentRestro, changeCurrentRestro } = this.context;
  return (
    <div className="App">
      <AppProvider>
        {renderHeader()}
        <Routes>
          <Route
            path="/restro/:restroId"
            element={renderRestroDishesPage()}
          ></Route>
          <Route
            path="/restro"
            element={renderRestroDetailsAndHighlights()}
          ></Route>
          <Route
            path="/checkout"
            element={
              <Checkout
                cartDetails={cartContext.cart}
                /*finalCheckoutClicked={this.finalCheckoutClicked}*/
              />
            }
          ></Route>
        </Routes>
        {renderFooter()}
      </AppProvider>
    </div>
  );
};

export default App;

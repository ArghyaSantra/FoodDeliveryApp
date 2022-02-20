import "./App.css";

//Importing Components
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import RestroPage from "./components/restroPage";
import { useState } from "react";
import BannerItems from "./components/bannerItems";
import { AppProvider } from "./Context/AppContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const App = () => {
  const [restroClickedFlag, setRestroClickedFlag] = useState(false);
  const navigate = useNavigate();

  const restroClicked = (restro) => {
    if (restro) {
      setRestroClickedFlag(true);
    }
    navigate("/restro/1");
  };

  function renderHeader() {
    return <Header />;
  }

  function renderRestroDetailsAndHighlights() {
    return (
      <>
        <BannerItems />
        <MainContent restroClicked={restroClicked} />
        <Footer />
      </>
    );
  }

  function renderRestroDishesPage() {
    {
      return <RestroPage />;
    }
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
          <Route path="/checkout" element={<h1>Hello</h1>}></Route>
        </Routes>
      </AppProvider>
    </div>
  );
};

export default App;

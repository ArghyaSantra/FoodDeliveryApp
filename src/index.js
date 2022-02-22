import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import { AddressProvider } from "./Context/AddressContext";
import { CheckoutBtnProvider } from "./Context/CheckoutBtnContext";
import { Provider } from "react-redux";
import { store } from "./Redux";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        {/*<AddressProvider>
        <CartProvider>
      <CheckoutBtnProvider>*/}
        <Provider store={store}>
          <App />
        </Provider>
        {/*</CheckoutBtnProvider>
        </CartProvider>
          </AddressProvider>*/}
      </Router>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { createStore } from "redux";
import { addressDetailsReducer } from "./reducers/addressDetailsReducer";
import { checkoutRelatedReducer } from "./reducers/checkoutRelatedReducer";
import { orderDetailsReducer } from "./reducers/orderDetailsReducer";
import { selectRestroReducer } from "./reducers/selectRestroReducer";
import { combineReducers, applyMiddleware } from "redux";
import { highlightSelectReducer } from "./reducers/highlightSelectReducer";
import { restroDishesReducer } from "./reducers/restroDishesReducer";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  address: addressDetailsReducer,
  checkout: checkoutRelatedReducer,
  orderDetails: orderDetailsReducer,
  selectRestro: selectRestroReducer,
  hightlightSelect: highlightSelectReducer,
  restroDishes: restroDishesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

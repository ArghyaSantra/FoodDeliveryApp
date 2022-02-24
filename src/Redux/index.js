import { createStore } from "redux";
import { addressDetailsReducer } from "./addressDetailsReducer";
import { checkoutRelatedReducer } from "./checkoutRelatedReducer";
import { orderDetailsReducer } from "./orderDetailsReducer";
import { selectRestroReducer } from "./selectRestroReducer";
import { combineReducers, applyMiddleware } from "redux";
import { highlightSelectReducer } from "./highlightSelectReducer";
import { restroDishesReducer } from "./restroDishesReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  address: addressDetailsReducer,
  checkout: checkoutRelatedReducer,
  orderDetails: orderDetailsReducer,
  selectRestro: selectRestroReducer,
  hightlightSelect: highlightSelectReducer,
  restroDishes: restroDishesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

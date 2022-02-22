import { createStore } from "redux";
import { addressDetailsReducer } from "./addressDetailsReducer";
import { checkoutRelatedReducer } from "./checkoutRelatedReducer";
import { orderDetailsReducer } from "./orderDetailsReducer";
import { selectRestroReducer } from "./selectRestroReducer";
import { combineReducers } from "redux";
import { highlightSelectReducer } from "./highlightSelectReducer";

const rootReducer = combineReducers({
  address: addressDetailsReducer,
  checkout: checkoutRelatedReducer,
  orderDetails: orderDetailsReducer,
  selectRestro: selectRestroReducer,
  hightlightSelect: highlightSelectReducer,
});

export const store = createStore(rootReducer);

import {
  SELECT_RESTRO,
  SET_HIGHLIGHTS,
  SET_RESTROS,
  CHANGE_HIGHLIGHT,
  CHANGE_ORDER_DETAILS,
  CHANGE_ADDRESS_DETAILS,
  CHANGE_CHECKOUT_STATUS,
  CHANGE_FINAL_CHECKOUT_STATUS,
  SET_RESTRO_DISHES,
  SEARCH_DISHES,
} from "./actionTypes";

export function selectRestro(restro) {
  return {
    type: SELECT_RESTRO,
    payload: restro,
  };
}

export function setHighlights(listOfHighlights) {
  return {
    type: SET_HIGHLIGHTS,
    payload: listOfHighlights,
  };
}

export function setRestros(listOfRestros) {
  return {
    type: SET_RESTROS,
    payload: listOfRestros,
  };
}

export function changeHighlight(highlight) {
  return {
    type: CHANGE_HIGHLIGHT,
    payload: highlight,
  };
}

export function changeOrderDetails(orderDetails) {
  return {
    type: CHANGE_ORDER_DETAILS,
    payload: orderDetails,
  };
}

export function changeAddressDetails(addressDetails) {
  return {
    type: CHANGE_ADDRESS_DETAILS,
    payload: addressDetails,
  };
}

export function changeCheckoutStatus() {
  return {
    type: CHANGE_CHECKOUT_STATUS,
    payload: "",
  };
}

export function changeFinalCheckoutStatus() {
  return {
    type: CHANGE_FINAL_CHECKOUT_STATUS,
    payload: "",
  };
}

export function setRestroDishes(restroDishes) {
  return {
    type: SET_RESTRO_DISHES,
    payload: restroDishes,
  };
}

export function searchDishes(searchTxt) {
  return {
    type: SEARCH_DISHES,
    payload: searchTxt,
  };
}

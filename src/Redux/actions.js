const SELECT_RESTRO = "SELECT_RESTRO";

export function selectRestro(restro) {
  return {
    type: SELECT_RESTRO,
    payload: restro,
  };
}

const SET_HIGHLIGHTS = "SET_HIGHLIGHTS";

export function setHighlights(listOfHighlights) {
  return {
    type: SET_HIGHLIGHTS,
    payload: listOfHighlights,
  };
}

const SET_RESTROS = "SET_RESTROS";

export function setRestros(listOfRestros) {
  return {
    type: SET_RESTROS,
    payload: listOfRestros,
  };
}

const CHANGE_HIGHLIGHT = "CHANGE_HIGHLIGHT";

export function changeHighlight(highlight) {
  return {
    type: CHANGE_HIGHLIGHT,
    payload: highlight,
  };
}

const CHANGE_ORDER_DETAILS = "CHANGE_ORDER_DETAILS";

export function changeOrderDetails(orderDetails) {
  return {
    type: CHANGE_ORDER_DETAILS,
    payload: orderDetails,
  };
}

const CHANGE_ADDRESS_DETAILS = "CHANGE_ADDRESS_DETAILS";

export function changeAddressDetails(addressDetails) {
  return {
    type: CHANGE_ADDRESS_DETAILS,
    payload: addressDetails,
  };
}

export const CHANGE_CHECKOUT_STATUS = "CHANGE_CHECKOUT_STATUS";

export function changeCheckoutStatus() {
  return {
    type: CHANGE_CHECKOUT_STATUS,
    payload: "",
  };
}

const CHANGE_FINAL_CHECKOUT_STATUS = "CHANGE_FINAL_CHECKOUT_STATUS";

export function changeFinalCheckoutStatus() {
  return {
    type: CHANGE_FINAL_CHECKOUT_STATUS,
    payload: "",
  };
}

const SET_RESTRO_DISHES = "SET_RESTRO_DISHES";

export function setRestroDishes(restroDishes) {
  return {
    type: SET_RESTRO_DISHES,
    payload: restroDishes,
  };
}

const SEARCH_DISHES = "SEARCH_DISHES";

export function searchDishes(searchTxt) {
  return {
    type: SEARCH_DISHES,
    payload: searchTxt,
  };
}

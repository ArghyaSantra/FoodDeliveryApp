const initialState = {
  checkoutClickedFlag: false,
  finalCheckoutClickedFlag: false,
};

export const checkoutRelatedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CHECKOUT_STATUS":
      return {
        ...state,
        checkoutClickedFlag: !state.checkoutClickedFlag,
      };
    case "CHANGE_FINAL_CHECKOUT_STATUS":
      return {
        ...state,
        finalCheckoutClickedFlag: !state.finalCheckoutClickedFlag,
      };
    default:
      return state;
  }
};

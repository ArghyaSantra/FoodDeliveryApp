const initialState = {
  orderDetails: [],
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ORDER_DETAILS":
      return {
        ...state,
        orderDetails: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  currentAddress: {
    firstLine: null,
    secondLine: null,
    thirdLine: null,
  },
};

export const addressDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_ADDRESS_DETAILS":
      return {
        ...state,
        currentAddress: action.payload,
      };
    default:
      return state;
  }
};

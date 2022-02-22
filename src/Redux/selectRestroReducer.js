const initialState = {
  restroChosen: "Kings of Spice",
};

export const selectRestroReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_RESTRO":
      return {
        ...state,
        restroChosen: action.payload,
      };
    default:
      return state;
  }
};

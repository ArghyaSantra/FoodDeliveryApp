const initialState = {
  restroChosen: {},
  restroList: [],
};

export const selectRestroReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESTROS":
      return {
        ...state,
        restroList: action.payload,
      };
    case "SELECT_RESTRO":
      return {
        ...state,
        restroChosen: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  listOfSearchedDishes: [],
  listOfRestroDishes: [],
};

export const restroDishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESTRO_DISHES":
      return {
        ...state,
        listOfRestroDishes: action.payload,
      };
    case "SEARCH_DISHES":
      return {
        ...state,
        listOfSearchedDishes: action.payload,
      };
    default:
      return state;
  }
};

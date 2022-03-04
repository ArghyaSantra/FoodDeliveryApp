const initialState = {
  highlights: [],
  highlightChosen: "",
};

export const highlightSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_HIGHLIGHT":
      return {
        ...state,
        highlightChosen: action.payload,
      };
    case "SET_HIGHLIGHTS":
      return {
        ...state,
        highlights: action.payload,
      };
    default:
      return state;
  }
};

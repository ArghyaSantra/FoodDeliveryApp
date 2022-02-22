const initialState = {
  highlightChosen: "",
};

export const highlightSelectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_HIGHLIGHT":
      return {
        ...state,
        highlightChosen: action.payload,
      };
    default:
      return state;
  }
};

import { createSelector } from "reselect";

export const getHighlightListSelector = createSelector(
  (state) => state.hightlightSelect.highlights,
  (state) => {
    return state;
  }
);

export const chosenHighlightSelector = (state) =>
  state.hightlightSelect.highlightChosen;

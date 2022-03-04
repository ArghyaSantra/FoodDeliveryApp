import { createSelector } from "reselect";

export const getRestrosSelector = (state) => state.selectRestro.restroList;

export const getChosenRestroSelector = createSelector(
  (state) => state.selectRestro.restroChosen,
  (state) => state
);

export function isHighlightChanged(currentState, prevState) {
  if (
    currentState.hightlightPicked &&
    prevState.hightlightPicked !== currentState.hightlightPicked
  ) {
    return true;
  }
}

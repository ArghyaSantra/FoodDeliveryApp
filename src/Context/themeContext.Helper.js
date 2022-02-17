export function toggleTheme(currentTheme) {
  let theme;
  if (currentTheme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  return theme;
}

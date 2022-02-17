export default function toggleThemeInHeader(theme) {
  if (theme === "light") {
    return "dark";
  } else {
    return "light";
  }
}

export function getNameOnThemeButton(currentTheme) {
  const btnName = currentTheme === "light" ? "Dark Theme" : "Light Theme";
  return btnName;
}

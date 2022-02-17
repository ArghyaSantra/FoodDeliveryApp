export function getClassNameBasedOnTheme(theme, className) {
  let updatedClassName;
  if (theme === "light") {
    updatedClassName = className;
  } else {
    updatedClassName = className + "Dark";
  }
  return updatedClassName;
}

export function toggleTheme(theme) {
  if (theme === "light") {
    return "dark";
  } else {
    return "light";
  }
}

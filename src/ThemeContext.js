import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prev) => {
      document.documentElement.style.setProperty(
        "--banner-bg-color",
        !prev ? "#051014" : "#D9E5D6"
      );
      document.documentElement.style.setProperty(
        "--bg-color",
        !prev ? "rgb(33, 33, 33)" : "#fffdf3"
      );
      document.documentElement.style.setProperty(
        "--tile-color",
        !prev ? "#2E2F2F" : "#E9F1E7"
      );
      document.documentElement.style.setProperty(
        "--mid-color",
        !prev ? "#ACBDBA" : " #ff8c8c"
      );
      document.documentElement.style.setProperty(
        "--light-color",
        !prev ? "#CDDDDD" : "#2E2F2F"
      );
      return !prev;
    });
  }

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdateContext.Provider value={toggleDarkMode}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

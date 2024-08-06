import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("currentTheme") || "yellow"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("currentTheme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

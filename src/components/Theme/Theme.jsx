//Theme.jsx
import React, { useEffect, useState } from "react";
import ThemeStyled from "./Theme.styled";
import Modal from "../Modal/Modal";

const Theme = ({ closeMenu }) => {
  const themes = ["yellow", "green", "blue", "brown", "pink"];
  const themescolor = ["#fbe9ba", "#cbded3", "#bfd6ea", "#f2c0bd", "#f4c8ba"];
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("currentTheme") || "yellow"
  );

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("currentTheme", currentTheme);
  }, [currentTheme]);

  return (
    <>
      <Modal
        width={120}
        height={80}
        onClose={() => closeMenu(false)}
        top="20%"
        left="52%"
      >
        <ThemeStyled>
          <div className="theme-selector">
            <ul>
              {themes.map((theme, index) => (
                <li
                  key={theme}
                  onClick={() => handleThemeChange(theme)}
                  className={currentTheme === theme ? "active" : ""}
                  style={{ backgroundColor: themescolor[index] }}
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>
        </ThemeStyled>
      </Modal>
    </>
  );
};

export default Theme;

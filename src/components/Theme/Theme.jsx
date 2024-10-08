//Theme.jsx
import React, { useContext } from "react";
import ThemeStyled from "./Theme.styled";
import Modal from "../Modal/Modal";
import { ThemeContext } from "./ThemeContext";

const Theme = ({ closeMenu }) => {
  const themes = ["yellow", "green", "blue", "brown", "pink"];
  const themescolor = ["#fbe9ba", "#cbded3", "#bfd6ea", "#f2c0bd", "#f4c8ba"];
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <Modal
      width={200}
      height={240}
      onClose={() => closeMenu(false)}
      top="36%"
      left="52%"
      border="none"
      background=" rgba(0, 0, 0, 0.05)"
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
  );
};

export default Theme;

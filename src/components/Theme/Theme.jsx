import React, { useEffect, useRef, useState } from "react";
import ThemeStyled from "./Theme.styled";
import Modal from "../Modal/Modal";

const Theme = ({ closeMenu }) => {
  const themes = ["yellow", "green", "blue", "brown", "pink"];
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("currentTheme") || "yellow"
  );

  const menuRef = useRef(null);

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
        top="15%"
        left="52%"
      >
        <ThemeStyled>
          <div className="theme-selector" ref={menuRef}>
            <ul>
              {themes.map((theme) => (
                <li
                  key={theme}
                  onClick={() => handleThemeChange(theme)}
                  className={currentTheme === theme ? "active" : ""}
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

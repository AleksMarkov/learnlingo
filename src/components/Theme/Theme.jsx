import { useState } from "react";
import ThemeStyled from "./Theme.styled";

const colorTheme = ["yellow", "green", "blue", "brown", "pink"];

const Theme = () => {
  const [selectedTheme, setSelectedTheme] = useState("yellow");

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  return (
    <ThemeStyled>
      <div className="theme-selector">
        <select value={selectedTheme} onChange={handleThemeChange}>
          {colorTheme.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
      {/* Additional content based on selected language */}
    </ThemeStyled>
  );
};

export default Theme;

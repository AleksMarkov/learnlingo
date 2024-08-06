//Filter.jsx
import React, { useState } from "react";
import {
  FilterContainer,
  FilterSection,
  FilterLabel,
  FilterLanguagesWrapper,
  FilterLevelWrapper,
  FilterPriceWrapper,
  FilterInput,
  DropdownIcon,
  DropdownMenu,
  DropdownItem,
} from "./Filter.styled";
import ChevronDown from "../../assets/svg/chevron-down.svg";

const Filter = ({
  languages,
  levels,
  prices,
  selectedLanguage,
  selectedLevel,
  selectedPrice,
  onSelectLanguage,
  onSelectLevel,
  onSelectPrice,
}) => {
  const [isLanguagesDropdownOpen, setIsLanguagesDropdownOpen] = useState(false);
  const [isLevelsDropdownOpen, setIsLevelsDropdownOpen] = useState(false);
  const [isPricesDropdownOpen, setIsPricesDropdownOpen] = useState(false);

  const toggleLanguagesDropdown = () => {
    setIsLanguagesDropdownOpen(!isLanguagesDropdownOpen);
    setIsLevelsDropdownOpen(false);
    setIsPricesDropdownOpen(false);
  };

  const toggleLevelsDropdown = () => {
    setIsLevelsDropdownOpen(!isLevelsDropdownOpen);
    setIsLanguagesDropdownOpen(false);
    setIsPricesDropdownOpen(false);
  };

  const togglePricesDropdown = () => {
    setIsPricesDropdownOpen(!isPricesDropdownOpen);
    setIsLanguagesDropdownOpen(false);
    setIsLevelsDropdownOpen(false);
  };

  const selectLanguage = (language) => {
    onSelectLanguage(language === "All" ? "" : language);
    setIsLanguagesDropdownOpen(false);
  };

  const selectLevel = (level) => {
    onSelectLevel(level === "All" ? "" : level);
    setIsLevelsDropdownOpen(false);
  };

  const selectPrice = (price) => {
    onSelectPrice(price);
    setIsPricesDropdownOpen(false);
  };

  return (
    <FilterContainer>
      <FilterSection>
        <FilterLabel>Languages</FilterLabel>
        <FilterLanguagesWrapper onClick={toggleLanguagesDropdown}>
          <FilterInput>{selectedLanguage || "Select"}</FilterInput>
          <DropdownIcon src={ChevronDown} alt="chevron down" />
          {isLanguagesDropdownOpen && (
            <DropdownMenu>
              {languages.map((language, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => selectLanguage(language)}
                >
                  {language}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </FilterLanguagesWrapper>
      </FilterSection>
      <FilterSection>
        <FilterLabel>Level of knowledge</FilterLabel>
        <FilterLevelWrapper onClick={toggleLevelsDropdown}>
          <FilterInput>{selectedLevel || "Select"}</FilterInput>
          <DropdownIcon src={ChevronDown} alt="chevron down" />
          {isLevelsDropdownOpen && (
            <DropdownMenu>
              {levels.map((level, index) => (
                <DropdownItem key={index} onClick={() => selectLevel(level)}>
                  {level}
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </FilterLevelWrapper>
      </FilterSection>
      <FilterSection>
        <FilterLabel>Price</FilterLabel>
        <FilterPriceWrapper onClick={togglePricesDropdown}>
          <FilterInput>{selectedPrice || "Select"} $</FilterInput>
          <DropdownIcon src={ChevronDown} alt="chevron down" />
          {isPricesDropdownOpen && (
            <DropdownMenu>
              {prices.map((price, index) => (
                <DropdownItem key={index} onClick={() => selectPrice(price)}>
                  {price} $
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </FilterPriceWrapper>
      </FilterSection>
    </FilterContainer>
  );
};

export default Filter;

// Theme.jsx
import styled from "styled-components";

const ThemeStyled = styled.div`
  .theme-selector {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100px; /* Adjust width as needed */

    // border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    select {
      width: 100%;
      padding: 5px;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
  .theme-selector ul li.active {
    font-weight: bold;
    border-bottom: 2px solid currentColor;
  }
`;

export default ThemeStyled;

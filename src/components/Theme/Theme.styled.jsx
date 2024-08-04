import styled from "styled-components";

const ThemeStyled = styled.div`
  .theme-selector {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 200px; /* Adjust width as needed */
    margin: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;

    select {
      width: 100%;
      padding: 5px;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;

export default ThemeStyled;

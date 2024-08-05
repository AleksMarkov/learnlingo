import styled from "styled-components";

const ThemeStyled = styled.div`
  .theme-selector {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin: 5px 0;
      padding: 5px 10px;
      border-radius: 4px;
      transition: transform 0.2s, background-color 0.3s;

      &:hover {
        transform: scale(1.05);
        background-color: lighten(0.1); // Optional lighter hover effect
      }

      &.active {
        font-weight: bold;
        border-bottom: 2px solid currentColor;
      }
    }
  }
`;

export default ThemeStyled;

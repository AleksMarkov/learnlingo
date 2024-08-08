import styled from "styled-components";

const ThemeStyled = styled.div`
  .theme-selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    ul {
      list-style-type: none;
      padding: 10;
      margin: 10;
    }

    li {
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      transition: transform 0.2s, background-color 0.3s;

      &:hover {
        transform: scale(1.05);
        background-color: lighten(0.1);
      }

      &.active {
        font-weight: bold;
        border-bottom: 2px solid currentColor;
      }
    }
  }
`;

export default ThemeStyled;

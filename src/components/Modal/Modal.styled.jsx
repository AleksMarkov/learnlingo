//Modal.styled.jsx
import styled from "styled-components";

export const Opacity = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ $background }) => $background || "rgba(0, 0, 0, 0)"};
  z-index: 9999;
`;

export const Modalcont = styled.div`
  position: fixed;
  top: ${({ $top }) => $top || "50%"};
  left: ${({ $left }) => $left || "50%"};
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  min-height: ${({ $Height }) => ($Height ? `${$Height}px` : "130px")};
  border-radius: 30px;
  border: ${({ $border }) => $border || "none"};
  padding: 32px;
  color: var(--text-color);
  background-color: var(--primary-bg-color);
  z-index: 10000;
  width: ${({ $Width }) => ($Width ? `${$Width}px` : "200px")};

  @media (max-width: 600px) {
    width: 80%;
    padding: 12px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 12px;
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  padding: 0;

  @media screen and (min-width: 1440px) {
    &:hover svg,
    &:focus svg {
      filter: drop-shadow(1px 1px 3px var(--additional-bg-color));
    }
  }
`;

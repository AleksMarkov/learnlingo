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
  // background-color: rgba(0, 0, 0, 0.05);
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
  border-radius: 8px;
  border: 1px solid var(--text-color);
  padding: 12px;
  color: var(--text-color);
  background: var(--additional-bg-color);
  z-index: 10000;
  width: ${({ $Width }) =>
    $Width ? `${$Width}px` : "200px"}; // Set default width if not provided

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  padding: 0;

  @media screen and (min-width: 1440px) {
    &:hover svg,
    &:focus svg {
      filter: drop-shadow(1px 1px 3px var(--additional-bg-color));
    }
  }
`;

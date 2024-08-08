// HeaderPage.styled.jsx
import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1184px;
  height: 48px;
  border: none;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LogoImage = styled.img`
  width: 28px;
  height: 28px;
`;

export const LogoText = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--text-color);
  margin: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const NavLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: var(--text-color);
  background-color: ${(props) =>
    props.active ? "var(--btn-icon-bg)" : "transparent"};
  padding: 8px 16px;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--btn-hover-bg)" : "transparent"};
    cursor: pointer;
  }
`;

export const Registrat = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavLinkRegistr = styled.a`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  margin-right: 8px;
  color: var(--text-color);
  &:hover {
    background-color: var(--additional-bg-color);
    cursor: pointer;
  }
`;

export const RegButton = styled.button`
  width: 166px;
  height: 48px;
  padding: 14px 39px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: var(--primary-bg-color);
  background-color: var(--text-color);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #505458;
  }
`;

export const LoginIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: none;
  stroke: var(--btn-icon-bg);
`;

// HeaderPage.styled.jsx
import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 20px 5%; /* Проценты для резиновой адаптивности */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1440px;
  height: 48px;

  @media (max-width: 840px) {
    width: auto;
    height: auto;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    // justify-content: space-between;
    width: auto;
    height: auto;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 840px) {
    width: auto;
    height: auto;
  }
`;

export const LogoImage = styled.img`
  width: 28px;
  height: 28px;
`;

export const LogoText = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-color);
  margin: 0;

  @media (max-width: 840px) {
    font-size: 1rem;
    width: auto;
    height: auto;
    margin-right: 8px;
  }
  @media (max-width: 762px) {
    font-size: 0.8rem;
    margin-right: 4px;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 840px) {
    gap: 8px;
    width: auto;
    height: auto;
  }
  @media (max-width: 762px) {
    font-size: 0.8rem;
    gap: 4px;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
  }
`;

export const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-color);
  background-color: ${(props) =>
    props.active ? "var(--btn-icon-bg)" : "transparent"};
  padding: 8px 16px;
  border-radius: 8px;

  @media (max-width: 840px) {
    gap: 8px;
    width: auto;
    height: auto;
  }

  @media (max-width: 762px) {
    font-size: 0.8rem;
    gap: 4px;
    padding: 4px 8px;
  }

  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
    gap: 2px;
  }

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
  @media (max-width: 762px) {
    font-size: 0.8rem;
    gap: 4px;
    width: auto;
    height: auto;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
    gap: 2px;
  }
`;

export const NavLinkRegistr = styled.a`
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-color);
  &:hover {
    background-color: var(--additional-bg-color);
    cursor: pointer;
  }
  @media (max-width: 762px) {
    font-size: 0.8rem;
    width: auto;
    height: auto;
  }
  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
  }
`;

export const RegButton = styled.button`
  width: auto;
  height: 48px;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-bg-color);
  background-color: var(--text-color);
  border: none;
  cursor: pointer;

  @media (max-width: 762px) {
    font-size: 0.8rem;
    width: auto;
    height: auto;
    padding: 8px 16px;
  }

  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin-right: 2px;
    padding: 4px 8px;
  }

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

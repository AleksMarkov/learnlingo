// HomePage.styled.jsx
import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-bg-color);
`;

export const Header = styled.header`
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
  gap: 8px; /* Space between logo and text */
`;

export const LogoImage = styled.img`
  width: 28px; /* Set the desired width */
  height: 28px; /* Set the desired height */
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
  //   padding-left: 122px;
`;

export const Registration = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  &:hover {
    background-color: var(--additional-bg-color);
  }
`;

export const NavLinkRegistr = styled.a`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  margin-right: 8px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const LoginImage = styled.img`
  width: 20px; /* Set the desired width */
  height: 20px; /* Set the desired height */
`;

export const RegButton = styled.button`
  //   gap: 8px;
  width: 166px;
  height: 48px;
  padding: 14px 39px 14px 39px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: var(--primary-bg-color);
  background-color: var(--text-color);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #505458;
  }
`;

export const Content = styled.div`
  display: flex;
  //   justify-content: center
  flex-direction: row;
  //   align-items: center;
  //   max-width: 1200px;
  margin: 20px 64px 24px;
  gap: 24px;
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  width: 720px;
  height: 530px;
  border-radius: 30px;
  background-color: var(--additional-bg-color);
`;

export const Title = styled.h1`
  display: block;
  width: 548px;
  height: 112px;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: 98px;
  margin-left: 64px;
  span {
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.02em;
    text-align: left;
    background-color: var(--accent-bg-color);
    border-radius: 10px;
  }
`;

export const SubTitle = styled.p`
  display: block;
  width: 471px;
  height: 66px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-top: 32px;
  margin-left: 64px;
`;

export const GetButton = styled.button`
  width: 267px;
  height: 60px;
  margin-top: 64px;
  margin-left: 64px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  color: var(--text-color);
  background-color: var(--btn-icon-bg);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--btn-hover-bg);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 568px;
  height: 530px;
  border-radius: 30px;
  background-color: var(--additional-bg-color);
`;

export const StatsContainer = styled.div`
  box-sizing: border-box;
  width: 1312px;
  height: 116px;
  border-radius: 30px;
  border: 1.5px dashed var(--btn-icon-bg);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
`;

export const StatBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  text-align: center;
  height: 36px;
`;

export const StatNumber = styled.div`
  font-size: 28px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
`;

export const StatDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
`;
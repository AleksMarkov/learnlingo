// HomePage.styled.jsx
import styled from "styled-components";

export const HomePageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-bg-color);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 64px 24px;
  gap: 24px;
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  height: 530px;
  border-radius: 30px;
  background-color: var(--additional-bg-color);
`;

export const Title = styled.h1`
  width: 548px;
  height: 112px;
  font-size: 48px;
  font-weight: 500;
  line-height: 56px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--text-color);
  margin-top: 98px;
  margin-left: 64px;
  span {
    font-style: italic;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: var(--text-color);
    background-color: var(--accent-bg-color);
    border-radius: 10px;
  }
`;

export const SubTitle = styled.p`
  width: 471px;
  height: 66px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--text-color);
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
  color: var(--text-color);
`;

export const StatDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: var(--text-color);
`;
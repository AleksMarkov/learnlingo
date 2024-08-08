// HomePage.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  HomePageContainer,
  Content,
  TitleContent,
  Title,
  SubTitle,
  GetButton,
  ImageContainer,
  StatsContainer,
  StatBox,
  StatNumber,
  StatDescription,
} from "./HomePage.styled";
import HeaderPage from "../HeaderPage/HeaderPage";
import EmojiYellow from "../../assets/svg/yellow.svg";
import EmojiGreen from "../../assets/svg/green.svg";
import EmojiBlue from "../../assets/svg/blue.svg";
import EmojiBrown from "../../assets/svg/brown.svg";
import EmojiPink from "../../assets/svg/pink.svg";
import { ThemeContext } from "../../components/Theme/ThemeContext";

const HomePage = () => {
  const { currentTheme } = useContext(ThemeContext);

  const getEmojiImage = () => {
    switch (currentTheme) {
      case "yellow":
        return EmojiYellow;
      case "green":
        return EmojiGreen;
      case "blue":
        return EmojiBlue;
      case "brown":
        return EmojiBrown;
      case "pink":
        return EmojiPink;
      default:
        return EmojiYellow;
    }
  };

  return (
    <HomePageContainer>
      <HeaderPage />
      <Content>
        <TitleContent>
          <Title>
            Unlock your potential with the best <span>language</span> tutors
          </Title>
          <SubTitle>
            Embark on an Exciting Language Journey with Expert Language Tutors.
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </SubTitle>
          <Link to="/teachers">
            <GetButton>Get started</GetButton>
          </Link>
        </TitleContent>
        <ImageContainer>
          <img src={getEmojiImage()} alt="Emoji" />
        </ImageContainer>
      </Content>
      <StatsContainer>
        <StatBox>
          <StatNumber>32,000 +</StatNumber>
          <StatDescription>
            Experienced
            <br /> tutors
          </StatDescription>
        </StatBox>
        <StatBox>
          <StatNumber>300,000 +</StatNumber>
          <StatDescription>
            5-star tutor
            <br /> reviews
          </StatDescription>
        </StatBox>
        <StatBox>
          <StatNumber>120 +</StatNumber>
          <StatDescription>
            Subjects
            <br /> taught
          </StatDescription>
        </StatBox>
        <StatBox>
          <StatNumber>200 +</StatNumber>
          <StatDescription>
            Tutor
            <br /> nationalities
          </StatDescription>
        </StatBox>
      </StatsContainer>
    </HomePageContainer>
  );
};

export default HomePage;

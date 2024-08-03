// HomePage.jsx
import React from "react";
import {
  HomePageContainer,
  Header,
  Navigation,
  NavLink,
  NavLinkRegistr,
  Content,
  Title,
  SubTitle,
  GetButton,
  StatsContainer,
  StatBox,
  StatNumber,
  StatDescription,
  ImageContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  Registration,
  TitleContent,
  RegButton,
  LoginImage,
} from "./HomePage.styled";
import Logo from "../../assets/svg/ukraine.svg";
import LoginImg from "../../assets/svg/log-in-01.svg";
import EmojiImage from "../../assets/svg/blockyellow.svg";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Header>
        <LogoContainer>
          <LogoImage src={Logo} alt="LearnLingo Logo" />
          <LogoText>LearnLingo</LogoText>
        </LogoContainer>
        <Navigation>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Teachers</NavLink>
        </Navigation>
        <Registration>
          <LoginImage src={LoginImg} alt="Login icon" />
          <NavLinkRegistr href="#">Log in</NavLinkRegistr>
          <RegButton>Registration</RegButton>
        </Registration>
      </Header>

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
          <GetButton>Get started</GetButton>
        </TitleContent>
        <ImageContainer>
          <img src={EmojiImage} alt="Emoji" />
        </ImageContainer>
      </Content>

      <StatsContainer>
        <StatBox>
          <StatNumber>32,000 +</StatNumber>
          <StatDescription>
            Experienced<br></br> tutors
          </StatDescription>
        </StatBox>
        <StatBox>
          <StatNumber>300,000 +</StatNumber>
          <StatDescription>
            5-star tutor<br></br> reviews
          </StatDescription>
        </StatBox>
        <StatBox>
          <StatNumber>120 +</StatNumber>
          <StatDescription>
            Subjects<br></br> taught
          </StatDescription>
        </StatBox>
        <StatBox>
          <StatNumber>200 +</StatNumber>
          <StatDescription>
            Tutor<br></br> nationalities
          </StatDescription>
        </StatBox>
      </StatsContainer>
    </HomePageContainer>
  );
};

export default HomePage;

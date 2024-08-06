// HeaderPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  LogoContainer,
  LogoImage,
  LogoText,
  Navigation,
  NavLink,
  Registrat,
  NavLinkRegistr,
  RegButton,
  LoginIcon,
} from "./HeaderPage.styled";
import Logo from "../../assets/svg/ukraine.svg";
// import EmojiYellow from "../../assets/svg/yellow.svg";
// import EmojiGreen from "../../assets/svg/green.svg";
// import EmojiBlue from "../../assets/svg/blue.svg";
// import EmojiBrown from "../../assets/svg/brown.svg";
// import EmojiPink from "../../assets/svg/pink.svg";
import Theme from "components/Theme/Theme";
import Login from "components/Login/Login";
import Registration from "components/Registration/Registration";
// import Lesson from "components/Lesson/Lesson";

const HeaderPage = () => {
  const [showTheme, setShowTheme] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [ShowRegistr, setShowRegistr] = useState(false);
  // const [ShowLesson, setShowLesson] = useState(false);
  //   const currentTheme = localStorage.getItem("currentTheme");

  const loginIconRef = useRef(null);

  //   const getEmojiImage = () => {
  //     switch (currentTheme) {
  //       case "yellow":
  //         return EmojiYellow;
  //       case "green":
  //         return EmojiGreen;
  //       case "blue":
  //         return EmojiBlue;
  //       case "brown":
  //         return EmojiBrown;
  //       case "pink":
  //         return EmojiPink;
  //       default:
  //         return EmojiYellow;
  //     }
  //   };

  useEffect(() => {
    if (loginIconRef.current) {
      loginIconRef.current.style.stroke = "var(--btn-icon-bg)";
    }
  }, []);

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={Logo} alt="LearnLingo Logo" />
        <LogoText>LearnLingo</LogoText>
      </LogoContainer>
      <Navigation>
        <Link to="/">
          <NavLink>
            {/* <NavLink onClick={() => setShowLesson(true)}> */}
            {/* {ShowLesson && <Lesson closeMenu={() => setShowLesson(false)} />} */}
            Home
          </NavLink>
        </Link>
        <Link to="/teachers">
          <NavLink>Teachers</NavLink>
        </Link>
        <NavLink onClick={() => setShowTheme(true)}>
          {showTheme && <Theme closeMenu={() => setShowTheme(false)} />}
          Theme
        </NavLink>
      </Navigation>
      <Registrat>
        <LoginIcon
          ref={loginIconRef}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H12.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.33333 5.83325L12.5 9.99992M12.5 9.99992L8.33333 14.1666M12.5 9.99992L2.5 9.99992"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </LoginIcon>
        <NavLinkRegistr onClick={() => setShowLogin(true)}>
          {showLogin && <Login closeMenu={() => setShowLogin(false)} />}
          Log in
        </NavLinkRegistr>

        <RegButton onClick={() => setShowRegistr(true)}>
          {ShowRegistr && (
            <Registration closeMenu={() => setShowRegistr(false)} />
          )}
          Registration
        </RegButton>
      </Registrat>
    </HeaderContainer>
  );
};

export default HeaderPage;

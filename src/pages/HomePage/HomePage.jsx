import React from 'react';
import {
  Home,
  ButtonContainer,
  ButtonLeft,
  ButtonRight,
} from './HomePage.styled.jsx';
// import FooterPage from 'components/FooterPage/FooterPage';
import HomeLingo from 'components/HomeLingo/HomeLingo.jsx';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Home>
      <HomeLingo />
      <ButtonContainer>
        {/* <Link to="/catalog">
          <ButtonLeft>Catalogue</ButtonLeft>
        </Link>
        <Link to="/favorites">
          <ButtonRight>Favorites</ButtonRight>
        </Link> */}
      </ButtonContainer>
      {/* <FooterPage /> */}
    </Home>
  );
};

export default HomePage;

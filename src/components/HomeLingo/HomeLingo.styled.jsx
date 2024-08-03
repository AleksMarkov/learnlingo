import styled from 'styled-jsx';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 0;
`;

const HeroImage = styled.div`
  width: 300px; /* Adjust image size as needed */
  margin-top: 2rem;
`;

const Stats = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 2rem 0;
`;

const Stat = styled.div`
  text-align: center;
`;

export default { Container, Header, Logo, Nav, Hero, HeroImage, Stats, Stat };

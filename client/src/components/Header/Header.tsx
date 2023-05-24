import React from 'react';
import Navigation from 'components/Navigation';
import { Container } from 'components/App/App.styled';
import { HeaderStyled } from './Header.styled';

const Header: React.FC = () => {
  return (
    <HeaderStyled className="header">
      <Container>
        <Navigation />
      </Container>
    </HeaderStyled>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavStyled } from './Navigation.styled';

const Navigation: React.FC = () => {
  return (
    <NavStyled className="mainNav">
      <NavLink to={'/'} className={'mainNav__link'}>
        Shop
      </NavLink>
      <NavLink to={'/cart'} className={'mainNav__link'}>
        Shopping Cart
      </NavLink>
    </NavStyled>
  );
};

export default Navigation;

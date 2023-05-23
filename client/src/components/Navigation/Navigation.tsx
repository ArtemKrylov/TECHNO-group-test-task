import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <NavLink to={'/'}>Shop</NavLink>
      <NavLink to={'/cart'}>Shopping Cart</NavLink>
    </nav>
  );
};

export default Navigation;

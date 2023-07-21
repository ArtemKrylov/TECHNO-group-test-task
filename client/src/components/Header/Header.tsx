import React from 'react';
import { HeaderStyled } from './Header.styled';

const Header: React.FC = () => {
  const currentDate = new Date();
  const formatedDate = `${currentDate.getDate()}.${String(
    currentDate.getMonth() + 1
  ).padStart(2, '0')}.${currentDate.getFullYear()}`;

  return (
    <HeaderStyled className="header">
      <div className="header__logo">Icon</div>
      <div className="header__name">ERP "ba3a"</div>
      <div className="header__date">{formatedDate}</div>
    </HeaderStyled>
  );
};

export default Header;

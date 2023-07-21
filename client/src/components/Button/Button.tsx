import React, { ReactElement } from 'react';
import { ButtonStyled } from './Button.styled';

interface ButtonInterface {
  name: string;
  children?: string | ReactElement | ReactElement[];
}

const Button: React.FC<ButtonInterface> = ({ name, children }) => {
  return <ButtonStyled>{name}</ButtonStyled>;
};

export default Button;

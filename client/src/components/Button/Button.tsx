import React, { ReactElement } from 'react';
import { ButtonStyled } from './Button.styled';

interface ButtonInterface {
  clientId: string | undefined;
  children?: string | ReactElement | ReactElement[];
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement>,
    clientId: string | undefined
  ) => void;
}

const Button: React.FC<ButtonInterface> = ({ clientId, children, onClick }) => {
  return (
    <ButtonStyled>
      <button
        type="button"
        onClick={event => {
          if (!onClick) return;
          onClick(event, clientId);
        }}
      >
        {children}
      </button>
    </ButtonStyled>
  );
};

export default Button;

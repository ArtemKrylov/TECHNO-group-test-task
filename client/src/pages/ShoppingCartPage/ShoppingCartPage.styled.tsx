import styled from 'styled-components';

interface ShoppingCartPageStyledProps {
  className: string;
}

export const ShoppingCartPageStyled = styled.div<ShoppingCartPageStyledProps>`
  .cartPage__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

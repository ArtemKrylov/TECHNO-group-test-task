import styled from 'styled-components';
import { theme } from 'utils/constants/theme';

interface ShopsPageStyledProps {
  className: string;
}

export const ShopsPageStyled = styled.div<ShopsPageStyledProps>`
  width: 100vw;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .shopsPage__shops,
  .shopsPage__products {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  ${theme.media.tablet} {
    .container {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: row;
    }
    .shopsPage__shops,
    .shopsPage__products {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
    }
  }
`;

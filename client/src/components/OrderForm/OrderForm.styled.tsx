import styled from 'styled-components';
import { theme } from 'utils/constants/theme';

interface OrderFormStyledProps {}

export const OrderFormStyled = styled.div<OrderFormStyledProps>`
  .orderForm {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .orderForm__label {
    cursor: pointer;

    &:hover,
    &:focus {
      & .orderForm__labelText {
        color: ${theme.colors.accent};
        font-weight: 700;
      }
    }
  }

  .orderForm__labelText {
    margin-bottom: 5px;
    transition: color ${theme.cubic}, font-weight ${theme.cubic};
  }

  .orderForm__viewPart {
    text-align: center;
  }

  .auth__submit-btn {
    margin: 10px auto;
  }

  ${theme.media.desktop} {
    .orderForm {
      flex-direction: row;
      gap: 50px;
    }
  }
`;

import styled from 'styled-components';
import { theme } from 'utils/constants/theme';

interface ShopsListStyledParams {
  className: string;
}

export const ShopsListStyled = styled.ul<ShopsListStyledParams>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0;

  .shopsList__item {
    padding: 10px 0;
    cursor: pointer;
  }

  .shopsList__item.active {
    color: ${theme.colors.accent};
    font-weight: 700;
  }
`;

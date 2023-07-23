import styled from 'styled-components';
import { theme } from 'utils/constants';

export const InputStyled = styled.label`
  padding: 10px;
  width: 100%;

  border-radius: ${({ theme }) => theme.borderRadius};

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accent};

  transition: box-shadow ${({ theme }) => theme.cubic};
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.boxDarkHover};
  }

  ${theme.media.tablet} {
    width: 400px;
  }

  & .input__name {
    margin-bottom: 10px;
  }

  & .input__select {
    padding: 10px;
    width: 100%;
    cursor: pointer;
  }
`;

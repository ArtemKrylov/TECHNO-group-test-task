import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.boxDark};
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.fontAccent};

  transition: box-shadow ${({ theme }) => theme.cubic},
    transform ${({ theme }) => theme.cubic};

  &:hover,
  &:focus,
  &:active {
    transform: translate(1px, 1px);
    box-shadow: ${({ theme }) => theme.shadows.boxAccent};
  }

  &:active {
    transform: translate(2px, 2px);
  }

  ${props => props.theme.media.tablet} {
    margin-left: 0;
    margin-right: 0;
  }
`;

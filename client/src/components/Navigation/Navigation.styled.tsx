import styled from 'styled-components';
import { theme } from 'utils/constants/theme';

interface NavStyledProps {
  className: string;
}

export const NavStyled = styled.nav<NavStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;

  .mainNav__link {
    font-weight: 700;
    font-size: 1.5rem;
    transition: color ${theme.cubic}, text-shadow ${theme.cubic};

    &:hover,
    &:focus {
      color: ${theme.colors.accent};
      text-shadow: ${theme.shadows.fontAccent};
    }
  }
`;

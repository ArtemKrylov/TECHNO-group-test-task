import { Container } from 'components/App/App.styled';
import styled from 'styled-components';
import { theme } from 'utils/constants';

interface SectionStyledProps {
  className: string;
}

export const HeaderStyled = styled(Container)<SectionStyledProps>`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkGrey};
  border-radius: ${theme.borderRadius};

  .header__date {
    margin-left: auto;
  }
`;

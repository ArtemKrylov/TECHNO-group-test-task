import { Container } from 'components/App/App.styled';
import styled from 'styled-components';

interface SectionStyledProps {
  className: string;
}

export const HeaderStyled = styled(Container)<SectionStyledProps>`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  .header__date {
    margin-left: auto;
  }
`;

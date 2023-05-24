import styled from 'styled-components';

interface SectionStyledProps {
  className: string;
}

export const HeaderStyled = styled.div<SectionStyledProps>`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

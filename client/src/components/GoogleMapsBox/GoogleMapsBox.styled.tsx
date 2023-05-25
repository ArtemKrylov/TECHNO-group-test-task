import styled from 'styled-components';

interface GoogleMapsBoxStyledProps {
  className: string;
}

export const GoogleMapsBoxStyled = styled.div<GoogleMapsBoxStyledProps>`
  width: 210px;
  height: 180px;
  padding: 20px 0;

  .googleMapContainer__title {
    margin-bottom: 10px;
  }
`;

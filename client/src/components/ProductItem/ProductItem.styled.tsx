import styled from 'styled-components';
import { theme } from 'utils/constants/theme';

interface ProductItemStyledProps {
  className: string;
  'data-id': number;
}

export const ProductItemStyled = styled.li<ProductItemStyledProps>`
  width: 250px;
  height: 450px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.darkGrey};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.shadows.boxDark};
  overflow: hidden;
  transition: box-shadow ${theme.cubic};

  &:hover,
  &:focus {
    box-shadow: ${theme.shadows.boxAccent};
  }

  .product__image {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .product__content {
    padding: 10px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;

    background-color: #8ec5fc;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
    text-align: center;
  }

  .product__name {
    margin-bottom: 5px;

    font-weight: 700;
    font-size: 1.2rem;
  }

  .product__regPanel {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  ${theme.media.tablet} {
    width: 380px;

    .product__image {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
`;

import styled from 'styled-components';
interface ProductsListStyledParams {
  className: string;
}

export const ProductsListStyled = styled.ul<ProductsListStyledParams>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;

  /* max-height: 80vh; */
  /* overflow-y: scroll; */
`;

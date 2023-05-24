import React from 'react';

import { IProduct } from 'utils/ts/models/product';
import { ProductsListStyled } from './ProductsList.styled';
import ProductItem from 'components/ProductItem/ProductItem';

export interface ProductsListParams {
  products: IProduct[];
}

const ProductsList: React.FC<ProductsListParams> = ({ products }) => {
  return (
    <ProductsListStyled className="productsList">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductsListStyled>
  );
};

export default ProductsList;

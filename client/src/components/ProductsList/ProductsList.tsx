import React from 'react';

import ProductItem from 'components/ProductItem/ProductItem';
import { IProduct } from 'utils/ts/models/product';

interface ProductsListParams {
  products: IProduct[];
}

const ProductsList: React.FC<ProductsListParams> = ({ products }) => {
  return (
    <ul className="productsList">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductsList;

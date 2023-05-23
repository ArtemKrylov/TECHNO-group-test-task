import React from 'react';
import { IProduct } from 'utils/ts/models/product';

interface ProductsListParams {
  products: IProduct[];
}

const ProductsList: React.FC<ProductsListParams> = ({ products }) => {
  return <ul className="productsList">ProductsList</ul>;
};

export default ProductsList;

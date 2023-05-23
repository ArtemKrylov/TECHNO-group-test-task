import React from 'react';
import { IShop } from 'utils/ts/models/shop';

interface ShopsListParams {
  shops: IShop[];
  changeViewedShopIndex: (index: number) => void;
}
const ShopsList: React.FC<ShopsListParams> = ({
  shops,
  changeViewedShopIndex,
}) => {
  return <ul className="shopsList">ShopsList</ul>;
};

export default ShopsList;

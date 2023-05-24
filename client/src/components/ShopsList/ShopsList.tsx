import React, { MouseEvent } from 'react';
import { IShop } from 'utils/ts/models/shop';

interface ShopsListParams {
  shops: IShop[];
  changeViewedShopIndex: (index: number) => void;
}
const ShopsList: React.FC<ShopsListParams> = ({
  shops,
  changeViewedShopIndex,
}) => {
  function onShopsListItemClick(event: MouseEvent<HTMLElement>) {
    const id = Number(event.currentTarget.dataset.id);
    changeViewedShopIndex(id);
  }

  return (
    <ul className="shopsList">
      {shops.map(({ id, name }) => (
        <li
          key={id}
          className="shopsList__item"
          data-id={id}
          onClick={onShopsListItemClick}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};

export default ShopsList;

import React, { MouseEvent } from 'react';
import { IShop } from 'utils/ts/models/shop';
import { ShopsListStyled } from './ShopsList.styled';

export interface ShopsListParams {
  shops: IShop[];
  changeViewedShopIndex: (index: number) => void;
  viewedShopIndex: number;
}
const ShopsList: React.FC<ShopsListParams> = ({
  shops,
  changeViewedShopIndex,
  viewedShopIndex,
}) => {
  function onShopsListItemClick(event: MouseEvent<HTMLElement>) {
    const id = Number(event.currentTarget.dataset.id);
    changeViewedShopIndex(id);
  }

  return (
    <ShopsListStyled className="shopsList">
      {shops.map(({ id, name }) =>
        viewedShopIndex === id ? (
          <li
            key={id}
            className="shopsList__item active"
            data-id={id}
            onClick={onShopsListItemClick}
          >
            {name}
          </li>
        ) : (
          <li
            key={id}
            className="shopsList__item"
            data-id={id}
            onClick={onShopsListItemClick}
          >
            {name}
          </li>
        )
      )}
    </ShopsListStyled>
  );
};

export default ShopsList;

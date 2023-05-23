import { DeliveryApp_API } from 'API/DeliveryApp_API';
import ProductsList from 'components/ProductsList/ProductsList';
import Section from 'components/Section/Section';
import ShopsList from 'components/ShopsList/ShopsList';
import React, { useEffect, useState } from 'react';
import { IProduct } from 'utils/ts/models/product';
import { IShop } from 'utils/ts/models/shop';

const ShopsPage: React.FC = () => {
  const [shops, setShops] = useState<IShop[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [viewedShopIndex, setViewedShopIndex] = useState<number>(1);

  useEffect(() => {
    const fetchShops = async () => {
      const response: any = await DeliveryApp_API.getShops();
      setShops(response);
    };
    try {
      fetchShops();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const response: any = await DeliveryApp_API.getProducts(
        shops[viewedShopIndex].id
      );
      setProducts(response);
    };
    if (shops.length) {
      try {
        fetchProducts();
      } catch (error) {
        console.error(error);
      }
    }
  }, [shops, viewedShopIndex]);

  function changeViewedShopIndex(index: number) {
    setViewedShopIndex(index);
  }

  return (
    <div className="shopsPage">
      ShopsPage
      <Section title="Shops" className="shopsPage__shops">
        <ShopsList
          shops={shops}
          changeViewedShopIndex={changeViewedShopIndex}
        />
      </Section>
      <Section title="Products" className="shopsPage__products">
        <ProductsList products={products} />
      </Section>
    </div>
  );
};

export default ShopsPage;

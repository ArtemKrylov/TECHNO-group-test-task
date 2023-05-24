import React, { useEffect, useState } from 'react';
import { DeliveryApp_API } from 'API/DeliveryApp_API';
import ProductsList from 'components/ProductsList/ProductsList';
import Section from 'components/Section/Section';
import ShopsList from 'components/ShopsList/ShopsList';
import { IProduct } from 'utils/ts/models/product';
import { IShop } from 'utils/ts/models/shop';

const ShopsPage: React.FC = () => {
  const [shops, setShops] = useState<IShop[]>([]);
  //viewed products form the shop with viewedShopIndex
  const [products, setProducts] = useState<IProduct[]>([]);
  //shop index, which products are currently viewed
  const [viewedShopIndex, setViewedShopIndex] = useState<number>(1);

  useEffect(() => {
    const fetchShops = async () => {
      const response: any = await DeliveryApp_API.getShops();
      setShops(response.data);
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
      setProducts(
        response.data.map((product: IProduct) => {
          product.orderedNumber = 0;
          return product;
        })
      );
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

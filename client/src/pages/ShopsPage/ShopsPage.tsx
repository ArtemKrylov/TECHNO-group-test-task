import React, { useEffect, useState } from 'react';
import { DeliveryApp_API } from 'API/DeliveryApp_API';
import ProductsList from 'components/ProductsList/ProductsList';
import Section from 'components/Section/Section';
import { IProduct } from 'utils/ts/models/product';
import { IShop } from 'utils/ts/models/shop';
import { ShopsPageStyled } from './ShopsPage.styled';
import { Container } from 'components/App/App.styled';
import ShopsList from 'components/ShopsList/ShopsList';

const ShopsPage: React.FC = () => {
  const [shops, setShops] = useState<IShop[]>([]);
  //viewed products form the shop with viewedShopIndex
  const [products, setProducts] = useState<IProduct[]>([]);
  //shop index, which products are currently viewed
  const [viewedShopIndex, setViewedShopIndex] = useState<number>(2);

  useEffect(() => {
    const fetchShops = async () => {
      const response: any = await DeliveryApp_API.getShops();
      setShops(response.data.sort((a: IShop, b: IShop) => a.id - b.id));
    };
    try {
      fetchShops();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log('viewedShopIndex: ', viewedShopIndex);
      const response: any = await DeliveryApp_API.getProducts(
        shops.find(el => el.id === viewedShopIndex)?.id ?? 0
      );
      const savedCartProducts: IProduct[] = JSON.parse(
        localStorage.getItem('cart') ?? '[]'
      );
      setProducts(
        response.data.map((product: IProduct) => {
          const foundProduct = savedCartProducts.find(
            el => el.id === product.id
          );
          if (foundProduct) {
            product.orderedNumber = foundProduct.orderedNumber;
            return product;
          }
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
    <ShopsPageStyled className="shopsPage">
      <Container className="container">
        <Section title="Shops" className="shopsPage__shops">
          <ShopsList
            shops={shops}
            changeViewedShopIndex={changeViewedShopIndex}
            viewedShopIndex={viewedShopIndex}
          />
        </Section>
        <Section title="Products" className="shopsPage__products">
          <ProductsList products={products} />
        </Section>
      </Container>
    </ShopsPageStyled>
  );
};

export default ShopsPage;

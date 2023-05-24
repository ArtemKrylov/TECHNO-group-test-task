import toast from 'react-hot-toast';
import { DeliveryApp_API } from 'API/DeliveryApp_API';
import ProductsList from 'components/ProductsList/ProductsList';
import Section from 'components/Section/Section';
import ShopsList from 'components/ShopsList/ShopsList';
import React, { useEffect, useMemo, useState } from 'react';
import { IProduct } from 'utils/ts/models/product';
import { IShop } from 'utils/ts/models/shop';

const ShopsPage: React.FC = () => {
  const [shops, setShops] = useState<IShop[]>([]);
  //viewed products form the shop with viewedShopIndex
  const [products, setProducts] = useState<IProduct[]>([]);
  //shop index, which products are in cart
  const [orderShop, setOrderShop] = useState<number | null>(null);
  //shop index, which products are currently viewed
  const [viewedShopIndex, setViewedShopIndex] = useState<number>(1);

  const productsInLocalStorage = useMemo(() => {
    return JSON.parse(localStorage.getItem('cart') ?? '[]');
  }, []);

  const [productsInCart, setProductsInCart] = useState<IProduct[]>(
    productsInLocalStorage
  );

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

  //if the cart is empty - clear ordered shop
  useEffect(() => {
    if (productsInCart.length === 0 && productsInLocalStorage.length === 0) {
      setOrderShop(null);
    }
  }, [productsInCart.length, productsInLocalStorage.length]);

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

  function addToCart(product: IProduct, shop_id: number): void {
    if (productsInCart.find(el => el.id === product.id)) {
      toast.error('The product is already in your cart!');
      return;
    }
    if (orderShop !== null && product.shop_id !== orderShop) {
      toast.error('You can`t order from different shops simultaniously!');
      return;
    }
    setOrderShop(shop_id);
    localStorage.setItem('cart', JSON.stringify([product, ...productsInCart]));
    setProductsInCart((prev: IProduct[]) => [product, ...prev]);
  }

  function deleteFromCart(product: IProduct): void {
    if (!productsInCart.find(el => el.id === product.id)) {
      toast.error('The product isn`t in your cart!');
    }
    const filteredProducts = productsInCart.filter(el => el.id !== product.id);
    localStorage.setItem('cart', JSON.stringify(filteredProducts));
    setProductsInCart((prev: IProduct[]) => filteredProducts);
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
        <ProductsList
          products={products}
          productsInCart={productsInCart}
          addToCart={addToCart}
          deleteFromCart={deleteFromCart}
        />
      </Section>
    </div>
  );
};

export default ShopsPage;

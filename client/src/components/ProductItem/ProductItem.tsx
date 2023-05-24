import { Button } from 'components/App/App.styled';
import React, { MouseEvent, useState } from 'react';
import toast from 'react-hot-toast';
import {
  addToCart,
  deleteFromCart,
  minusOneCart,
  plusOneCart,
} from 'utils/functions/productListFunctions';
import { useGlobal } from 'utils/globalContext/globalContext';
import { IProduct } from 'utils/ts/models/product';
import { ProductItemStyled } from './ProductItem.styled';

export interface ProductItemProps {
  product: IProduct;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { id, shop_id, product_name, price, number, image, orderedNumber } =
    product;
  const { orderShop, setOrderShop, productsInCart, setProductsInCart } =
    useGlobal();

  const [productOrdered, setProductOrdered] = useState(orderedNumber ?? 0);

  function onAddToCartBtnClick(event: MouseEvent<HTMLElement>) {
    const shopId = Number(event.currentTarget.dataset.shopid);
    if (!product || !setOrderShop || !setProductsInCart) return;
    if (orderShop && shop_id !== orderShop) {
      toast.error('You can`t order from diffent shops simultaniously!');
      return;
    }
    setProductOrdered(prev => ++prev);

    addToCart(
      product,
      shopId,
      productsInCart ?? [],
      orderShop ?? null,
      setOrderShop,
      setProductsInCart
    );
  }

  function onDeleteFromCartBtnClick(event: MouseEvent<HTMLElement>) {
    if (!product || !setProductsInCart) return;
    setProductOrdered(prev => 0);
    deleteFromCart(product, productsInCart ?? [], setProductsInCart);
  }

  function onMinusBtnClick(event: MouseEvent<HTMLElement>) {
    if (!product || !setProductsInCart) return;
    if (productOrdered === 0) return;
    setProductOrdered(prev => --prev);
    minusOneCart(product, productsInCart ?? [], setProductsInCart);
  }

  function onPlusBtnClick(event: MouseEvent<HTMLElement>) {
    if (!product || !setOrderShop || !setProductsInCart) return;
    if (orderShop && shop_id !== orderShop) {
      toast.error('You can`t order from diffent shops simultaniously!');
      return;
    }
    if (productOrdered === number) return;
    setProductOrdered(prev => ++prev);

    plusOneCart(
      product,
      shop_id,
      productsInCart ?? [],
      orderShop ?? null,
      setOrderShop,
      setProductsInCart
    );
  }
  return (
    <ProductItemStyled
      key={id}
      className="productsList__item product"
      data-id={id}
    >
      <img
        className="product__image"
        src={image}
        alt={product_name}
        width="250px"
        loading="lazy"
      />
      <div className="product__content">
        <p className="product__name">{product_name}</p>
        <p className="product__number">
          <b>Number: </b>
          {number}
        </p>
        <p className="product__price">
          <b>Price: </b>
          {price} UAH
        </p>
        <div className="product__regPanel">
          <Button
            type="button"
            className="product__MinusOneBtn"
            data-productid={id}
            onClick={onMinusBtnClick}
          >
            -
          </Button>
          <p>{productOrdered}</p>/ <p>{number}</p>
          <Button
            type="button"
            className="product__PlusOneBtn"
            data-productid={id}
            data-shopid={shop_id}
            onClick={onPlusBtnClick}
          >
            +
          </Button>
        </div>
        {productsInCart && productsInCart.find(el => el.id === id) ? (
          <Button
            type="button"
            className="product__deleteFromCartBtn"
            data-shopid={shop_id}
            data-productid={id}
            onClick={onDeleteFromCartBtnClick}
          >
            Delete from cart
          </Button>
        ) : (
          <Button
            type="button"
            className="product__addToCartBtn"
            data-shopid={shop_id}
            data-productid={id}
            onClick={onAddToCartBtnClick}
          >
            Add to cart
          </Button>
        )}
      </div>
    </ProductItemStyled>
  );
};

export default ProductItem;

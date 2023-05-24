import { Button } from 'components/App/App.styled';
import React, { MouseEvent } from 'react';
import { IProduct } from 'utils/ts/models/product';

interface ProductsListParams {
  products: IProduct[];
  productsInCart: IProduct[];
  addToCart: (product: IProduct, shopId: number) => void;
  deleteFromCart: (product: IProduct) => void;
}

const ProductsList: React.FC<ProductsListParams> = ({
  products,
  addToCart,
  deleteFromCart,
  productsInCart,
}) => {
  function getProductByIdFromEvent(
    event: MouseEvent<HTMLElement>
  ): IProduct | undefined {
    const productId = Number(event.currentTarget.dataset.productid);
    const product = products.find(el => el.id === productId);
    if (!product) return;
    return product;
  }

  function onAddToCartBtnClick(event: MouseEvent<HTMLElement>) {
    const shopId = Number(event.currentTarget.dataset.shopid);
    const product = getProductByIdFromEvent(event);
    if (!product) return;
    addToCart(product, shopId);
  }

  function onDeleteFromCartBtnClick(event: MouseEvent<HTMLElement>) {
    const product = getProductByIdFromEvent(event);
    if (!product) return;
    deleteFromCart(product);
  }

  function onMinusBtnClick(event: MouseEvent<HTMLElement>) {
    const product = getProductByIdFromEvent(event);
    if (!product) return;
  }

  function onPlusBtnClick(event: MouseEvent<HTMLElement>) {
    const product = getProductByIdFromEvent(event);
    if (!product) return;
  }

  return (
    <ul className="productsList">
      {products.map(
        ({
          id,
          shop_id,
          product_name,
          price,
          number,
          image,
          orderedNumber,
        }) => (
          <li key={id} className="productsList__item product" data-id={id}>
            <img
              className="product__image"
              src={image}
              alt={product_name}
              width="250px"
            />
            <p className="product__name">{product_name}</p>
            <p className="product__number">{number}</p>
            <p className="product__price">{price}</p>
            <Button
              type="button"
              className="product__MinusOneBtn"
              data-productid={id}
              onClick={onMinusBtnClick}
            >
              -
            </Button>
            <p>{orderedNumber}</p>/ <p>{number}</p>
            <Button
              type="button"
              className="product__PlusOneBtn"
              data-productid={id}
              onClick={onPlusBtnClick}
            >
              +
            </Button>
            {productsInCart.find(el => el.id === id) ? (
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
          </li>
        )
      )}
    </ul>
  );
};

export default ProductsList;

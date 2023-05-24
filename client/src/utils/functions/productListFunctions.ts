import toast from 'react-hot-toast';
import { IProduct } from 'utils/ts/models/product';

export function addToCart(
  product: IProduct,
  shop_id: number,
  productsInCart: IProduct[],
  orderShop: number | null,
  setOrderShop: React.Dispatch<React.SetStateAction<number | null>>,
  setProductsInCart: React.Dispatch<React.SetStateAction<IProduct[]>>
): void {
  //if already in cart - return
  if (productsInCart.find(el => el.id === product.id)) {
    toast.error('The product is already in your cart!');
    return;
  }
  //if product from another shop - return
  if (orderShop !== null && product.shop_id !== orderShop) {
    toast.error('You can`t order from different shops simultaniously!');
    return;
  }
  setOrderShop(shop_id);
  product.orderedNumber = product.orderedNumber ? ++product.orderedNumber : 1;
  localStorage.setItem('cart', JSON.stringify([product, ...productsInCart]));
  setProductsInCart((prev: IProduct[]) => [product, ...prev]);
  toast.success('Added to cart successfully!');
}

export function plusOneCart(
  product: IProduct,
  shop_id: number,
  productsInCart: IProduct[],
  orderShop: number | null,
  setOrderShop: React.Dispatch<React.SetStateAction<number | null>>,
  setProductsInCart: React.Dispatch<React.SetStateAction<IProduct[]>>
): void {
  //if no such product in cart - add one
  if (!productsInCart.find(el => el.id === product.id)) {
    setOrderShop(shop_id);
    addToCart(
      product,
      shop_id,
      productsInCart,
      orderShop,
      setOrderShop,
      setProductsInCart
    );
    return;
  }
  //if product from another shop - return
  if (orderShop !== null && product.shop_id !== orderShop) {
    toast.error('You can`t order from different shops simultaniously!');
    return;
  }
  product.orderedNumber = product.orderedNumber ? ++product.orderedNumber : 1;
  // setProductsInCart((prev: IProduct[]) => [product, ...prev]);
  // localStorage.setItem('cart', JSON.stringify(JSON.parse(localStorage.getItem('cart')??'[]').filter()));
  localStorage.setItem('cart', JSON.stringify(productsInCart));
}

export function deleteFromCart(
  product: IProduct,
  productsInCart: IProduct[],
  setProductsInCart: React.Dispatch<React.SetStateAction<IProduct[]>>
): void {
  if (!productsInCart.find(el => el.id === product.id)) {
    toast.error('The product isn`t in your cart!');
    return;
  }
  product.orderedNumber = product.orderedNumber ? --product.orderedNumber : 0;
  const filteredProducts = productsInCart.filter(el => el.id !== product.id);
  localStorage.setItem('cart', JSON.stringify(filteredProducts));
  setProductsInCart((prev: IProduct[]) => filteredProducts);
  toast.success('Deleted product from cart successfully!');
}

export function minusOneCart(
  product: IProduct,
  productsInCart: IProduct[],
  setProductsInCart: React.Dispatch<React.SetStateAction<IProduct[]>>
): void {
  if (!productsInCart.find(el => el.id === product.id)) {
    return;
  }
  //if only 1 number of the product in cart - delete the product from cart
  if (product.orderedNumber === 1) {
    deleteFromCart(product, productsInCart, setProductsInCart);
    return;
  }
  product.orderedNumber = product.orderedNumber ? --product.orderedNumber : 0;
  const filteredProducts = productsInCart.map(el => {
    if (el.id !== product.id) {
      el.orderedNumber = product.orderedNumber;
    }
    return el;
  });
  localStorage.setItem('cart', JSON.stringify(filteredProducts));
  setProductsInCart((prev: IProduct[]) => filteredProducts);
}

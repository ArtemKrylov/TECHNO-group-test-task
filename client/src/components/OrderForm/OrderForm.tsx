import toast from 'react-hot-toast';
import { Button } from 'components/App/App.styled';
import ProductsList from 'components/ProductsList/ProductsList';
import { Formik, Form, Field } from 'formik';
import React, { useMemo, useState } from 'react';
import { IProduct } from 'utils/ts/models/product';
import { object, string, number } from 'yup';

const orderFormSchema = object({
  name: string().required(),
  email: string().email().required(),
  phone: number().min(10).max(13).required(),
  address: string().email().required(),
});

const OrderForm: React.FC = () => {
  const productsInLocalStorage = useMemo(() => {
    return JSON.parse(localStorage.getItem('cart') ?? '[]');
  }, []);

  const [productsInCart, setProductsInCart] = useState<IProduct[]>(
    productsInLocalStorage
  );

  //TODO
  function handleOrderSubmit(event: any): void {}

  function addToCart(product: IProduct, shopId: number): void {
    if (productsInCart.find(el => el.id === product.id)) {
      toast.error('The product is already in your cart!');
    }
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
    <Formik
      initialValues={{ name: '', email: '', phone: '', address: '' }}
      validationSchema={orderFormSchema}
      onSubmit={handleOrderSubmit}
    >
      <Form className="orderForm">
        <label className="orderForm__label" htmlFor="name">
          <p className="orderForm__labelText">Name</p>
          {/* <FormErrorMessage name="password" /> */}
          <Field
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="orderForm__input"
          />
        </label>
        <label className="orderForm__label" htmlFor="email">
          <p className="orderForm__labelText">Email</p>
          {/* <FormErrorMessage name="password" /> */}
          <Field
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="orderForm__input"
          />
        </label>
        <label className="orderForm__label" htmlFor="phone">
          <p className="orderForm__labelText">Phone</p>
          {/* <FormErrorMessage name="password" /> */}
          <Field
            name="phone"
            type="phone"
            required
            placeholder="Enter your phone"
            className="orderForm__input"
          />
        </label>
        <label className="orderForm__label" htmlFor="address">
          <p className="orderForm__labelText">Address</p>
          {/* <FormErrorMessage name="password" /> */}
          <Field
            name="address"
            type="text"
            required
            placeholder="Enter your address"
            className="orderForm__input"
          />
        </label>

        {productsInCart ? (
          <ProductsList
            products={productsInCart}
            productsInCart={productsInCart}
            addToCart={addToCart}
            deleteFromCart={deleteFromCart}
          />
        ) : (
          <p>Your cart is empty yet!</p>
        )}

        <Button type="submit" className="auth__submit-btn">
          Submit order
        </Button>
      </Form>
    </Formik>
  );
};

export default OrderForm;

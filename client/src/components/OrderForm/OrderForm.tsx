import React from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string, number } from 'yup';

import { Button } from 'components/App/App.styled';
import ProductsList from 'components/ProductsList/ProductsList';
import { useGlobal } from 'utils/globalContext/globalContext';

const orderFormSchema = object({
  name: string().required(),
  email: string().email().required(),
  phone: number().min(10).max(13).required(),
  address: string().email().required(),
});

const OrderForm: React.FC = () => {
  const { productsInCart } = useGlobal();

  //TODO
  function handleOrderSubmit(event: any): void {}

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
          <ProductsList products={productsInCart} />
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

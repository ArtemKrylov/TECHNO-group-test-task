import React from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';

import { Button } from 'components/App/App.styled';
import ProductsList from 'components/ProductsList/ProductsList';
import { useGlobal } from 'utils/globalContext/globalContext';
import FormErrorMessage from 'components/FormErrorMessage/FormErrorMessage';
import { DeliveryApp_API } from 'API/DeliveryApp_API';

const orderFormSchema = object({
  name: string().required(),
  email: string().email().required(),
  phone: string().required(),
  address: string().required(),
});

const OrderForm: React.FC = () => {
  const { productsInCart } = useGlobal();
  const totalPrice =
    productsInCart?.reduce((acc, el) => acc + el.price, 0) ?? 0;

  //TODO
  async function handleOrderSubmit(
    {
      name,
      email,
      phone,
      address,
    }: {
      name: string;
      email: string;
      phone: string;
      address: string;
    },
    { resetForm }: any
  ) {
    console.log('submitting');
    if (!productsInCart || productsInCart.length === 0) return;
    const order_items: string = JSON.stringify(
      productsInCart.map(el => ({
        product_id: el.id,
        product_number: el.orderedNumber ?? 0,
      }))
    );

    try {
      const response = DeliveryApp_API.postOrder({
        name,
        email,
        phone,
        customer_address: address,
        shop_id: productsInCart[0].shop_id,
        order_items,
        total_price: totalPrice,
      });
      console.log('response: ', response);
    } catch (error) {
      console.error(error);
    }

    resetForm();
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
          <FormErrorMessage name="name" />
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
          <FormErrorMessage name="email" />
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
          <FormErrorMessage name="phone" />
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
          <FormErrorMessage name="address" />
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

        <p>{totalPrice} UAH</p>

        <Button type="submit" className="auth__submit-btn">
          Submit order
        </Button>
      </Form>
    </Formik>
  );
};

export default OrderForm;

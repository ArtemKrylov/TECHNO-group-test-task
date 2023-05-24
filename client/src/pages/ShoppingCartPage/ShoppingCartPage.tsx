import { Container } from 'components/App/App.styled';
import OrderForm from 'components/OrderForm/OrderForm';
import React from 'react';
import { ShoppingCartPageStyled } from './ShoppingCartPage.styled';

const ShoppingCartPage: React.FC = () => {
  return (
    <ShoppingCartPageStyled className="cartPage">
      <Container className="container cartPage__container">
        <OrderForm />
      </Container>
    </ShoppingCartPageStyled>
  );
};

export default ShoppingCartPage;

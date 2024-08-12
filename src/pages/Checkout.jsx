import React from 'react';
import { Container, Grid } from '@mui/material';
import CheckoutBox from '../components/CheckoutBox';
import CheckoutPaymentInfo from '../components/CheckoutPaymentInfo';
import CheckoutInfoReturn from '../components/CheckoutInfoReturn';
import CheckoutCard from '../components/CheckoutCard';
import OrderAmount from '../components/OrderAmount';
import { useSelector } from 'react-redux';

function Checkout() {
  const products = useSelector(state => state.cart.products);

  const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const discount = totalAmount * 0.20;  // Örneğin %20 indirim
  const payableAmount = totalAmount - discount;

  return (
    <Container sx={{ marginBottom: '4rem' }}>
      <CheckoutBox />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ marginTop: '1rem' }}>
          <CheckoutPaymentInfo />
          <CheckoutInfoReturn />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <OrderAmount
            visible={false}
            padding='7rem'
            totalAmount={totalAmount}
            discount={discount}
            payableAmount={payableAmount}
          />
          <CheckoutCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Checkout;

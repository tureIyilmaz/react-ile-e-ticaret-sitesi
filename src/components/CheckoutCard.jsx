import React from 'react';
import '../assets/css/checkoutCss/CheckoutCard.css'; // CSS dosyasını import et
import { FaWallet, FaCreditCard, FaCcApplePay, FaCcPaypal } from 'react-icons/fa';
import { Container, Box, Typography, FormControlLabel, RadioGroup, Radio } from '@mui/material';

function CheckoutCard() {
  return (



    <Box className="checkout-box">
      <Typography variant="h4" className="checkout-title">
        Sipariş Tutarı
      </Typography>
      <RadioGroup>
        <FormControlLabel
          value="credit-card"
          control={<Radio />}
          label={
            <div className="radio-label">
              <FaCreditCard className="radio-icon" />
              Kredi Kartı
            </div>
          }
        />
        <FormControlLabel
          value="apple-pay"
          control={<Radio />}
          label={
            <div className="radio-label">
              <FaCcApplePay className="radio-icon" />
              Apple Pay
            </div>
          }
        />
        <FormControlLabel
          value="paypal"
          control={<Radio />}
          label={
            <div className="radio-label">
              <FaCcPaypal className="radio-icon" />
              Paypal
            </div>
          }
        />
        <FormControlLabel
          value="wallet"
          control={<Radio />}
          label={
            <div className="radio-label">
              <FaWallet className="radio-icon" />
              Kapıda Ödeme
            </div>
          }
        />
      </RadioGroup>
    </Box>

  );
}

export default CheckoutCard;

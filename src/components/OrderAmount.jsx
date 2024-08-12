import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FaArrowRight } from 'react-icons/fa';

const OrderAmount = ({ visible, padding, totalAmount, discount, payableAmount }) => {
    return (
        <Box sx={{ marginTop: '2rem', padding: padding, border: '1px solid #131313', borderRadius: '1rem' }}>
            <Typography variant="h4" textAlign='center'>
                Sipariş Tutarı
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">
                    Toplam Tutar:
                </Typography>
                <Typography variant="h6">
                    {totalAmount} TL
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">
                    İndirim:
                </Typography>
                <Typography variant="h6" style={{ textDecoration: 'line-through' }}>
                    {discount} TL
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">
                    Ödenecek Tutar:
                </Typography>
                <Typography variant="h6">
                    {payableAmount} TL
                </Typography>
            </Box>
            {visible && (
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#131313', color: 'white' }}
                        href='/cart/checkout'
                    >
                        Ödeme Sayfasına Git
                        <FaArrowRight />
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default OrderAmount;

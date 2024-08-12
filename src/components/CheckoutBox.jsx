import React from 'react'
import { TextField, Box, Typography, Link } from '@mui/material';
import { Container } from 'react-bootstrap';
import '../assets/css/checkoutCss/CheckoutBox.css'

function CheckoutBox() {
    return (

        <Container>

            <Box className="checkout-start">
                <div class="col checkout-start-item">
                    <Typography variant="body1">Zaten Üye misiniz?</Typography>
                    <Link href="" >Giriş Yap</Link>
                </div>

                <div class="col checkout-start-item">
                    <Typography variant="body1">Kupona Sahip misiniz?</Typography>
                    <Link href="" >Kodu Girmek için Tıklayınız</Link>
                </div>
            </Box>

        </Container>



    )
}

export default CheckoutBox
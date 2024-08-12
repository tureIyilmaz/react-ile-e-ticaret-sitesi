import React from 'react'
import { TextField, Box, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { Container } from 'react-bootstrap';

function CheckoutPaymentInfo() {
    return (
        <Container>
            <Box
                display="flex"
                flexDirection="column"
                gap={2}
                padding={2}
                //maxWidth={400}
                mx="start" // tagı hizalamaya yarıyor!!!! (justify-content gb)
                lineHeight={5}
            >
                <h1>Ödeme Bilgileri</h1>

                <div className="">

                    <TextField fullWidth id="CheckoutPaymentInfo-name" label="İsim" variant="outlined" InputProps={{readOnly: true}} />


                    <TextField fullWidth id="CheckoutPaymentInfo-surname" label="Soyisim" variant="outlined" InputProps={{readOnly: true}}/>


                    <TextField fullWidth id="CheckoutPaymentInfo-mail" label="E-mail" variant="outlined" InputProps={{readOnly: true}}/>


                    <TextField fullWidth id="CheckoutPaymentInfo-tel" label="Telefon" variant="outlined" InputProps={{readOnly: true}}/>


                    <TextField fullWidth id="CheckoutPaymentInfo-adres" label="Adres" variant="outlined" InputProps={{readOnly: true}}/>


                    <TextField fullWidth id="CheckoutPaymentInfo-il" label="İl" variant="outlined" InputProps={{readOnly: true}}/>


                    <TextField fullWidth id="CheckoutPaymentInfo-ilce" label="İlçe" variant="outlined" InputProps={{readOnly: true}}/>

                </div>

            </Box>
        </Container>
    )
}

export default CheckoutPaymentInfo
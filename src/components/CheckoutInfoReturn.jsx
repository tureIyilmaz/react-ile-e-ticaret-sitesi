import React from 'react'
import { TextField, Box, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { Container } from 'react-bootstrap';

function CheckoutInfoReturn() {
    return (
        <Container>

            <Box
                display="flex"
                flexDirection="column"
                gap={2}
                padding={2}
                // maxWidth={700}
                maxHeight={3400}
                mx="start"
            >

                <h1>Ek Bilgiler</h1> 
                <TextField fullWidth rows={8} multiline id="CheckoutPaymentInfo-text" label="Yazı yazınız..." variant="outlined"/>
            </Box>  
        </Container>

    ) // kutu boyutunu ayarlamak için multiline özelliği verirsin, sonrasında row ile boyutu ayarlarsın
}

export default CheckoutInfoReturn
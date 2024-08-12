import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { addProductToCart } from '../redux/slices/cartSlices';

function Product({ product, image, id }) {
    const dispatch = useDispatch();
    const { name, description, price } = product;

    const addCart = () => {
        const payload = {
            id: id,
            name: name,
            description: description,
            price: price,
            image: image,
            quantity: 1
        }
        dispatch(addProductToCart(payload));
    }

    return (
        <Card sx={{ maxWidth: 345, margin: 2, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={name}
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ marginTop: 2 }}>
                    Fiyat: {price.toFixed(2)} ₺
                </Typography>
            </CardContent>
            <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
                <Button size="small" color="primary" onClick={addCart}>
                    Sepete Ekle
                </Button>
            </Box>
        </Card>
    );
}

export default Product;

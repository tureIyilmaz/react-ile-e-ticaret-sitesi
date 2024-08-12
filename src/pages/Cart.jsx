import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Box, Typography, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { incrementQuantity, decrementQuantity, removeProduct } from '../redux/slices/cartSlices';
import OrderAmount from '../components/OrderAmount';

function Cart() {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const handleIncrement = (product) => {
        dispatch(incrementQuantity(product));
    };

    const handleDecrement = (product) => {
        dispatch(decrementQuantity(product));
    };

    const handleRemove = (product) => {
        dispatch(removeProduct(product));
    };

    const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0);
    const discount = totalAmount * 0.20;
    const payableAmount = totalAmount - discount;

    return (
        <Container sx={{ marginBottom: '4rem' }}>
            {products.map((product, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', p: 2, border: '1px solid #d0d0d0', borderRadius: '1rem', mt: 2 }}>
                    <img src={product.image} alt="Product" style={{ borderRadius: "1rem", width: '150px' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
                        <Typography variant="h6">
                            {product.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <IconButton onClick={() => handleDecrement(product)} color="primary">
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <Typography variant="h6" sx={{ mx: 2 }}>
                                {product.quantity}
                            </Typography>
                            <IconButton onClick={() => handleIncrement(product)} color="primary">
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <Typography variant="h6">
                        {product.price} TL
                    </Typography>
                    <IconButton onClick={() => handleRemove(product)} color="warning">
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ))}
            <OrderAmount visible={true} padding='2rem' totalAmount={totalAmount} discount={discount} payableAmount={payableAmount} />
        </Container>
    );
}

export default Cart;

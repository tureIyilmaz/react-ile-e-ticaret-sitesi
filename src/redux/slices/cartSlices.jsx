import { createSlice } from '@reduxjs/toolkit';

const setFromCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};

const getFromCartFromStorage = () => {
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
};

const initialState = {
    products: getFromCartFromStorage(),
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const productIndex = state.products.findIndex(product => product.name === action.payload.name && product.description === action.payload.description);
            if (productIndex >= 0) {
                state.products[productIndex].quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
            setFromCartToStorage(state.products);
        },
        incrementQuantity: (state, action) => {
            const productIndex = state.products.findIndex(product => product.name === action.payload.name && product.description === action.payload.description);
            if (productIndex >= 0) {
                state.products[productIndex].quantity += 1;
                setFromCartToStorage(state.products);
            }
        },
        decrementQuantity: (state, action) => {
            const productIndex = state.products.findIndex(product => product.name === action.payload.name && product.description === action.payload.description);
            if (productIndex >= 0 && state.products[productIndex].quantity > 1) {
                state.products[productIndex].quantity -= 1;
                setFromCartToStorage(state.products);
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => !(product.name === action.payload.name && product.description === action.payload.description));
            setFromCartToStorage(state.products);
        }
    },
});

export const { addProductToCart, incrementQuantity, decrementQuantity, removeProduct } = cartSlice.actions;

export const selectCartItemCount = (state) => state.cart.products.reduce((total, product) => total + product.quantity, 0);

export default cartSlice.reducer;

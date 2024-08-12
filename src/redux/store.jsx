import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slices/appSlices'
import productReducer from './slices/productSlices'
import cartReducer from './slices/cartSlices'

export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        cart: cartReducer,
    },
})
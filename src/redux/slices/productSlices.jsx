import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productsData from '../../assets/data/products.json'

const initialState = {
    products: [],
    loading: false
}

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        return productsData[0].items
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false
            })
    }
})

export const { } = productSlice.actions

export default productSlice.reducer

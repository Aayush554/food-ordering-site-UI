import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from 'axios';

const initialState = {
    products: [],
    error: null,
    status: 'idle',
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            const products = Array.isArray(action.payload) ? action.payload : [];
            state.products = [...products];
        });

        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'pending'
        })
    }
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer

export const fetchProducts = createAsyncThunk('/products/fetchProducts', async () => {
    try {
        const response = await axios.get('https://localhost:7129/api/MenuItem');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
});

export const selectAllProducts = state => state.products
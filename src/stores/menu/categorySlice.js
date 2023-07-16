import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    categories: '',
    status: 'idle',
    error: null,
};



export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.categories = action.payload;
                console.log(action.payload)
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    },
});
export const { getCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (index) => {
        try {
            const response = await axios.get(`https://localhost:7129/api/Category/${index}`);
            const categoryArray = Array.isArray(response.data) ? response.data : [response.data];
            console.log(categoryArray);
            return categoryArray;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);
export const selectAllCategories = (state) => state.categories;


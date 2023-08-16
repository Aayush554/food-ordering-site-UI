import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.amount++;
      } else {
        state.products.push({ ...action.payload, amount: 1 });
      }
    },
    clearCart: (state) => {
      state.products = [];
    },
    incrementProductAmount: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.amount++;
      }
    },
    decrementProductAmount: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        if (product.amount === 1) {
          state.products = state.products.filter(
            (p) => p.id !== action.payload.id
          );
        } else {
          product.amount--;
        }
      }
    },
  },
});

export const cartProducts = (state) => state.cart.products;

export const {
  addToCart,
  clearCart,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push({
        ...action.payload,
        quantity: 1,
      });
    },
    removeFromCart(state, action) {
      // action.payload.quantity = 0;
      return state.filter((product) => product.id !== action.payload.id);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingProduct = state.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.quantity = parseInt(quantity);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

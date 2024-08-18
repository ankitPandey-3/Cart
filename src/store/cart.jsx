import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      state.items.push({
        ...action.payload,
        quantity: 1,
      });
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(
        (product) => product.id !== action.payload.id
      );
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingProduct = state.items.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.quantity = parseInt(quantity);
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

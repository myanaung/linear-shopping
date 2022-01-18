import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const pseudoId = new Date().getTime();

      state.cartItems.push({
        id: pseudoId,
        title: action.payload.product.title,
        productId: action.payload.product.id,
        quantity: action.payload.quantity,
        img: action.payload.product.image,
        totalPrice: action.payload.quantity * action.payload.product.price,
        click: action.payload.click,
      });
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemId
      );
    },
  },
});

export const getCartItems = (state) => state.cart.cartItems;

export const getTotalPrice = (state) =>
  state.cart.cartItems.reduce((total, cartItem) => {
    return cartItem.totalPrice + total;
  }, 0);

export const { addItemToCart, removeItem } = slice.actions;

export default slice.reducer;

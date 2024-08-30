import { createSlice } from "@reduxjs/toolkit";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
  products: [] as any,
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

export const caerSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product: { id: any }) => product.id === action.payload.id
      );
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

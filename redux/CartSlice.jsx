import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
    },
    calculateTotal: state => {
      return state.items.reduce((totals, item) => {
        totals.totalAmount += item.price * item.quantity;
        totals.totalQuantity += item.quantity;
        return totals;
      }, { totalAmount: 0, totalQuantity: 0 });
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer; 

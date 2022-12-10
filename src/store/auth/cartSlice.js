import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        cartItems: [],
        totalAmount: 0,
        totalQuantity: 0,
    },
    reducers: {
        addItem: (state, { payload }) => {
            console.log(payload)
            const existingItem = state.cartItems.find((item) => item.id === payload.id);
            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: payload.id,
                    productName: payload.productName,
                    img: payload.img,
                    price: payload.price,
                    quantity: 1,
                    totalPrice: payload.price,
                });
                state.totalAmount = state.totalAmount + Number(payload.price);

            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(payload.price);
                state.totalAmount = state.totalAmount + Number(payload.price);
            }
        },
        deleteItem: (state, { payload }) => {
            const existingItem = state.cartItems.filter((item) => item.id === payload.id);
            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== payload.id)
                state.totalQuantity = state.totalQuantity - payload.quantity;
                state.totalAmount = state.totalAmount - payload.totalPrice;
            }
        }
    },
});

export const { addItem, deleteItem } = cartSlice.actions

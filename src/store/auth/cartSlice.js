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
            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(payload.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity));
            console.log(state.totalQuantity);
            console.log(payload.id);

        },
        deleteItem: (state, { payload }) => {
            console.log(payload)
            const existingItem = state.cartItems.filter((item) => item.id === payload);
            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== payload)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            if (state.totalQuantity = null) {
                state.totalQuantity = 0
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity)
            );
            console.log(state.totalQuantity)
            console.log(existingItem)
        }
    },
});

export const { addItem, deleteItem } = cartSlice.actions

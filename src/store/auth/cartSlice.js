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
            console.log(payload);

        },
        deleteItem: (state, { payload }) => {
            const existingItem = state.cartItems.filter((item) => item.id === payload.id);
            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== payload.id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity)
            );
        }
    },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = cartSlice.actions

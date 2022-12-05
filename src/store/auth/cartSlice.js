import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        cartItems: [],
        totalAmount: 0,
        totalQuantity: 0,
    },
    reducers: {
        addItem: (state, { payload }) => {
            const newItem = payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.nameProduct,
                    img: newItem.urlImage,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity));
            console.log(state.totalQuantity);
            console.log(state.cartItems);
            console.log(newItem);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addItem } = cartSlice.actions

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            state.totalQuantity++
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
                existingItem.quantity++
            }
        },
        removeFromCart(state, action) {
            const id = action.payload
            state.totalQuantity--
            const existingItem = state.items.find(item => item.id === id)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})

export default cartSlice
export const cartActions = cartSlice.actions
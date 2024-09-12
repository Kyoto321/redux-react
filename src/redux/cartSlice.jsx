import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart : (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)
            if(index >= 0) {
                // increase the no of items
                state.items[index].quantity += 1
            }
            else {
                // create a new item
                const newItem  = {...action.payload, quantity: 1}
                state.items.push(newItem)
                state.totalQuantity += 1
            }

            state.totalAmount += action.payload.price
        },
        removeFromCart : (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload)
            state.totalQuantity -= 1
            state.totalAmount -= (state.items[index].price * state.items[index].quantity)
            state.items.splice(index, 1)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    allItems: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.items.findIndex(item => item.id.toString() === action.payload.id.toString())
            if (itemIndex === -1) {
                let updatedItems = state.items.concat({
                    id: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    total: +action.payload.price,
                    price: action.payload.price,
                })
                state.items = updatedItems
            } else {
                let updatedItem = state.items[itemIndex]
                updatedItem = {
                    ...updatedItem,
                    total: updatedItem.total += updatedItem.price,
                    quantity: updatedItem.quantity += 1
                }
                state.items[itemIndex] = updatedItem
            }
            state.allItems += 1
        },
        removeFromCart(state, action) {
            const itemIndex = state.items.findIndex(item => item.id.toString() === action.payload.toString())
            if (itemIndex >= 0) {
                let updatedItem = state.items[itemIndex]
                if (updatedItem.quantity === 1) {
                    state.items.splice(itemIndex, 1)
                } else {
                    updatedItem = {
                        ...updatedItem,
                        total: updatedItem.total -= updatedItem.price,
                        quantity: updatedItem.quantity -= 1
                    }
                    state.items[itemIndex] = updatedItem
                }
                state.allItems -= 1
            }
        },
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
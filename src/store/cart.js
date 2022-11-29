import { createSlice } from '@reduxjs/toolkit'

const initialCartState = {
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addToCart(state) { },
        removeFromCart(state) { },
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = { isShown: false }

const cartToggleSlice = createSlice({
    name: 'cart-toggle',
    initialState,
    reducers: {
        toggle(state) {
            state.isShown = !state.isShown
        }
    }
})

export const cartToggleActions = cartToggleSlice.actions
export default cartToggleSlice.reducer
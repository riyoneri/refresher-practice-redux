import { createSlice } from '@reduxjs/toolkit'

const initialToggleState = { isShown: false }

const cartToggleSlice = createSlice({
    name: 'cart-toggle',
    initialState: initialToggleState,
    reducers: {
        toggle(state) {
            state.isShown = !state.isShown
        }
    }
})

export const cartToggleActions = cartToggleSlice.actions
export default cartToggleSlice.reducer
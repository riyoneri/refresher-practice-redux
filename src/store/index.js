import { configureStore } from '@reduxjs/toolkit'

import CartToggleReducer from './cart-toggle'
import CartReducer from './cart'

const store = configureStore({
    reducer: {
        cartToggle: CartToggleReducer,
        cart: CartReducer
    }
})

export default store;
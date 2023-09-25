import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/slice.js'



export const store = configureStore ({
    reducer:{
        cart: cartReducer
    }
})




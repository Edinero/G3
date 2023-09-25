import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
name: 'cart',
initialState:[],
reducers: {
    addToCart: (state, action) =>{
        const newMovie = action.payload
        return [...state, newMovie]
    }
    //removeFromCart

}
})
// export estado inicial
export default createSlice.reducer

export const { addToCart } = cartSlice.actions
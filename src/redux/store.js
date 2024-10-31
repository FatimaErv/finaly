import { configureStore, createReducer } from "@reduxjs/toolkit";
import wishReducer from "./wishlist/wishSlice"
import cartReducer from "./cart/cartSlice"


const myStore = configureStore({
    reducer:{
        wishlist: wishReducer,
        cart: cartReducer,
    }
})
export default myStore
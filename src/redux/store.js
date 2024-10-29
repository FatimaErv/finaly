import { configureStore } from "@reduxjs/toolkit";
// import couReducer from "./counter/countSlice"
import wishReducer from "./wishlist/wishSlice"

const myStore = configureStore({
    reducer:{
        // counter: couReducer
        wishlist: wishReducer,
    }
})
export default myStore
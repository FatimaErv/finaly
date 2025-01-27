import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        list:[]
    },
    reducers:{
        addCart:(state, action)=>{
            const findProduct = state.list.find((x) => x.id == action.payload.id) 
            if(!findProduct){
                state.list.push({ ...action.payload, quantity:1 })
            }
        },
    incQuantity: (state, action) => {
        const findlist = state.list.find((x) => x.id == action.payload);
        if(findlist) {
            findlist.quantity += 1;
        }
    },
    disQuantity: (state, action) => {
        const findlist = state.list.find((x) => x.id == action.payload);
        if(findlist.quantity > 1) {
            findlist.quantity -=1;
        }
    }
    }
})
export const {addCart, incQuantity, disQuantity} = cartSlice.actions;
export default cartSlice.reducer
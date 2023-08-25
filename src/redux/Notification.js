import { createSlice } from "@reduxjs/toolkit"
import { Add, Clear } from "./CartReducer";
import { Remove } from "./CartReducer";
import { actions } from "./ProductReducer";
import { add } from "./ProductReducer";
import { updateProduct } from "./ProductReducer";
import { deleteProduct } from "./ProductReducer";
const initialState={
    message:"",
}


const notiSlice=createSlice({
    name:'notification',
    initialState,
    reducers:{
        reset(state){
            state.message="";
        }
    },
    extraReducers:{
        [Add]:(state,action)=>{
            state.message="product added to cart";
        },
        [Remove]:(state,action)=>{
            state.message="product removed from cart";
        },
        [Clear]:(state,action)=>{
            state.message="cart cleared";
        },
        [add]:(state,actions)=>{
                state.message="New Item Added";
        },
        [updateProduct]:(state,actions)=>{
            state.message="Updated the product";
        },
        [deleteProduct]:(state,actions)=>{
            state.message="Product Deleted";
        }
    }
})


export const notificationReducer=notiSlice.reducer;
export const notificationSelector=(state)=>state.notification.message;
export const {reset} =notiSlice.actions;
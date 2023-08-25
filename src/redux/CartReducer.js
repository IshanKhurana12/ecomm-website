
import { createSlice } from '@reduxjs/toolkit';


const initialState={
    products:[],
}


const CartSlice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        Add(state,action){
            state.products.push(action.payload);
        },
        Remove(state,action){
            const itemId = action.payload;
            const itemIndex = state.products.findIndex(product => product.id === itemId);
      
            if (itemIndex !== -1) {
              state.products.splice(itemIndex, 1);
            }
        },
        Clear(state){
            state.products=[]
        }
    }
})



export const cartReducer=CartSlice.reducer;

export const cartSelector=(state)=>state.cart.products;
export const { Add, Remove, Clear } = CartSlice.actions;




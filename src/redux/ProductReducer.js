import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';  

const initialState={
    products: [],
}

export const getInitialStateAsync=createAsyncThunk(
  'home/getInitialState',
  (arg,thunkAPI,state)=>{
    axios.get("https://my-json-server.typicode.com/IshanKhurana12/ecomm/products").then((res)=>{
     
    thunkAPI.dispatch(actions.setInitialState(res.data));
      
    })

  }
)


const ProductSlice=createSlice({
    name:'home',
    initialState,
    reducers:{
       setInitialState:(state,action)=>{
          state.products=[...action.payload]
       },
       add:(state,action)=>{
        state.products.push(action.payload)
       },
       updateProduct: (state, action) => {
        const { id, updatedProduct } = action.payload;
        const productIndex = state.products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
          state.products[productIndex] = updatedProduct;
        }
      },
      deleteProduct: (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter(product => product.id !== productId);
      },
    }
})



export const productReducer=ProductSlice.reducer;
export const productSelector=(state)=>state.productReducer.products;

 
export const actions=ProductSlice.actions;

export const { add,updateProduct,deleteProduct } = ProductSlice.actions;
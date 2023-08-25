

import { configureStore } from "@reduxjs/toolkit";

import {cartReducer} from "./CartReducer";
import { notificationReducer } from "./Notification";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import {productReducer} from './ProductReducer'
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root', // Storage key
    storage,
  };


  const rootReducer = combineReducers({
    cart:cartReducer,
    notification:notificationReducer,
    productReducer,
  });
  

  const persistedReducer = persistReducer(persistConfig, rootReducer);

const store=configureStore({
    reducer:persistedReducer,
})


export const persistor = persistStore(store);


export default store;
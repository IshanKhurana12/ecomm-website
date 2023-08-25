import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Product from './Product'
import Cart from './Cart'
import Addproducts from './Addproducts'
import { Provider } from 'react-redux'
import store from './redux/store'
import { Button } from 'react-bootstrap'; 
import { getInitialStateAsync } from './redux/ProductReducer'
import { useDispatch } from 'react-redux'
import Edit from './Edit'
function App() {
 
  return (
    <>
    <Router>
      <div>
        <Navbar /> 
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<Addproducts/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>

      </div>
      
    </Router>
  
    </>
  )
}

export default App



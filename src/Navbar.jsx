import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import {useSelector } from 'react-redux'

import { cartSelector } from './redux/CartReducer'


const Navbar = () => {
  
  const data=useSelector(cartSelector);
  console.log(data.length);

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <div className="container">
        <a className="navbar-brand">isheComm</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/add">Add a Product</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/cart">🛒Go to Cart</Link>
            </li>
            <li className="nav-item">
            <span className="nav-link">Items in Cart  {data.length}</span>
            </li>
          </ul>
        </div>
   
    </div>
    </nav>
    </div>
   
  )
}

export default Navbar

import React from 'react'
import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { redirectDocument } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cartReducer, cartSelector } from './redux/CartReducer';
import { Add } from './redux/CartReducer';
import Cart from './Cart';
import { reset } from './redux/Notification';
import { notificationSelector } from './redux/Notification';
import { getInitialStateAsync, productSelector } from './redux/ProductReducer';
import { Link } from 'react-router-dom';
import { compose } from '@reduxjs/toolkit';
import { deleteProduct } from './redux/ProductReducer';




const Home = () => {
    const [products,setproduct] = useState([]);
    
  
    const notification=useSelector(notificationSelector);

    if(notification){
      setTimeout(()=>{
        dispatch(reset());
      },2000)
    }
  const dispatch=useDispatch();
  const data=useSelector(productSelector)


  //making this state to handle the updated state after the deltion of avalue as iot need to be rerendered againt to show the change 
  const [reload, setReload] = useState(false);
    useEffect(()=>{
  //     const fetchdata=async()=>{
  
   
  //   const response= await fetch("https://my-json-server.typicode.com/IshanKhurana12/ecomm/products");
  //     if(response.ok){
  //       const data= await response.json();
  //     console.log(data);
  //       setproduct(data);
     
  //       console.log(products);
       
  //     }
  // }
  // fetchdata();
if(!data.length){
  dispatch(getInitialStateAsync());
}
  setproduct(data);
  console.log(data);
  if (reload) {
    // Reset the 'reload' state
    setReload(false);
  }
    },[reload])
  
    //handle delete
    const handleDelete=(e)=>{
     
      
      dispatch(deleteProduct(e.target.value));
      setReload(true);
      
    }

    //add to  cart
    const handleAddtocart=(e)=>{
      const id=Number(e.target.value);
      const name=e.target.name;
     
      
    const image=e.target.image;
     dispatch(Add({id,name}));
     console.log(notification);
    }
    //function for sort
    const sort=()=>{
      const sorted= [...products].sort(function(a, b) {
        return a.price_inr - b.price_inr;
      });
      
      setproduct(sorted);
   
      
    }
    const sorthigh=()=>{
      const sorted= [...products].sort(function(a, b) {
        return b.price_inr - a.price_inr;
      });
      
      setproduct(sorted);
   
      
    }

 


  return (
    <div className='main'>


<button onClick={sort} className='btn btn-secondary mr-3'>Price low to high</button>
<button onClick={sorthigh} className='btn btn-secondary ml-3'>Price high to low</button>

{
  notification &&
  <div className="alert alert-success" role="alert">
      {notification}
    </div>
}

<div className="d-flex flex-wrap">
  
  
    {
      
      
      products.map((product,key)=>(

        
        
      <div className="card custom-card" key={product.id} >
        <Link to={`/product/${product.id}`} className='card-link' key={product.id}>
        <img src={product.image} className="card-img-top img-fluid" alt={product.name} />
       
        <div className="card-body">

        

          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">₹{product.price_inr}</p>




          </div>
          </Link>
          <Link to={`/edit/${product.id}`}>
          <button className='btn btn-secondary'>✏️edit</button>
          </Link>
          <button className="btn btn-primary" onClick={handleAddtocart} value={product.id} name={product.name}>Add to Cart</button>
          <button className="btn btn-danger" onClick={handleDelete} value={product.id}>Remove</button>
      </div>
      
    
        
     ))

     
    }
    </div>
   </div>
  )
}

export default Home

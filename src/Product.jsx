import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { Add } from './redux/CartReducer';
import { notificationSelector } from './redux/Notification';
import { reset } from './redux/Notification';

import { Link } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { productSelector } from './redux/ProductReducer';








const Product = ({product}) => {

  const notification=useSelector(notificationSelector);

  if(notification){
    setTimeout(()=>{
      dispatch(reset());
    },2000)
  }
  const dispatch=useDispatch()
    const {id}=useParams();
    console.log(id);
    const [data,setdata]=useState([]);

    const products=useSelector(productSelector);
    console.log(products);
    useEffect(()=>{
        const getdata=async()=>{
                // const response=await fetch(`https://my-json-server.typicode.com/IshanKhurana12/ecomm/products/${id}`);
                // if(response.ok){
                //   const result=await response.json();
                //   setdata(result);
                // }
                
                // else{
                //   console.log("na nhi hua")
                //   setdata({id})
                //   console.log(id);
                // }

                console.log('URL ID:', id);
         const founditem=products.find((item)=>item.id===id);  
         console.log(founditem);
setdata(founditem);
        }
    getdata();

    },[])
   
    //handle add to cart
    const addtocart=(e)=>{
      const id=Number(e.target.value);
      const name=e.target.name;
        dispatch(Add({id,name}));
    }
   
  return (
    <>

{
  notification &&
  <div className="alert alert-success" role="alert">
      {notification}
    </div>
}
   
   
<div className="container">
    <div className="product">
      <img src={data.image} alt="Product Image" />
      <div className="product-info">
        <h2 className="product-title">{data.name}</h2>
        <p className="product-description">Product description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        {data.description}</p>
        <p className="product-price">₹{data.price_inr}</p>
        <button onClick={addtocart} className='button' value={data.id} name={data.name}>Add to Cart</button>
      </div>
    </div>
    <Link to={'/'}><button className='btn btn-secondary'>Go Back</button></Link>
  </div>
  

 
    </>
  )
}

export default Product

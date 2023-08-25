import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateProduct } from './redux/ProductReducer'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { productSelector } from './redux/ProductReducer'
import { notificationSelector } from './redux/Notification'
import { reset } from './redux/Notification'
const Edit = () => {


    const notification=useSelector(notificationSelector);
    const products=useSelector(productSelector);
    const{id}=useParams();
const dispatch=useDispatch();

const [name,setname]=useState('');
const [price_inr,setprice]=useState(null);
const [description,setdescription]=useState('');

const handlename=(e)=>{
    setname(e.target.value);
}

const handleprice=(e)=>{
    setprice(e.target.value);
}

const handledescription=(e)=>{
    setdescription(e.target.value)
}
if(notification){
    setTimeout(()=>{
      dispatch(reset());
    },2000)
  }

const founditem=products.find((item)=>item.id===id);  
console.log(founditem);

const handlesubmit=()=>{
    const image=founditem.image;
    const updatedProduct = {name,price_inr,description,id,image};
    dispatch(updateProduct({id,updatedProduct}))
    console.log("updated");
}

const handleLinkClick = event => {
    if (!inputValue) {
      event.preventDefault();
      alert('Please fill in the input field.');
    }
  };



  return (
    <div>
        {
  notification &&
  <div className="alert alert-success" role="alert">
      {notification}
    </div>
}
  
      <input type="text" value={name}  onChange={handlename} placeholder={founditem.name} required/>
      <input type="text" value={price_inr}  onChange={handleprice} placeholder={founditem.price_inr} required/>
      <input type="text-area" value={description}  onChange={handledescription} placeholder={founditem.description} required/>
     
      <button onClick={handlesubmit}>Save</button>
      <Link to={'/'}>
      <button>Go-Back</button></Link>
    </div>
  )
}

export default Edit

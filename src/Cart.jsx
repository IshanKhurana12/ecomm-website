import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { cartSelector } from './redux/CartReducer'
import { notificationSelector } from './redux/Notification'
import { Remove } from './redux/CartReducer'
import { reset } from './redux/Notification'
import { Link } from 'react-router-dom'
const Cart = () => {
  const data=useSelector(cartSelector);
  const deletenotification=useSelector(notificationSelector);
  const dispatch=useDispatch();
  if(deletenotification){
    setTimeout(()=>{
      dispatch(reset());
    },2000)
  }
const handledelete=(e)=>{
  const id=Number(e.target.value);

  dispatch(Remove(id));
}


console.log(data);
  return (
    <div>
      <h1>Cart</h1>
    <div>
      {
        deletenotification &&
    <div className="alert alert-danger" role="alert">
      {deletenotification}
    </div>
}
      {
        data.map((product,key)=>(
          <div key={key}>
          <h1>{product.name}</h1>
          <h3></h3>
          <button value={product.id} onClick={handledelete}>🗑️Remove</button>
          </div>
        ))
      }
    </div>

  
   
    </div>
  )
}

export default Cart

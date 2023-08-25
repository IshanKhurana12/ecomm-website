import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from './redux/ProductReducer';
import { Link } from 'react-router-dom';

const Addproducts = () => {

  const [name,setname]=useState('');
  const [description,setdescription]=useState('');
  const [image,setimage]=useState('');
  const [price_inr,setprice]=useState(0);
const [id,setid]=useState(0);
  
const handleid=(e)=>{
  
  setid(e.target.value);
}
  const handlename=(e)=>{
    setname(e.target.value);
  }
  const handleimage=(e)=>{
    setimage(e.target.value);
  }
  const handledescription=(e)=>{
    setdescription(e.target.value);
  }
  const handleprice=(e)=>{
    const data=Number(e.target.value);
    setprice(data);
  }


  console.log(name,description,image)
 const dispatch=useDispatch();
  const handlesubmit=()=>{
    dispatch(add({id,name,description,image,price_inr}));
    console.log("added");
  }

  return (
    <div>
      Add a product
      <div className="form-group">
<label htmlFor="id">Enter unique id</label>
<input type="text" name="id" id="id" value={id} onChange={handleid} />

      <label htmlFor="name" >Enter title</label>
      <input type="text" name="name" id="name" className="form-control" placeholder='enter title' onChange={handlename} value={name} required/>

      <label htmlFor="description" >enter description</label>
      <input type="text" name="description" className="form-control" value={description} onChange={handledescription} required/>

      <label htmlFor="image">enter image link</label>
      <input type="text" name='image' className="form-control" onChange={handleimage} value={image} required/>

      <label htmlFor="price">enter price</label>
      <input type="text"  id='price' className="form-control" onChange={handleprice} value={price_inr} required/>
      <Link to={"/"}>
      <button onClick={handlesubmit} className="btn btn-primary">submit</button>
      </Link>
    
    </div>
    </div>
  )
}

export default Addproducts

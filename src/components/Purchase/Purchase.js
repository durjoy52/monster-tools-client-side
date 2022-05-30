import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Purchase = () => {
    const {id} = useParams()
    const [user,loading] = useAuthState(auth)
    const {data:product,reset} = useQuery('purchase',()=>fetch(`http://localhost:5000/products/${id}`).then(res=>res.json()))
    const [orderQuantity,setOrderQuantity] = useState(null)
    if(loading){
        return<Loading/>
    }
    const pricePerUnit =product?.price
    const totalPrice = parseInt(orderQuantity) * parseInt(pricePerUnit)
    const handleSubmit = event =>{
        event.preventDefault()
        const userName = event.target.userName.value
        const name = event.target.name.value;
        const email =event.target.email.value;
        const phone =event.target.phone.value
        const address =event.target.address.value
        if( product?.available_quantity < orderQuantity || orderQuantity < product?.minimum ){
            return
        }
        const order = {userName,name,phone,orderQuantity,email,address,totalPrice,pricePerUnit}
            fetch('http://localhost:5000/orders',{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(order)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
                if(data.insertedId){
                    fetch('http://localhost:5000/orders',{
                        method:'PUT',
                        headers:{
                        "content-type": "application/json"
                        },
                        body:JSON.stringify({available_quantity:parseInt(product?.available_quantity) - parseInt(orderQuantity)})
                    })
                }
                reset()
            })
            
    }
    return (
        <div className='container mx-auto flex justify-evenly flex-col md:flex-row items-center md:h-screen gap-4'>
            <div className="card rounded-none card-compact w-80 lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={product?.img} alt={product?.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{product?.name}</h2>
    <p>{product?.description}</p>
    <div className='flex justify-between'>
        <p>Minimum-Order: {product?.minimum}</p>
        <p>Price: ${product?.price} per pieces</p>
    </div>
    <p>Available-Quantity: {product?.available_quantity}</p>
  </div>
</div>
            <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
  <div className="card-body">
      <h2 className="text-center font-bold">Purchase now: <span className='text-purple-500'>{product?.name}</span></h2>
    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
        <input name='userName' className="input input-bordered w-full max-w-xs" type="text" value={user?.displayName} disabled/>
        <input name='name' className="input input-bordered w-full max-w-xs" type="text" value={product?.name} disabled/>
        <input className="input input-bordered w-full max-w-xs" type="text" name='email' value={user?.email} disabled/>
        <input type="text" name='address' placeholder='your address' className="input input-bordered w-full max-w-xs" required/>
        <input className="input input-bordered w-full max-w-xs" type="text" name='phone' placeholder='phone number' />
        <input onChange={(e)=>setOrderQuantity(e.target.value)} type="number" name='orderQuantity' placeholder="order quantity" className="input input-bordered input-sm w-full max-w-xs" min={1} max={product?.available_quantity} required />
        {
            (orderQuantity < product?.minimum) && <span className='text-red-500 text-left'><small>Minimum order quantity {product?.minimum} is required</small></span>
        }
        <input type="submit" value="Purchase Now" className="btn btn-accent text-white w-full max-w-xs"  />
    </form>
  </div>
</div>
        </div>
    );
};

export default Purchase;
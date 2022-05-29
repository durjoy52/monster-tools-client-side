import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Purchase = () => {
    const {id} = useParams()
    const [user,loading] = useAuthState(auth)
    const {data:product} = useQuery('purchase',()=>fetch(`http://localhost:5000/products/${id}`).then(res=>res.json()))
    const [orderQuantity,setOrderQuantity] = useState(null)
    if(loading){
        return<Loading/>
    }
    const handleSubmit = event =>{
        event.preventDefault()
        const userName = event.target.userName.value
        const name = event.target.name.value;
        const email =event.target.email.value;
        const phone =event.target.phone.value
        const orderQuantity = event.target.orderQuantity.value;
        if( product?.available_quantity < orderQuantity || orderQuantity < product?.minimum ){
            return
        }
    }
    return (
        <div className='container mx-auto flex justify-evenly flex-col md:flex-row items-center md:h-screen gap-4'>
            <div class="card rounded-none card-compact w-80 lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={product?.img} alt={product?.name} /></figure>
  <div class="card-body">
    <h2 class="card-title">{product?.name}</h2>
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
        <input name='name' className="input input-bordered w-full max-w-xs" type="text" value={`Product: ${product?.name}`} disabled/>
        <input className="input input-bordered w-full max-w-xs" type="text" name='email' value={user?.email} disabled/>
        <input type="text" name='address' placeholder='your address' className="input input-bordered w-full max-w-xs" required/>
        <input className="input input-bordered w-full max-w-xs" type="text" name='phone' placeholder='phone number' />
        <input onChange={(e)=>setOrderQuantity(e.target.value)} type="number" name='orderQuantity' placeholder="order quantity" class="input input-bordered input-sm w-full max-w-xs" min={1} max={product?.available_quantity} required />
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
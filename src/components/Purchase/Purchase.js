import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Purchase = () => {
    const {id} = useParams()
    const [user,loading] = useAuthState(auth)
    const {data:product} = useQuery('purchase',()=>fetch(`http://localhost:5000/products/${id}`).then(res=>res.json()))
    if(loading){
        return<Loading/>
    }
    const handleSubmit = event =>{
        event.preventDefault()
    }
    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
  <div className="card-body">
      <h2 className="text-center font-bold">Purchase now: <span className='text-purple-500'>{product?.name}</span></h2>
    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
        <input className="input input-bordered w-full max-w-xs" type="text" value={user?.displayName} disabled/>
        <input className="input input-bordered w-full max-w-xs" type="text" value={user?.email} disabled/>
        <input type="text" name='address' placeholder='your address' className="input input-bordered w-full max-w-xs"/>
        <input className="input input-bordered w-full max-w-xs" type="text" name='phone' placeholder='phone number' />
        <input type="text" name="order_quantity" placeholder='quantity' className="input input-bordered w-full max-w-xs" />
        <input type="submit" value="Purchase Now" className="btn btn-accent text-white w-full max-w-xs"  />
    </form>
  </div>
</div>
        </div>
    );
};

export default Purchase;
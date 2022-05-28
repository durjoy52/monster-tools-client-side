import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Purchase = () => {
    const [user,loading] = useAuthState(auth)
    if(loading){
        return<Loading/>
    }
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
      <div className="text-center">Purchase now !!</div>
    <form>
        <input className="input input-bordered w-full max-w-xs" type="text" value={user?.displayName} disabled/>
        <input className="input input-bordered w-full max-w-xs" type="text" value={user?.email} disabled/>
        <input className="input input-bordered w-full max-w-xs" type="text" name='phone' placeholder='phone number' />
        <input type="number" name="order_quantity" className="input input-bordered w-full max-w-xs" />
    </form>
  </div>
</div>
        </div>
    );
};

export default Purchase;
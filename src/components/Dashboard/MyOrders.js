import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [user]= useAuthState(auth)
    const {data:orders} = useQuery('myOrders',()=> fetch(`http://localhost:5000/orders/${user?.email}`,{
      method:'GET',
      headers:{
        'content-type':'application/json',
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res=>res.json()))
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>n</th>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Per Unit Price</th>
        <th>Total Price</th>
      </tr>
    </thead>
    <tbody>
        {
            orders?.map((order,index)=><tr key={order._id}>
                <th>{index}</th>
                <td>{order.name}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.pricePerUnit}</td>
                <td>$ {order.totalPrice}</td>
              </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;
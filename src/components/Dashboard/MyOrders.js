import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const MyOrders = () => {
  const [deletingProduct,setDeletingProduct] = useState(null)
  const [user]= useAuthState(auth)
    const {data:orders,refetch} = useQuery('myOrders',()=> fetch(`http://localhost:5000/orders/${user?.email}`,{
      method:'GET',
      headers:{
        'content-type':'application/json',
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res=>res.json()))
    const handleDelete = id =>{

      fetch(`http://localhost:5000/order/${id}`,{
          method:'DELETE',
          headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          if(data.deletedCount){
              toast.success(`The order has been removed`)
              setDeletingProduct(null)
              refetch()
          }
      })
  }
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
        <th>Payment</th>
        <th>Cancel Order</th>
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
                <td>
                  {
                    !order.paid && <Link to={`/dashboard/payment/${order._id}`}  className="btn btn-xs btn-success ">Pay</Link>
                  }
                  {
                    order.paid && <span className="text-success">Paid</span>
                  }
                </td>
                <td><label onClick={()=>setDeletingProduct(order)} htmlFor="my-modal" className="btn btn-xs ">Cancel</label></td>
              </tr>)
        }
    </tbody>
  </table>
</div>
{
  deletingProduct && <DeleteConfirmationModal deletingProduct={deletingProduct} handleDelete={handleDelete}></DeleteConfirmationModal>
}
        </div>
    );
};

export default MyOrders;
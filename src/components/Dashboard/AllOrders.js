import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const AllOrders = () => {
    const [deletingProduct,setDeletingProduct] = useState(null)
    const {data:orders,refetch} = useQuery('myOrders',()=> fetch(`https://dry-reef-40220.herokuapp.com/orders`,{
      method:'GET',
      headers:{
        'content-type':'application/json',
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res=>res.json()))
    const handleDelete = id =>{

      fetch(`https://dry-reef-40220.herokuapp.com/order/${id}`,{
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

  const handleShip = (id) =>{
    fetch(`https://dry-reef-40220.herokuapp.com/order/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
      },
      body:JSON.stringify({shipped:true})
    })
    .then(res=>res.json())
    .then(data=>{
console.log(data)
if(data.modifiedCount > 0){
  refetch()
  toast.success('Order delivered',{id:'ok'})
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
        <th>Shipping</th>
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
                    !order.paid ? <p className="text-cyan-600">Unpaid</p>: <p className="text-success">paid</p>
                  }
                </td>
                <td>
                  {
                   !order.shipped && order.paid && <>
                   <span className="text-purple-600 pr-1">Pending</span>
                   <label onClick={()=>handleShip(order._id)} className='btn btn-xs'>Ship</label>
                   </>
                  
                  }
                  {
                    (order.paid && order.shipped) &&  <p className="text-emerald-800 font-bold">Shipped</p>
                  }
                </td>
                <td>
                  {
                    !order.paid && <label onClick={()=>setDeletingProduct(order)} htmlFor="my-modal" className="btn btn-xs ">Cancel</label>
                  }
                </td>
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

export default AllOrders;
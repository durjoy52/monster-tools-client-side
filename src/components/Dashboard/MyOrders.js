import React from 'react';
import { useQuery } from 'react-query';

const MyOrders = () => {
    const {data:orders} = useQuery('myOrders',()=> fetch('http://localhost:5000/orders').then(res=>res.json()))
    console.log(orders)
    return (
        <div>
            <div class="overflow-x-auto">
  <table class="table w-full">
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
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const ManageProducts = () => {
    const [deletingProduct,setDeletingProduct] = useState(null)
    const {data:products,isLoading,refetch} = useQuery('getproducts',()=>fetch('http://localhost:5000/products').then(res=>res.json()))
    if(isLoading){
        return <Loading/>
    }

    const handleDelete = id =>{

      fetch(`http://localhost:5000/product/${id}`,{
          method:'DELETE',
          headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data)
          if(data.deletedCount){
              toast.success(`the product has been deleted`)
              setDeletingProduct(null)
              refetch()
          }
      })
  }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table hover:overflow-scroll md:table-fixed">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>n</th>
        <th>image</th>
        <th>name</th>
        <th>price per unit</th>
        <th>available quantity</th>
        <th>order_quantity</th>
      </tr>
    </thead>
    <tbody>
        {
            products?.map((product,index)=><tr key={product._id}>
                <th>{index}</th>
                <td><img width={60} classNameName='rounded-full' src={product.img} alt="" /></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.available_quantity}</td>
                <td>{product.order_quantity}</td>
                <td><label onClick={()=>setDeletingProduct(product)} for="my-modal" className="btn btn-xs btn-error">Remove</label></td>
              </tr>)
        }
      
    </tbody>
  </table>
</div>
{
    deletingProduct && <DeleteConfirmationModal handleDelete={handleDelete} deletingProduct={deletingProduct}></DeleteConfirmationModal>
}
        </div>
    );
};

export default ManageProducts;
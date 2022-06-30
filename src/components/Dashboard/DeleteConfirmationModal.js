import React from 'react';
import { useLocation } from 'react-router-dom';

const DeleteConfirmationModal = ({handleDelete,deletingProduct}) => {
    const {pathname} = useLocation()
    const {name,_id,available_quantity,img,totalPrice,orderQuantity} =deletingProduct
    return (
        <div>
           {/* <!-- The button to open modal --> */}


<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    {
        pathname.includes('/dashboard/manageproducts') ? <>
        <h3 className="font-bold text-lg text-red-600">Are your sure to delete {name}</h3>
    <p className="py-4">Available Product: <span className='border p-1 text-cyan-500 rounded-xl'> {available_quantity}</span> pieces</p>
        </>: <>
        <h3 className="font-bold text-lg text-warning mb-4">Are your sure to cancel {name} order</h3>
        <p className="py-4">Total pieces: <span className='border p-1 text-cyan-500 rounded-xl'> {orderQuantity}</span> pieces</p>
        <p className="py-4">Total price:$ <span className='border p-1 text-cyan-500 rounded-xl'> {totalPrice}</span></p>
        </>
    }
    <img src={img} alt="" />
    <div className="modal-action">
    <button onClick={()=>handleDelete(_id)} htmlFor="my-modal" className="btn btn-error">Remove</button>
      <label htmlFor="my-modal" className="btn">Cancel</label>
    </div>
  </div>
</div> 
        </div>
    );
};

export default DeleteConfirmationModal;
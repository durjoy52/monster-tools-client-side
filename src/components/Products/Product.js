import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product,refetch}) => {
    const {img,name,description,available_quantity,price,_id,order_quantity} = product
    refetch()
    return (
        <div className="card bg-base-100 shadow-xl mb-6">
  <figure className="px-10 pt-10">
    <img src={img} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="grid grid-cols-2 gap-y-3">
    <p className='text-xl'>Price(per unit):$<span className='border p-1 text-violet-500 font-bold rounded-xl'>{price}</span></p>
    <p className='text-xl'>Available: <span className='border p-1 text-cyan-500 rounded-xl'>{available_quantity}</span> pieces</p>
    <p className='text-xl'>Minimum-order:<span className='border p-1 text-cyan-500 rounded-xl'>{order_quantity}</span> pieces</p>
    </div>
    <div className="card-actions">
    <Link className="btn btn-error text-white" to={`/purchase/${_id}`}>Order Now</Link>
    </div>
  </div>
</div>
    );
};

export default Product;
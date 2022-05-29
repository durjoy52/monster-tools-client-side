import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {img,name,description,available_quantity,price,_id,minimum} = product
    return (
        <div className="card bg-base-100 shadow-xl mb-6">
  <figure className="px-10 pt-10">
    <img src={img} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p className='text-xl'>Price(per unit): <span className='text-red-400'>${price}</span></p>
    <p className='text-xl'>Available: {available_quantity}pieces</p>
    <p className='text-xl'>Minimum-order: {minimum} pieces</p>
    <div className="card-actions">
    <Link className="btn btn-error text-white" to={`/purchase/${_id}`}>Order Now</Link>
    </div>
  </div>
</div>
    );
};

export default Product;
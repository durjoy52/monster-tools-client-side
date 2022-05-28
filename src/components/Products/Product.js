import React from 'react';

const Product = ({product}) => {
    const {img,name,description,available_quantity,price} = product
    return (
        <div class="card bg-base-100 shadow-xl mb-6">
  <figure class="px-10 pt-10">
    <img src={img} alt={name} class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    <p className='text-xl'>Price(per unit): <span className='text-red-400'>${price}</span></p>
    <p className='text-xl'>Available: {available_quantity}</p>
    <div class="card-actions">
      <button class="btn btn-error text-white">Order Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;
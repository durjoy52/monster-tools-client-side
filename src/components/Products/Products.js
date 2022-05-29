import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import Product from './Product';

const Products = () => {

  const {data,isLoading} = useQuery('products',()=> fetch('http://localhost:5000/products').then(res=>res.json()))
  if(isLoading){
      return <Loading/>
  }
    return (
        <div id='products' className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
           {
               data.map(product=><Product key={product._id} product={product}></Product>)
           }
        </div>
    );
};

export default Products;
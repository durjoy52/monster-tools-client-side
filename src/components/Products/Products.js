import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Product from './Product';

const Products = () => {
const {pathname} = useLocation()
  const {data:products,isLoading,refetch} = useQuery('products',()=> fetch('http://localhost:5000/products').then(res=>res.json()))
  if(isLoading ||isLoading){
      return <Loading/>
  }
  let productCollection = products
  if(!pathname.includes('/allproducts')){
    productCollection = products.slice(0,6)
  }
    return (
        <div className="container mx-auto">
          {
            !pathname.includes('/') && <h3 className='text-center text-3xl text-stone-600'>All Products</h3>
          }
          <div id='products' className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
           {
               productCollection?.map(product=><Product refetch={refetch} key={product._id} product={product}></Product>)
           }
        </div>
        </div>
    );
};

export default Products;
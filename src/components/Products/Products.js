
import { MdArrowRight } from 'react-icons/md';
import { useQuery } from 'react-query';
import { Link, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Product from './Product';
const Products = ({fade}) => {
const {pathname} = useLocation()
  const {data:products,isLoading,refetch} = useQuery('products',()=> fetch('https://dry-reef-40220.herokuapp.com/products').then(res=>res.json()))

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
            pathname.includes('/allproducts') && <h3 className='text-center text-3xl text-stone-600 mb-4 bg-red-200'>All Products</h3>
          }
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'  id='products'>
           {
               productCollection?.map((product)=><Product refetch={refetch} key={product._id} product={product}></Product>)
           }
        </div>
        {
          !pathname.includes('/allproducts') && 
          <div className="flex justify-end">
        <Link to='/allproducts' className='btn btn-accent text-white'>More products<MdArrowRight fontSize={30}/></Link>
        </div>
        }
        </div>
    );
};

export default Products;
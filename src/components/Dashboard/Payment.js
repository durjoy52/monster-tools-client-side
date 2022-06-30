import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4MXVDJT6ZpOGCqfhDlYZSqQNACDzSCpfEHGkoMWxelAO1VzqC4Mi7OjZrTYmA0HddoNGYhqTlSs19h8DHPyZTl00pGrkvyjt');
const Payment = () => {
    const {id} = useParams()
    const {data:product,isLoading} =useQuery(['paymentProduct',id],()=>fetch(`https://dry-reef-40220.herokuapp.com/order/${id}`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res=>res.json()))
      console.log(product)
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Product Name: {product?.name}</h2>
   <img className='h-60' src={product?.img} alt="" />
    <p>Product Quantity: {product?.orderQuantity}</p>
    <p>Total Prict: ${product?.totalPrice}</p>
  </div>
</div>
    <div className="card w-80 lg:w-96 shadow-2xl bg-base-100">
      <div className="card-body">
      <Elements stripe={stripePromise}>
      <CheckoutForm product={product}/>
    </Elements>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Payment;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({product}) => {
    const [clientSecret,setClientSecret] = useState('')
    const stripe = useStripe()
    const elements = useElements();
    const [cardError,setCardError] = useState('')
    const [success,setSuccess] = useState('')
    const [transactionId,setTransectionId] = useState('')
    const [processing,setProcessing] = useState(false)

    const {totalPrice,email,displayName,_id} = product
    useEffect(()=>{
        fetch('https://dry-reef-40220.herokuapp.com/create-payment-intent',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify({totalPrice})
        })
        .then(res=>res.json())
        .then(data=>{
if(data?.clientSecret){
    setClientSecret(data.clientSecret)
}
        })
    },[totalPrice])
    const handleSubmit = async(event) =>{
        event.preventDefault()
        if (!stripe || !elements) {
            return;
          }
    
          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }
            const {error,paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card,
              });
                setCardError(error?.message || '');
                setSuccess('')
                setProcessing(true)
                const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
                    clientSecret,
                    {
                      payment_method: {
                        card: card,
                        billing_details: {
                          name: displayName,
                          email:email
                        },
                      },
                    },
                  );
                  if(intentError){
                      setCardError(intentError?.message)
                      setProcessing(false)
                  }else{
                      setCardError('')
                      console.log(paymentIntent)
                      setTransectionId(paymentIntent.id)
                      setSuccess('Congrats ! your payment is completed')

                      const payment = {
                          order : _id,
                          transactionId:paymentIntent.id
                      }

                      fetch(`https://dry-reef-40220.herokuapp.com/order/${_id}`,{
                          method:'PATCH',
                          headers:{
                            'content-type':'application/json',
                            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                          },
                          body:JSON.stringify(payment)
                      }).then(res=>res.json())
                      .then(data=>{
                          setProcessing(false)
                          console.log(data)
                      })
                  }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-accent text-white mt-4' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError && <p className='text-red-600'>{cardError}</p>
    }
    {
        success && <>
        <p className="text-green-600">{success}</p>
        <p className="text-green-600">Your transaction Id: <span className="text-orange-500">{transactionId}</span></p>
        </>
    }
        </div>
    );
};

export default CheckoutForm;
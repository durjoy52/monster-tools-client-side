import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const handleReview = event =>{
        event.preventDefault()
        const rating = event.target.rating.value
        const reviewText = event.target.reviewText.value
        const userName = user?.displayName;
        const userImg = user?.photoURL
        fetch('http://localhost:5000/review',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({rating,reviewText,userName,userImg})
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            event.target.reset()
        })
    }
    return (
        <div className='container mx-auto flex justify-center'>
            <div className="card max-w-xs bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Add a feedback or review</h2>
   <form onSubmit={handleReview}>
   <div className="rating rating-md">
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value={1} />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value={2} />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value={3} />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value={4} defaultChecked />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value={5} />
</div>
    <textarea name="reviewText" className='textarea textarea-primary w-full' ></textarea>
   <div className="card-actions justify-end">
   <input type="submit" className='btn btn-primary' value="Add review" />
   </div>
   </form>
  </div>
</div>
        </div>
    );
};

export default AddReview;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='container flex justify-center mx-auto'>
            <div class="card card-side flex flex-col lg:flex-row bg-base-100 shadow-xl">
  <figure><img src={user?.photoURL} alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">Your name: {user?.displayName}</h2>
    <p>your email: {user?.email}</p>
    <p>your education:</p>
    <p>your location:</p>
    <p>your phone number:</p>
    <p>your Linkedin-Link:</p>
    <div class="card-actions justify-end">
      <Link to='/dashboard/editprofile' class="btn btn-primary">Edit your profile</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProfile;
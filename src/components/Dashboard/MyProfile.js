import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
const [profile,setProfile] = useState({})
    useEffect(()=>{
        const email =user?.email
        fetch(`http://localhost:5000/userProfile/${email}`,{
                method:'GET',
                headers:{
                    'content-type':'application/json'
                }
            })
            .then(res =>res.json())
            .then(data =>{
                setProfile(data)
            })
        }
    ,[user])
    return (
        <div className='container flex justify-center mx-auto'>
            <div className="card card-side flex flex-col lg:flex-row bg-base-100 shadow-xl">
  <figure><img src={user?.photoURL} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Your name: {user?.displayName}</h2>
    <p>your email: {user?.email}</p>
    <p>your education:{profile?.education}</p>
    <p>your location:{profile?.location}</p>
    <p>your phone number:{profile?.phone}</p>
    <p>your Linkedin-Link: <a href={profile?.linkedin} className="btn btn-active btn-link">{profile?.linkedin}</a></p>
    <div className="card-actions justify-end">
      <Link to='/dashboard/editprofile' className="btn btn-primary">Edit your profile</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyProfile;
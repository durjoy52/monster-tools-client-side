import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
const [profile,setProfile] = useState({})
const photoURL = user?.photoURL
    useEffect(()=>{
        const email =user?.email
        fetch(`http://localhost:5000/userProfile/${email}`,{
                method:'GET',
                headers:{
                    'content-type':'application/json',
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res =>{
                if(res.status === 401 || res.status ===403){
                    signOut(auth)
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            })
            .then(data =>{
                setProfile(data)
            })
        }
    ,[navigate,user])
    return (
        <div className='container flex justify-center mx-auto'>
            <div className="card lg:w-96 w-80 bg-base-100 shadow-xl">
  <figure className='px-10 pt-10'><img width={120} className='rounded-full' src={photoURL} alt="Movie"/></figure>
  <div className="card-body items-center text-center">
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
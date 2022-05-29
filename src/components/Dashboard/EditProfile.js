import React from 'react';
import { useUpdateEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import { BsFillImageFill } from 'react-icons/bs';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const EditProfile = () => {
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [updateEmail, emailUpdating, error1] = useUpdateEmail(auth);
    if(updating){
        return <Loading/>
    }
    const handleUpdate = async(event) =>{
        const displayName = event.target.name.value;
        const photoURL = event.target.image.value;
        const phone = event.target.phone.value;
        const location = event.target.location.value;
        const education = event.target.education.value;
        const linkedin = event.target.linkedin.value;
        const email = event.target.email.value;
       await updateProfile({displayName,photoURL})
       await updateEmail({})
    }
    return (
        <div>
            <h3 className="text-3xl text-center text-blue-600">Update your profile</h3>
            <form onSubmit={handleUpdate}>
                <div class="card-body w-80">
        <div class="form-control">
          <label class="label">
            <span class="label-text">new name</span>
          </label>
          <input type="text" placeholder="name" name='name' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">new email</span>
          </label>
          <input type="email" placeholder="email" name='email' class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">education</span>
          </label>
          <input type="text" name='education' placeholder="education" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Linkedin</span>
          </label>
          <input type="text" name='linkedin' placeholder="give linkedin link" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">location</span>
          </label>
          <input type="text" name='location' placeholder="location" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">phone number</span>
          </label>
          <input type="text" name='phone' placeholder="phone number" class="input input-bordered" />
        </div>
        <div class="form-control">
        <label htmlFor="img" className="bg-slate-300  flex justify-center input-bordered input items-center rounded">
           <span className='text-xl'>Choose image </span> <BsFillImageFill className="text-5xl"/>
          </label>
          <input id='img' name='image' type="file" placeholder="education" class="input input-bordered hidden" />
        </div>
        <div class="form-control mt-6">
          <input class="btn btn-primary" type="submit" value="update profile" />
        </div>
      </div>
            </form>
        </div>
    );
};

export default EditProfile;
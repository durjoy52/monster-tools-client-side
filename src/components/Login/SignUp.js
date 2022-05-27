import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    return (
        <div className=' container mx-auto h-screen'>
            <div class="flex justify-center items-center">
       <div className="card w-96 bg-base-100 shadow-xl">
           <div className="card-body">
            <h2 className='text-2xl font-bold text-center'>Please Register</h2>
           <form>
           <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" class="input input-bordered" />
        </div>
           <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" required />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" minLength={6} />
        </div>
        <div class="form-control mt-4">
          <input type="submit" value="Sign Up" className='btn btn-primary' />
        </div>
           </form>
           </div>
           <p className='text-center mb-4'><small>Already have an account?<Link className='text-primary' to="/login">Please Login</Link></small></p>
       </div>
      </div>
      <SocialLogin/>
    </div>
    );
};

export default SignUp;
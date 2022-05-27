import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div className=' container mx-auto h-screen'>
            <div class="flex justify-center items-center">
       <div className="card w-96 bg-base-100 shadow-xl">
           <div className="card-body">
            <h2 className='text-2xl font-bold text-center'>Please Login...</h2>
           <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" class="input input-bordered" minLength={6} />
          <label class="label">
            <p><small>Forgot password?<span  class="text-primary cursor-pointer">Reset password</span></small></p>
          </label>
        </div>
        <div class="form-control">
          <input type="submit" value="Login" className='btn btn-primary' />
        </div>
           </div>
           <p className='text-center mb-4'><small>New to Monster Tools <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
       </div>
      </div>
      <SocialLogin/>
    </div>
    );
};

export default Login;
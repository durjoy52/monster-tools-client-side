import React, { useEffect } from 'react';
import { useSendEmailVerification, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../useToken';
import Loading from '../Loading/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(
    auth
  );
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    signInWithEmailAndPassword(data.email,data.password)
  };
  const [token] = useToken(user || gUser)
  useEffect(()=>{
    if (token) {
      navigate(from,{replace:true})
      toast.success('you ar sign in now',{id:'sign'})
     }
  },[token,navigate,from])
  if(loading || gLoading || sending){
    return <Loading/>
  }
  let signInError;
  if(error || gError){
    signInError = <p className="text-red-500">{error?.message || gError?.message}</p>
  }
  return (
    <div className='flex h-screen justify-center items-center m-2'>
    <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>

                {signInError}
                <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Login" />
            </form>
            <p><small>New to Monster Tools? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
            <SocialLogin sendEmailVerification={sendEmailVerification} signInWithGoogle={signInWithGoogle}/>
        </div>
    </div>
</div >
    );
};

export default Login;
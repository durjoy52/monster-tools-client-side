import React from 'react';
import google from '../../assets/logo/Google_logo.png';
const SocialLogin = ({signInWithGoogle,sendEmailVerification}) => {
    const googleSignIn =async()=>{
      await signInWithGoogle()
      await sendEmailVerification()
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='flex justify-center'>
            <button onClick={googleSignIn} className="btn btn-active btn-ghost h-full font-bold mb-4"><img width={60} src={google} alt="google" /> Continue With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
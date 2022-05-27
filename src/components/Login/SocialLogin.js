import React from 'react';
import google from '../../assets/logo/Google_logo.png';
const SocialLogin = () => {
    return (
        <div>
            <div class="divider">OR</div>
            <div className='flex justify-center'>
            <button class="btn btn-active btn-ghost h-full font-bold"><img width={60} src={google} alt="google" /> Continue With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
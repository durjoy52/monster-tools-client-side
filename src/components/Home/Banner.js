import React from 'react';
import banner from '../../assets/banner.png';
const Banner = () => {
    return (
        <div class="hero min-h-screen mb-6" style={{backgroundImage:`url(${banner})`}}>
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-2xl">
            <h1 class="mb-5 text-5xl font-semibold ">We provide best quality tools with affordable</h1>
            <button class="btn btn-accent text-white font-bold">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;
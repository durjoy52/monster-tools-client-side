import React from 'react';
import banner from '../../assets/banner.png';
const Banner = () => {
    return (
        <div className="hero min-h-screen mb-6" style={{backgroundImage:`url(${banner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-semibold ">We provide best quality tools with affordable</h1><a className="btn btn-accent text-white font-bold" href="/#products">Get Started</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;
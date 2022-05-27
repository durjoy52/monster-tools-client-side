import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import sideImg from '../../assets/sideImg.jpg';
const SideSection = () => {
    return (
        <div className="hero my-6">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={sideImg} className="max-w-xs lg:max-w-md rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 className="text-4xl font-bold uppercase">Reliable and professional</h1>
      <p className="py-6">We are manufacturing products with world className quality.Supplying the world with high quality vehicle tools.</p>
      <button className="btn btn-success text-white">Read More <RiArrowRightSLine className='text-xl'/></button>
    </div>
  </div>
</div>
    );
};

export default SideSection;
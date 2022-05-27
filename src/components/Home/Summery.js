import React from 'react';
import { FaStarHalfAlt, FaTools } from 'react-icons/fa';
import { FiDollarSign } from 'react-icons/fi';
import peoples from '../../assets/logo/peoples.png';
const Summery = () => {
    return (
        <div className='mb-6'>
            <div className="text-center">
            <h2 className='text-5xl font-bold uppercase'>Millions of people trust us</h2>
            <h3 className='text-2xl text-purple-400 uppercase'>Try to understand buyer expectation</h3>
            </div>
            <div className="divider"></div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
            <div class="stat place-items-center">
    <div class="stat-title">Customers</div>
    <img width={80} src={peoples} alt="" />
    <div class="stat-value text-red-300">100+</div>
    <div class="stat-desc">From January 1st to March 1st</div>
  </div>
            <div class="stat place-items-center">
    <div class="stat-title"> Annual revenue</div>
    <FiDollarSign className='text-5xl text-warning'/>
    <div class="stat-value text-secondary">120M+</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
            <div class="stat place-items-center">
    <div class="stat-title"> Reviews</div>
    <FaStarHalfAlt className='text-5xl text-teal-400'/>
    <div class="stat-value text-emerald-400">33K+</div>
    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
            <div class="stat place-items-center">
    <div class="stat-title"> Tools</div>
    <FaTools className='text-5xl text-cyan-500'/>
    <div class="stat-value text-cyan-600">50+</div>
  </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
  <div className="card-body">
  <div class=" lg:flex justify-between hidden">
    <div>
    <h2 class="text-3xl font-bold text-sky-800">Have any question about us or get a products request ?</h2>
    <h3 className='text-2xl text-cyan-600'>Don't hesitate to contact us</h3>
    </div>
    <div>
        <button className='btn m-2'>Request For Quote</button>
        <button className='btn btn-outline'>Contact Us</button>
    </div>
  </div>
  </div>
</div>
        </div>
    );
};

export default Summery;
import React from 'react';
import CountUp from 'react-countup';
import { FaStarHalfAlt, FaTools } from 'react-icons/fa';
import { FiDollarSign } from 'react-icons/fi';
import peoples from '../../assets/logo/peoples.png';
const Summery = () => {
    return (
        <div className='mb-6'>
            <div className="text-center">
            <h2 className='text-4xl font-bold uppercase'>Millions of people trust us</h2>
            <h3 className='text-2xl text-red-600 uppercase'>Try to understand buyer expectation</h3>
            </div>
            <div className="divider"></div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
            <div className="stat place-items-center">
    <div className="stat-title">Customers</div>
    <img width={80} src={peoples} alt="" />
    <div className="stat-value text-red-300"><CountUp duration={3} end={100} suffix='+'/></div>
    <div className="stat-desc">From January 1st to March 1st</div>
  </div>
            <div className="stat place-items-center">
    <div className="stat-title"> Annual revenue</div>
    <FiDollarSign className='text-5xl text-warning'/>
    <div className="stat-value text-secondary"><CountUp end={120} duration={3} suffix='M+'/></div>
    <div className="stat-desc">21% more than last month</div>
  </div>
            <div className="stat place-items-center">
    <div className="stat-title"> Reviews</div>
    <FaStarHalfAlt className='text-5xl text-teal-400'/>
    <div className="stat-value text-emerald-400"><CountUp end={33} duration={3} suffix='K+'/></div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
            <div className="stat place-items-center">
    <div className="stat-title"> Tools</div>
    <FaTools className='text-5xl text-cyan-500'/>
    <div className="stat-value text-cyan-600"><CountUp end={50} duration={3} suffix='+'/></div>
  </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
  <div className="card-body hidden">
  <div className=" lg:flex justify-between ">
    <div>
    <h2 className="text-3xl font-bold text-sky-800">Have any question about us or get a products request ?</h2>
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
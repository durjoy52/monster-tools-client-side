import React from 'react';
import developer from '../../assets/developer.jpg';
import developer1 from '../../assets/developer1.jpg';
import manager from '../../assets/manager.jpg';
const TeamMember = () => {
    return (
        <div className='mb-6'>
            <div className="text-center mb-3">
                <h2 className='text-3xl text-red-600 uppercase'>our team</h2>
                <h2 className='text-2xl uppercase font-bold'>Our dedicated team member</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            <div class="card rounded-none card-compact lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={developer} alt="john" /></figure>
  <div class="card-body">
    <h2 class="text-xl text-center">John Snow</h2>
    <p className='text-center text-secondary'>Developer</p>
  </div>
</div>
            <div class="card rounded-none card-compact lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={manager} alt="taryan" /></figure>
  <div class="card-body">
    <h2 class="text-xl text-center">taryan lannister </h2>
    <p className='text-center text-secondary'>Manager</p>
  </div>
</div>
            <div class="card rounded-none card-compact lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={developer1} alt="eddard" /></figure>
  <div class="card-body">
    <h2 class="text-xl text-center">Eddard stark</h2>
    <p className='text-center text-secondary'>Developer</p>
  </div>
</div>

        </div>
        </div>
    );
};

export default TeamMember;
import React from 'react';

const TeamMember = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            <div class="card rounded-none card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="text-xl text-center">John Snow</h2>
    <p className='text-center text-secondary'>Developer</p>
  </div>
</div>
            <div class="card rounded-none card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="text-xl text-center">taryan lannister </h2>
    <p className='text-center text-secondary'>Manager</p>
  </div>
</div>
            <div class="card rounded-none card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="text-xl text-center">Eddard stark</h2>
    <p className='text-center text-secondary'>Developer</p>
  </div>
</div>

        </div>
    );
};

export default TeamMember;
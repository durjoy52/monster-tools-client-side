import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='container mx-auto'>
           <div class="drawer drawer-mobile px-2">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <h2 className="text-2xl text-green-300 uppercase">welcome to dashboard</h2>
    <Outlet/>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
      <li><Link to='#'>Sidebar Item 2</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;
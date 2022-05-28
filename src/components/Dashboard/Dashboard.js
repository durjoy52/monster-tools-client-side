import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='container mx-auto'>
           <div className="drawer drawer-mobile px-2">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <h2 className="text-2xl text-green-300 uppercase">welcome to dashboard</h2>
    <Outlet/>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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
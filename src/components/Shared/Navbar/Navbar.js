import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaTools } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = ({children}) => {
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth);
  };
  const menuItems = <>
   <li><NavLink to='/'>Home</NavLink></li>
          {
            user?<li><NavLink onClick={logout} to='/login'>Sign Out</NavLink></li>:<li><NavLink to='/login'>Login</NavLink></li>
          }
  </>
    return (
      <div class="drawer">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    {/* <!-- Navbar --> */}
    <div class="w-full navbar shadow rounded-lg  container mx-auto mb-2">
      <div class="flex-1 px-2 mx-2 font-bold italic"><FaTools/><NavLink to='/'>Monster <span className='text-purple-600'>Tools</span></NavLink></div>
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-none hidden lg:block">
        <ul class="menu menu-horizontal">
          {/* <!-- Navbar menu content here --> */}
         {menuItems}
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    {children}
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
      {/* <!-- Sidebar content here --> */}
     {menuItems}
      
    </ul>
    
  </div>
</div>
    );
};

export default Navbar;
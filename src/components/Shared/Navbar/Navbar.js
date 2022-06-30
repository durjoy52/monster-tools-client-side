import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineHome, AiOutlineShopping } from 'react-icons/ai';
import { FaBloggerB, FaTools } from 'react-icons/fa';
import { IoIosLogIn } from 'react-icons/io';
import { MdDashboard, MdOutlineSpaceDashboard } from 'react-icons/md';
import { VscSignOut } from 'react-icons/vsc';
import { NavLink, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
const Navbar = ({children}) => {
  const {pathname} = useLocation()
  const [user] = useAuthState(auth)
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  const menuItems = <>
   <li><NavLink to='/'><AiOutlineHome fontSize={20}/>Home</NavLink></li>
   <li><NavLink to='/allproducts'><AiOutlineShopping fontSize={20}/>All products</NavLink></li>
         {
           user &&  <li><NavLink to='/dashboard'><MdOutlineSpaceDashboard fontSize={20}/>Dashboard</NavLink></li>
          }
          {
            user?<li><NavLink onClick={logout} to='/login'><VscSignOut fontSize={20}/>Sign Out</NavLink></li>:<li><NavLink to='/login'><IoIosLogIn fontSize={20}/>Login</NavLink></li>
          }
          <li><NavLink to='/blogs'><FaBloggerB fontSize={20}/>Blogs</NavLink></li>
  </>
    return (
      <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* <!-- Navbar --> */}
    <div className="w-full navbar shadow rounded-lg  container mx-auto mb-2">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 text-xl px-2 mx-2 font-bold italic" style={{textShadow:'1px 1px 2px  black'}} ><FaTools/><NavLink to='/'>Monster <span className='text-purple-600'>Tools</span></NavLink></div>
      {
        pathname.includes('/dashboard') && <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
          <MdDashboard fontSize={30}/>
        </label>
      </div> 
      }
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal  text-gray-500 font-bold">
          {/* <!-- Navbar menu content here --> */}
         {menuItems}
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-gray-500 font-bold">
      {/* <!-- Sidebar content here --> */}
     {menuItems}
      
    </ul>
    
  </div>
</div>
    );
};

export default Navbar;
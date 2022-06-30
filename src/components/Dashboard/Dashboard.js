import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { FaShippingFast, FaUsersCog } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { MdOutlineRemoveShoppingCart, MdOutlineReviews } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
    return (
        <div className='container mx-auto'>
           <div className="drawer drawer-mobile drawer-end px-2">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <h2 className="text-2xl text-green-300 uppercase">welcome to dashboard</h2>
    <Outlet/>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
      {/* <!-- Sidebar content here --> */}
      {!admin && <>
        <li><Link to='/dashboard/addreview'><MdOutlineReviews fontSize={20}/>Add Review</Link></li>
        <li><Link to='/dashboard/myorders'><AiOutlineShoppingCart fontSize={20}/>My Orders</Link></li>
      </> }
      
      <li><Link to='/dashboard/myprofile'><ImProfile fontSize={20}/>My Profile</Link></li>
     {admin && 
       <>
        <li><Link to='/dashboard/users'><FaUsersCog fontSize={20}/>All Users</Link></li>
        <li><Link to='/dashboard/allorders'><FaShippingFast fontSize={20}/>All Orders</Link></li>
        <li><Link to='/dashboard/addproduct'><BiAddToQueue fontSize={20}/>Add Product</Link></li>
      <li><Link to='/dashboard/manageproducts'><MdOutlineRemoveShoppingCart fontSize={20}/>Manage products</Link></li>
       </>
     }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;
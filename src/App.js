import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../src/components/NotFound/NotFound';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import AddProducts from './components/Dashboard/AddProducts';
import AddReview from './components/Dashboard/AddReview';
import AllOrders from './components/Dashboard/AllOrders';
import Dashboard from './components/Dashboard/Dashboard';
import EditProfile from './components/Dashboard/EditProfile';
import ManageProducts from './components/Dashboard/ManageProducts';
import MyOrders from './components/Dashboard/MyOrders';
import MyProfile from './components/Dashboard/MyProfile';
import Payment from './components/Dashboard/Payment';
import Users from './components/Dashboard/Users';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Products from './components/Products/Products';
import Purchase from './components/Purchase/Purchase';
import RequireAdmin from './components/RequireAdmin';
import RequireAuth from './components/REquireAuth';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
function App() {
  return (
    <>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/purchase/:id' element={<RequireAuth><Purchase/></RequireAuth>}></Route>
          <Route path='/allproducts' element={<RequireAuth><Products/></RequireAuth>}></Route>
          <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route path='addproduct' element={<RequireAdmin><AddProducts/></RequireAdmin>}></Route>
            <Route path='addreview' index element={<AddReview/>}></Route>
            <Route index element={<MyProfile/>}></Route>
            <Route index path='myprofile' element={<MyProfile/>}></Route>
            <Route path='myorders' element={<MyOrders/>}></Route>
            <Route path='payment/:id' element={<Payment/>}></Route>
            <Route path='editprofile' element={<EditProfile/>}></Route>
            <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>}></Route>
            <Route path='allorders' element={<RequireAdmin><AllOrders/></RequireAdmin>}></Route>
            <Route path='manageproducts' element={<RequireAdmin><ManageProducts/></RequireAdmin>}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer/>
      </Navbar>
      <Toaster />
    </>
  );
}

export default App;

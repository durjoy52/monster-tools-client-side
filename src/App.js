import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../src/components/NotFound/NotFound';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import AddProducts from './components/Dashboard/AddProducts';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import RequireAuth from './components/REquireAuth';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar/Navbar';
function App() {
  return (
    <>
      <Navbar>
      <Toaster />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route path='addproduct' element={<AddProducts/>}></Route>
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer/>
      </Navbar>
    </>
  );
}

export default App;

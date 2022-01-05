import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainDashboard from './components/MainDashboard/MainDashboard';
import AddProduct from './components/UserDashboard/AddProduct/AddProduct';
import MakeAdmin from './components/UserDashboard/MakeAdmin/MakeAdmin';
import ManageAllBooking from './components/UserDashboard/ManageAllBooking/ManageAllBooking';
import SendReview from './components/UserDashboard/SendReview/SendReview';
import ManageAllProduct from './components/UserDashboard/ManageAllProduct/ManageAllProduct';
import MyOrders from './components/UserDashboard/MyOrders/MyOrders';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/SignUp/Signup';
import Payment from './components/UserDashboard/Payment/Payment';
import PackageBooking from './pages/PackageBooking/PackageBooking';
import Update from './components/UserDashboard/Update/Update';
import AddBlog from './components/UserDashboard/AddBlog/AddBlog';
import FullBlog from './pages/Home/FullBlog/FullBlog';
import Membership from './pages/Home/Membership/Membership';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<Membership />} />
        <Route path={`/booking/:id`} element={<PackageBooking />} />
        <Route path={`/blogs/:blogId`} element={<FullBlog />} />
        <Route exact path={`/dashboard`} element={<MainDashboard />}>
          <Route path={`/dashboard/myBookings`} element={<MyOrders />}> </Route>
          <Route path={`/dashboard/sendReview`} element={<SendReview />}> </Route>
          <Route path={`/dashboard/payment`} element={<Payment />}> </Route>
          <Route path={`/dashboard/manageAllBooking`} element={<ManageAllBooking />}> </Route> 
          <Route path={`/dashboard/addProduct`} element={<AddProduct />}> </Route> 
          <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin /> }> </Route>
          <Route path={`/dashboard/addBlog`} element={<AddBlog /> }> </Route>
          <Route path={`/dashboard/manageAllProduct`} element={ <ManageAllProduct />}> </Route>
          <Route path={`/dashboard/manageAllProduct/update/:id`} element={ <Update />}> </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

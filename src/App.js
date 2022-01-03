import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminRoute from './components/AdminRoute/AdminRoute';
import MainDashboard from './components/MainDashboard/MainDashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddProduct from './components/UserDashboard/AddProduct/AddProduct';
import MakeAdmin from './components/UserDashboard/MakeAdmin/MakeAdmin';
import ManageAllBooking from './components/UserDashboard/ManageAllBooking/ManageAllBooking';
import SendReview from './components/UserDashboard/SendReview/SendReview';
import ManageAllProduct from './components/UserDashboard/ManageAllProduct/ManageAllProduct';
import MyOrders from './components/UserDashboard/MyOrders/MyOrders';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Footer from './pages/Home/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/SignUp/Signup';
import Navigation from './pages/Shared/Navigation/Navigation';
import NavTop from './pages/Shared/NavTop/NavTop';

function App() {
  return (
    <div className="App">
      <NavTop></NavTop>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route exact path={`/dashboard`} element={<MainDashboard />}>
          <Route path={`/dashboard/myBookings`} element={<MyOrders />}> </Route>
          <Route path={`/dashboard/sendReview`} element={<SendReview />}> </Route>
          <Route path={`/dashboard/manageAllBooking`} element={<ManageAllBooking />}> </Route> 
          <Route path={`/dashboard/addProduct`} element={<AddProduct />}> </Route> 
          <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin /> }> </Route>
          <Route path={`/dashboard/manageAllProduct`} element={ <ManageAllProduct />}> </Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

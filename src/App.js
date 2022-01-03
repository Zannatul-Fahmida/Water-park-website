import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>
    </div>
  );
}

export default App;

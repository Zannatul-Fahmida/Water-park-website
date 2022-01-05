import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home';

import Rides from './pages/Home/Rides/Rides/Rides';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="rides" element={<Rides />} />

      </Routes>
    </div>
  );
}

export default App;

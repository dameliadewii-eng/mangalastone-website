import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "swiper/swiper-bundle.min.css";
import "./index.css";
import "typeface-teko";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import AndesiteStone from '../pages/AndesiteStone';
import PalmSandstone from '../pages/PalmSandstone';
import WallCladding from '../pages/WallCladding';
import Contact from '../pages/Contact';
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Default route (for /) */}
        <Route path="/" element={<Home />} />

        {/* Main Routes */}
        <Route path="/home" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Product Pages */}
        <Route path="/andesite" element={<AndesiteStone />} />
        <Route path="/palm-sandstone" element={<PalmSandstone />} />
        <Route path="/wall-cladding" element={<WallCladding />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

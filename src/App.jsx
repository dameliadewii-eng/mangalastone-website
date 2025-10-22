import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "swiper/swiper-bundle.min.css";
import "./index.css";
import "typeface-teko";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';

import About from '../pages/About';


// 🪨 Import your new product pages
import AndesiteStone from '../pages/AndesiteStone';
import PalmSandstone from '../pages/PalmSandstone';
import WallCladding from '../pages/WallCladding';
import Contact from '../pages/Contact';
import "./i18n";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Routes */}
        <Route path='/home' element={<Home />} />


        {/* ✅ About Route */}
        <Route path='/about' element={<About />} />

        {/* 🪨 Product Routes */}
        <Route path='/contact' element={<Contact />} />

        <Route path='/andesite' element={<AndesiteStone />} />
        <Route path='/palm-sandstone' element={<PalmSandstone />} />
        <Route path='/wall-cladding' element={<WallCladding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import React from 'react'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import {Route, Routes } from 'react-router-dom'
// // import Product from './Pages/Product'
// import ProductList from './Pages/ProductList'
// import Contact from './Pages/Contact'
// import Header from './Components/Header'
// import Footer from './Components/Footer'
// import Cart from './Pages/Cart'

// function App() {
//   return  <>
//   <Header/>
//     <SideNav />
//       <Routes>
      
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/product" element={<ProductList />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/Dashboard" element={<Dashboard />} />
//       </Routes>
      
//     <Footer/>
//     </>
// }

// export default App

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
// import ProductList from './Pages/items/ProductList';
import ProdList2 from './Pages/items/ProdList2';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Product from './Pages/items/Product';
import LuxuryBed from './Pages/items/BedRoom/LuxuryBEd';
import VIPBed from './Pages/items/BedRoom/VIPBed';
import Special from './Pages/items/BedRoom/Special';
import TurkishBed from './Pages/items/BedRoom/TurkishBed';
import LuxuryLiving from './Pages/items/LivingRoom/LuxuryLiving';
import VIPLiving from './Pages/items/LivingRoom/VIPLiving';
import SpecialLiving from './Pages/items/LivingRoom/SpecialLiving';
import MaterialsSection from './Components/InsideHome/MaterialsSection';
import ProductsGrid from './Components/InsideHome/ProductsGrid';
import TestimonialCards from './Components/InsideHome/TestimonialCards';

function App() {
  const location = useLocation(); // Hel URL-ka hada 
  const isDashboard = location.pathname.startsWith('/dashboard'); // Hubi haddii uu yahay dashboard

  return (
    <>
      {!isDashboard && <Header />} {/* Haddii uusan ahayn dashboard, muuji Header */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TestimonialCards" element={<TestimonialCards />} />
        <Route path="/MaterialsSection" element={<MaterialsSection />} />
        <Route path="/ProductsGrid" element={<ProductsGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />        
        <Route path="/prod2" element={<ProdList2 />} />
        {/* BedRoom Section         */}
        <Route path="/luxuryBed" element={<LuxuryBed />} />        
        <Route path="/VIPBed" element={<VIPBed />} />        
        <Route path="/Special" element={<Special />} />        
        <Route path="/TurkishBed" element={<TurkishBed />} />
        {/* LivingRoom Section         */}
        <Route path="/LuxuryLiving" element={<LuxuryLiving />} />        
        <Route path="/VIPLiving" element={<VIPLiving />} />        
        <Route path="/SpecialLiving" element={<SpecialLiving />} />        

        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      {!isDashboard && <Footer />} {/* Haddii uusan ahayn dashboard, muuji Footer */}
    </>
  );
}

export default App;

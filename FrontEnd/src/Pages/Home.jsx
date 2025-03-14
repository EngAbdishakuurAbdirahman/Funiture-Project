import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Product from "./items/Product";
import world from "../assets/world.png";
import wow from "../assets/wow.jpg";
import ImageGallery from '../Components/ImageGallery';
import TestimonialCards from '../Components/InsideHome/TestimonialCards';
import MaterialsSection from '../Components/InsideHome/MaterialsSection';
import ProductsGrid from '../Components/InsideHome/ProductsGrid';


function Home() {
  return (
    <>
      {/* Main Section */}
      <div className="">
      </div>
      <div className="flex  flex-col md:flex-row justify-between items-center bg-gray-200 w-full h-screen pt-[10%] px-10 md:px-32 gap-20">
        {/* Left Section */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }} // Adjusted for more noticeable entry
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }} // Slightly faster transition
        >
          <h5 className="text-[#023047] font-thin mb-2 animate-pulse">Online Shopping</h5>
          <h1 className='font-semibold text-2xl md:text-4xl leading-tight text-[#183b50]'>
            If You Like Our Item, Just Request Any Product You Want
          </h1>
          <p className="pt-6 text-gray-600 leading-7">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt libero sequi reprehenderit commodi maiores sed in placeat, debitis quod, necessitatibus provident voluptates quidem natus facere excepturi esse dolorem modi pariatur voluptatibus? Quidem amet eveniet non optio! Eum recusandae delectus iusto!
          </p>
          <motion.a href="/product" className="inline-block mt-9" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button className="bg-[#183b50] text-[#fdf0d5] font-semibold px-6 py-3 text-lg md:text-xl rounded-xl">
              Add To Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </motion.a>
        </motion.div>

        {/* Right Section */}
        <motion.div  
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 100 }} // Adjusted for more noticeable entry
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }} // Slightly faster transition
        >
          <img className="w-[520px] h-[360px] rounded-xl shadow-lg ml-28 -mt-12" src={wow} alt="Product Display" />
          <motion.img 
            className="absolute top-10 right-0 w-[300px] opacity-80" 
            src={world} 
            alt="World Background" 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        
      </div>

      <ProductsGrid />

      <MaterialsSection />

      <TestimonialCards />

      {/* <Product /> */}
      <ImageGallery />
    </>
  );
}

export default Home;

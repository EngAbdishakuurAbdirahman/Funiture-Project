// // import React from 'react'
// // import img3 from "../assets/img3.jpg"
// // import img4 from "../assets/img4.png"
// // import img5 from "../assets/img5.png"
// // import mission from "../assets/mission.jpg"
// // function About() {
// //   return <>
// // <div className="bg-[#183b50]">
// //   {/* <Header /> */}
// // {/* main */}
// //   <div className="flex  w-full bg-[#183b50] h-screen px-28 pt-5">
// //      {/* Left */}
// //      <div className="w-[50%] animate-pulse  ">
// //       <img className='w-[460px] h-[450px] rounded-xl shadow-[#f1848f] shadow-sm' src={img4} alt="" />
// //      </div>

// //      {/* Right */}
// //      <div className="w-[50%]">
// //       <h1 className='text-[#fdf0d5] text-5xl font-semibold '>About <span className='text-black'>Us</span></h1>
// //       <p className='pt-5 leading-7 text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione ullam et dignissimos beatae minima placeat illo quam libero voluptatum voluptate alias dolore sapiente obcaecati commodi eum modi rem, eaque inventore dolorem accusantium itaque corporis. Ducimus minus id, neque, corrupti nulla nostrum esse consequuntur soluta error repellendus quas illo sapiente facere, non unde quaerat. Rerum minus dicta quam deserunt placeat! Officia tenetur perferendis culpa exercitationem reprehenderit totam, magni, unde aliquid ullam harum molestiae eos cum aperiam sed, blanditiis libero saepe repudiandae? Consequatur quaerat cupiditate reiciendis ipsam aliquid iure totam illum pariatur, laudantium enim aliquam voluptatibus nisi, earum magni excepturi laboriosam.</p>
      
// //       <button className='bg-[#fdf0d5] text-black font-semibold px-16 py-2 text-xl rounded-xl  mt-5 ml-10'>Sea More</button>
// //      </div>

// //   </div>

// //   <hr className='text-[#e2859f]' />




// //   {/* Part two */}

// //   {/* main */}
// //   <div className="flex gap-28 w-full bg-white h-screen px-28 pt-5">

// //         {/* Right */}
// //         <div className="w-[50%]">
// //       <h1 className='text-[#DA4771] text-5xl font-semibold '>Our <span className='text-black'>Mission</span> </h1>
// //       <p className='pt-5 leading-7 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione ullam et dignissimos beatae minima placeat illo quam libero voluptatum voluptate alias dolore sapiente obcaecati commodi eum modi rem, eaque inventore dolorem accusantium itaque corporis. Ducimus minus id, neque, corrupti nulla nostrum esse consequuntur soluta error repellendus quas illo sapiente facere, non unde quaerat. Rerum minus dicta quam deserunt placeat! Officia tenetur perferendis culpa exercitationem reprehenderit totam, magni, unde aliquid ullam harum molestiae eos cum aperiam sed, blanditiis libero saepe repudiandae? Consequatur quaerat cupiditate reiciendis ipsam aliquid iure totam illum pariatur, laudantium enim aliquam voluptatibus nisi, earum magni excepturi laboriosam.</p>
      
// //       <button className='bg-[#3dc7da] text-black font-semibold px-16 py-2 text-xl rounded-xl  mt-5 ml-10'>Sea More</button>
// //      </div>
// //      {/* Left */}
// //      <div className="w-[50%] animate-pulse  ">
// //       <img className='w-[460px] h-[450px] rounded-xl shadow-[#f1848f] shadow-sm' src={img5} alt="" />
// //      </div>

 

// //   </div>

// //   <hr className='text-[#e2859f]' />




// //   {/* part three */}

// //   {/* main */}
// //   <div className="flex  w-full bg-white h-screen px-28 pt-5">
// //      {/* Left */}
// //      <div className="w-[50%] animate-pulse  ">
// //       <img className='w-[460px] h-[450px] rounded-xl' src={img3} alt="" />
// //      </div>

// //      {/* Right */}
// //      <div className="w-[50%]">
// //       <h1 className='text-black text-5xl font-semibold '>Vission <span className='text-[#003049] font-semibold'>Vission</span></h1>
// //       <p className='pt-5 leading-7 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione ullam et dignissimos beatae minima placeat illo quam libero voluptatum voluptate alias dolore sapiente obcaecati commodi eum modi rem, eaque inventore dolorem accusantium itaque corporis. Ducimus minus id, neque, corrupti nulla nostrum esse consequuntur soluta error repellendus quas illo sapiente facere, non unde quaerat. Rerum minus dicta quam deserunt placeat! Officia tenetur perferendis culpa exercitationem reprehenderit totam, magni, unde aliquid ullam harum molestiae eos cum aperiam sed, blanditiis libero saepe repudiandae? Consequatur quaerat cupiditate reiciendis ipsam aliquid iure totam illum pariatur, laudantium enim aliquam voluptatibus nisi, earum magni excepturi laboriosam.</p>
      
// //       <button className='bg-[#DA4771] text-black font-semibold px-16 py-2 text-xl rounded-xl  mt-5 ml-10'>Sea More</button>
// //      </div>

// //   </div>
// //   </div>

// //   {/* <Footer /> */}
// //   </>
    
  
// // }

// // export default About



// import React from 'react';
// import { motion } from 'framer-motion';
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";
// import mission from "../assets/mission.jpg";

// function About() {
//   return (
//     <div className="bg-[#183b50]">
//       {/* Section One: About Us */}
//       <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen px-10 md:px-28 pt-5 gap-10">
//         <motion.div 
//           className="md:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img className='w-full max-w-md h-auto rounded-xl shadow-lg' src={img4} alt="About Us" />
//         </motion.div>
//         <motion.div 
//           className="md:w-1/2 text-center md:text-left"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className='text-[#fdf0d5] text-5xl font-semibold'>About <span className='text-black'>Us</span></h1>
//           <p className='pt-5 leading-7 text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
//           <motion.button 
//             className='bg-[#fdf0d5] text-black font-semibold px-10 py-3 text-xl rounded-xl mt-5'
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             See More
//           </motion.button>
//         </motion.div>
//       </div>

//       <hr className='border-[#e2859f] my-10' />

//       {/* Section Two: Our Mission */}
//       <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full h-screen px-10 md:px-28 pt-5 gap-10 bg-white">
//         <motion.div 
//           className="md:w-1/2 text-center md:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className='text-[#DA4771] text-5xl font-semibold'>Our <span className='text-black'>Mission</span></h1>
//           <p className='pt-5 leading-7 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
//           <motion.button 
//             className='bg-[#3dc7da] text-black font-semibold px-10 py-3 text-xl rounded-xl mt-5'
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             See More
//           </motion.button>
//         </motion.div>
//         <motion.div 
//           className="md:w-1/2"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img className='w-full max-w-md h-auto rounded-xl shadow-lg' src={img5} alt="Mission" />
//         </motion.div>
//       </div>

//       <hr className='border-[#e2859f] my-10' />

//       {/* Section Three: Vision */}
//       <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen px-10 md:px-28 pt-5 gap-10 bg-white">
//         <motion.div 
//           className="md:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img className='w-full max-w-md h-auto rounded-xl' src={img3} alt="Vision" />
//         </motion.div>
//         <motion.div 
//           className="md:w-1/2 text-center md:text-left"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className='text-black text-5xl font-semibold'>Our <span className='text-[#003049] font-semibold'>Vision</span></h1>
//           <p className='pt-5 leading-7 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
//           <motion.button 
//             className='bg-[#DA4771] text-black font-semibold px-10 py-3 text-xl rounded-xl mt-5'
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             See More
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default About;



import React from 'react';

const About = () => {
    return (
        <div className="bg-white text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://i.pinimg.com/736x/b7/2b/29/b72b29ccf71389c717bce7c1a927f981.jpg" />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Our Furniture Store</h1>
                    <p className="mb-8 leading-relaxed">At JungleHouse Furniture, we pride ourselves on crafting high-quality, sustainable furniture that enhances your living spaces. Our commitment to eco-friendly materials and innovative designs ensures that every piece is unique and built to last.</p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Meet Our Team</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">See Our Values</button>
                    </div>
                </div>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Mission and Vision</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">We are dedicated to transforming your house into a home with pieces that are not only aesthetically pleasing but also functional and durable.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M22 12A10 10 0 1 1 2 12a10 10 0 0 1 20 0z"></path>
                                <path d="M12 8v8m4-4H8"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">Sustainability is at the core of our operations. We ensure all our materials are sourced responsibly to minimize our environmental impact.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">Each piece of furniture is crafted with attention to detail, ensuring that it meets the high standards our customers expect.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-gray-100 p-8 rounded">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 6v6l4 2"></path>
                            </svg>
                            <p className="leading-relaxed mb-6">We are committed to customer satisfaction and are always available to help you choose the right pieces for your home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

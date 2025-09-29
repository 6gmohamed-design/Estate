import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import hero from "./assets/hero-image.png";
import "./index.css";

const Hero = () => {
  const [properties, setProperties] = useState(0);
  const [cities, setCities] = useState(0);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProperties((prev) => (prev < 9000 ? prev + 1 : prev));
      setCities((prev) => (prev < 2000 ? prev + 1 : prev));
      setCountries((prev) => (prev < 100 ? prev + 1 : prev));
    }, .00000001);
    return () => clearInterval(interval);
  }, [properties, cities, countries]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='w-full bg-black text-white h-auto mx-auto py-10'
    >
      <div className='max-w-[80%] mx-auto flex items-center justify-between lg:gap-15 gap-10 min-[300px]:flex-col  min-[1100px]:flex-row'>

        {/* Text Section */}
        <div className='w-[50%]  h-auto flex items-center  justify-center flex-col gap-6'>
          <h1 className='orange-circle text-3xl relative z-40 lg:text-5xl font-extrabold text-transparent bg-clip-text flex items-center flex-wrap justify-center bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-center' >
            Discover the Most Suitable Property
          </h1>
          <p className='text-gray-300 text-base flex items-center flex-wrap relative z-40 lg:text-lg text-center leading-relaxed'>
            Explore our curated collection of properties and find your dream home with ease and confidence.
          </p>

          {/* Search Bar */}
          <div className='flex items-center gap-2 w-full relative z-40 mx-auto min-[300px]:grid  min-[300px]:grid-cols-1 min-[800px]:grid-cols-2   '>
            <input
              type="text"
              placeholder='Search by location or type...'
              className='flex-1 px-4 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300'
            />
            <button className='px-4 py-2 bg-yellow-400 text-black rounded-r-md hover:bg-yellow-300 transition-all duration-300'>
              Search
            </button>
          </div>

          {/* Stats */}
          <div className='flex items-center justify-center gap-6 mt-6 flex-nowrapwrap'>
            <div className='text-center'>
              <span className='block text-yellow-400 text-2xl font-bold'>{properties}+</span>
              <span className='text-gray-400 text-sm'>Properties</span>
            </div>
            <div className='text-center'>
              <span className='block text-yellow-400 text-2xl font-bold'>{cities}+</span>
              <span className='text-gray-400 text-sm'>Cities</span>
            </div>
            <div className='text-center'>
              <span className='block text-yellow-400 text-2xl font-bold'>{countries}+</span>
              <span className='text-gray-400 text-sm'>Countries</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className='w-[50%] lg:w-[35%]   flex items-center justify-center'>
          <img
            src={hero}
            alt="Hero"
            className='md:w-full min-[300px]:w-[300px]  md:h-[55vh] object-cover rounded-s-full rotate-90 transition-all duration-500 ease-in-out hover:scale-105'
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Hero;
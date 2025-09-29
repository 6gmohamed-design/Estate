import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import r1 from "./assets/r1.png";
import r2 from "./assets/r2.png";
import r3 from "./assets/r3.png";

const Residencies = () => {
  const [residencies, setResidencies] = useState([
    { image: r1, title: "Residency 1", price: "$1000", location: "New York" },
    { image: r2, title: "Residency 2", price: "$2000", location: "New York" },
    { image: r3, title: "Residency 3", price: "$3000", location: "New York" },
    { image: r1, title: "Residency 4", price: "$4000", location: "Thailand" },
    { image: r2, title: "Residency 5", price: "$5000", location: "Pakistan" },
    { image: r3, title: "Residency 6", price: "$6000", location: "China" },
  ]);

  const [move, setMove] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const handleMove = (move) => {
    if (move < 0) {
      setMove(residencies.length - 1);
    } else if (move >= residencies.length) {
      setMove(0);
    } else {
      setMove(move);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='flex flex-col gap-6 max-w-[80%] overflow-hidden mx-auto py-10 bg-white'
      id='residencies'
    >
      {/* Title */}
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600'>
          Best Residencies
        </h1>
        <p className='text-gray-600 text-md mt-2'>
          Discover the most suitable property for you
        </p>
      </div>

      {/* Arrows */}
      <div className='flex justify-end items-center gap-4 relative'>
        <ul className='flex gap-4 cursor-pointer text-yellow-500 text-xl'>
          <li>
            <i className="fa-solid fa-arrow-left hover:text-yellow-700 transition-all duration-300 border border-yellow-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:bg-yellow-500" onClick={() => handleMove(move - 1)}></i>
          </li>
          <li>
            <i className="fa-solid fa-arrow-right hover:text-yellow-700 transition-all duration-300 border border-yellow-500 p-2 rounded-full w-10 h-10 cursor-pointer hover:bg-yellow-500" onClick={() => handleMove(move + 1)}></i>
          </li>
        </ul>
      </div>

      {/* Slider */}
      <div className='flex flex-nowrap gap-6 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${move * 320}px)` }}>
        {residencies.map((residency, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className='min-w-[300px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-in-out border border-gray-100'
          >
            <div className='overflow-hidden'>
              <img
                src={residency.image}
                alt={residency.title}
                className='sm:w-[200px] sm:h-[150px] lg:w-[300px] lg:h-[200px] object-cover rounded-t-xl hover:scale-105 transition-transform duration-500 ease-in-out'
              />
            </div>
            <div className='p-4 flex flex-col gap-2'>
              <h1 className='text-lg font-bold text-gray-800 hover:text-yellow-500 transition-colors duration-300'>
                {residency.title}
              </h1>
              <p className='text-yellow-600 font-extrabold text-md tracking-wide'>
                {residency.price}
              </p>
              <p className='text-gray-500 text-sm italic'>
                {residency.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Residencies;
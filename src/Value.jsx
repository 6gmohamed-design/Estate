import React, { useState } from 'react';
import { motion } from 'framer-motion';
import data from './Accordian';
import img from './assets/Value.png';

const Value = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-16 max-w-[80%] mx-auto"
      id="our-value"
    >
      {/* Image Section */}
      <div className="w-full lg:w-[40%] flex justify-center">
        <img
          src={img}
          alt="Value"
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-s-full rotate-90 hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Text + Accordion Section */}
      <div className="w-full lg:w-[60%] flex flex-col gap-6">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600">
            Our Value
          </h1>
          <p className="text-gray-700 text-md mt-2 font-medium">
            Value we give to our customers
          </p>
          <p className="text-gray-500 text-sm mt-1 leading-relaxed">
            We are committed to providing the best possible service to our customers and ensuring their satisfaction.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="flex items-center justify-between p-4 cursor-pointer bg-gradient-to-r from-yellow-100 to-yellow-200 hover:from-yellow-200 hover:to-yellow-300"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-3 text-yellow-700 font-semibold">
                  <span className="text-2xl">{item.icon}</span>
                  <h2 className="text-lg">{item.heading}</h2>
                </div>
                <span className="text-xl text-yellow-700">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <div className="p-4 text-gray-600 bg-white transition-all duration-300">
                  {item.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Value;
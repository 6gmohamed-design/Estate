import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GetStarted = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full py-20 bg-gradient-to-br from-white via-yellow-50 to-white"
      id="get-started"
    >
      <div className="max-w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 text-center lg:text-left leading-tight">
            Ready to Get Started?
          </h1>
          <p className="text-gray-700 text-lg font-medium text-center lg:text-left">
            Join thousands of happy homeowners today.
          </p>
          <p className="text-gray-500 text-base leading-relaxed text-center lg:text-left">
            Whether you're buying your first home or investing in property, we make the process simple, secure, and tailored to your needs. Let’s take the first step together and turn your dream into reality.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg">
              Create Account
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg">
              Talk to an Expert
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <div className="relative group">
            <img
              src="https://png.pngtree.com/png-clipart/20210905/original/pngtree-get-started-poster-png-image_6694805.jpg"
              alt="Get Started"
              className="transform rotate-90 group-hover:scale-105 transition-transform duration-500 ease-in-out w-[300px] h-[300px] lg:w-[450px] lg:h-[400px] object-cover rounded-full shadow-xl"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-yellow-100 opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GetStarted;
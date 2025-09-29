import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img from './assets/contact.jpg';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const contactMethods = [
    { icon: 'fa-phone-volume', label: 'Call Now', value: '123456789' },
    { icon: 'fa-envelope', label: 'Email Now', value: 'contact@example.com' },
    { icon: 'fa-message', label: 'Message Now', value: 'Live Chat' },
    { icon: 'fa-video', label: 'Video Call Now', value: 'Zoom ID: 123456' },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='w-full py-20 bg-white'
    >
      <div className='max-w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10' id='contact-us'>
        {/* Text + Cards Section */}
        <div className='w-full lg:w-[60%] flex flex-col gap-8'>
          <div className='text-center lg:text-left'>
            <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'>
              Contact Us
            </h1>
            <p className='text-gray-700 text-md mt-2 font-medium'>Easy to reach us anytime</p>
            <p className='text-gray-500 text-sm mt-1 leading-relaxed'>
              We are always here to help you with any inquiries or support you need.
            </p>
          </div>

          <div className='grid min-[200px]:grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className='flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-in-out border border-gray-100'
              >
                <div className='flex items-center justify-between gap-3 w-full'>
                  <i className={`fa-solid ${method.icon} text-blue-600 text-3xl`}></i>
                  <p className='text-gray-800 font-semibold text-lg'>{method.value}</p>
                </div>
                <div className='w-full text-center mt-2'>
                  <p className='text-white text-sm font-medium hover:bg-blue-600 hover:text-white rounded-2xl p-3 bg-blue-700'>
                    {method.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className='w-full lg:w-[40%] flex justify-center'>
          <img
            src={img}
            alt="Contact"
            className='lg:w-[500px] lg:h-[400px] w-[300px] h-[300px] object-cover rounded-s-full rotate-90 hover:scale-105 transition-transform duration-500 ease-in-out'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
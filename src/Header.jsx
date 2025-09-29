import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from "./assets/logo (2).png";

const Header = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-black px-2 rounded-t-lg shadow-lg lg:py-2"
    >
      <div className="flex justify-between items-center sm:max-w-[90%] lg:max-w-[80%] mx-auto h-[10vh] text-white">
        <div className="h-full w-[15%]">
          <img src={logo} alt="Logo" className="h-full object-contain" />
        </div>
        <div className="flex justify-center items-center flex-wrap">
          <ul className="flex lg:gap-6 gap-3 w-full justify-center flex-wrap items-center box-border shadow-lg sm:mx-auto sm:px-1 lg:px-0 px-2">
            {[
              { label: "Residencies", href: "#residencies" },
              { label: "Our Value", href: "#our-value" },
              { label: "Contact Us", href: "#contact-us" },
              { label: "Get Started", href: "#get-started" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-200 min-[200px]:text-[10px] min-[600px]:text-[15px] min-[800px]:text-[16px] lg:text-[16px] hover:text-yellow-400 transition-all duration-300 ease-in-out"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact-us">
                <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-300 transition-all duration-300 ease-in-out">
                  Contact Us
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
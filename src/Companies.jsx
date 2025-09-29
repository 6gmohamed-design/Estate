import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import equinix from "./assets/equinix.png";
import prologis from "./assets/prologis.png";
import realty from "./assets/realty.png";
import tower from "./assets/tower.png";

const logos = [equinix, prologis, realty, tower];

const Companies = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className='w-full h-auto flex items-center justify-center py-10'>
      <div className='items-center justify-between gap-12 max-w-[90%] grid min-[300px]:grid-cols-1 min-[600px]:grid-cols-2 min-[1100px]:grid-cols-4 mx-auto'>
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Company ${index + 1}`}
            className='w-36 h-20 object-contain mx-5'
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Companies;
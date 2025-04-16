'use client';
import { motion } from 'motion/react';
import React from 'react';
import { ImagesSlider } from '../ui/images-slider';

export function ImagesSliderDemo() {
  const images = [
    '/hero/hero-1.jpg',
    // '/hero/hero-2.jpg',
    'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  return (
    <ImagesSlider
      className='w-full h-full object-cover opacity-70'
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className='z-50 flex flex-col justify-center items-center'
      ></motion.div>
    </ImagesSlider>
  );
}

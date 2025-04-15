'use client';

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type ImageItem = {
  src: string;
};

type TextContent = {
  title: string;
  content: string;
};
export const AnimatedImageLeft = ({
  images,
  content,
  autoplay = false,
}: {
  images: ImageItem[];
  content: TextContent;
  autoplay?: boolean;
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [rotateValues, setRotateValues] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  const handleNext = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    setMounted(true);
    const values = images.map(() => Math.floor(Math.random() * 21) - 10);
    setRotateValues(values);
  }, [images]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);
  if (!mounted) return null;
  return (
    <div className='w-full antialiased  '>
      <div className='relative grid grid-cols-1 gap-20 md:grid-cols-2'>
        {/* IMAGE SECTION */}
        <div>
          <div className='relative h-80 w-full'>
            {mounted && rotateValues.length === images.length && (
              <AnimatePresence>
                {images.map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      rotate: rotateValues[index] || 0,
                    }}
                    animate={{
                      opacity: index === activeImage ? 1 : 0.7,
                      scale: index === activeImage ? 1 : 0.95,
                      rotate:
                        index === activeImage ? 0 : rotateValues[index] || 0,
                      zIndex:
                        index === activeImage ? 40 : images.length + 2 - index,
                      y: index === activeImage ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      rotate:
                        index === activeImage ? 0 : rotateValues[index] || 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className='absolute inset-0 origin-bottom'
                  >
                    <Image
                      src={image.src}
                      alt='carousel image'
                      width={500}
                      height={500}
                      draggable={false}
                      className='h-full w-full rounded-3xl object-cover object-center'
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>
        {/* TEXT SECTION */}
        <div className='flex flex-col justify-between py-4'>
          <div className='order-2 md:order-2'>
            <hr className='mb-4 border-t-4 border-[#ab332b]' />
            <h3 className='text-2xl font-bold text-black'>{content.title}</h3>
            <motion.p className='text-gray-600 mb-6 text-xl text-justify'>
              {content.content.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0.02 * index,
                  }}
                  className='inline-block'
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>

            <div className='flex gap-4 pt-12 md:pt-0'>
              <button
                onClick={handlePrev}
                className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'
              >
                <IconArrowLeft className='h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400' />
              </button>
              <button
                onClick={handleNext}
                className='group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'
              >
                <IconArrowRight className='h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

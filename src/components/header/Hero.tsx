// components/Hero.tsx
import { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ImagesSliderDemo } from '@/components/header/ImagesSlider';

const Hero: FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const companyInfoRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animation for the hero section
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(companyInfoRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    }).from(
      headingRef.current ? Array.from(headingRef.current.children) : [],
      {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      },
      '-=0.5'
    );
  }, []);

  return (
    <div
      ref={heroRef}
      className='relative min-h-screen  flex items-center'
      style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85))',
        // background: 'rgba(0, 0, 0, 0.9)',
      }}
    >
      {/* Background image - will be added by user */}
      <div className='absolute inset-0 z-0'>
        <ImagesSliderDemo />
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 pt-32 z-10 relative'>
        <h1
          ref={headingRef}
          className='text-6xl md:text-6xl font-light leading-tight'
        >
          <div className=' text-8xl font-semibold max-w-3xl mb-5'>
            Chủ nghĩa <br /> duy vật lịch sử
          </div>
          <div className=' font-bold text-xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 max-w-4xl '>
            Biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng
          </div>
          <p className='mt-8 text-white italic text-xl'>
            Giảng viên: Nguyễn Thúy Phương
          </p>
        </h1>
      </div>
    </div>
  );
};

export default Hero;

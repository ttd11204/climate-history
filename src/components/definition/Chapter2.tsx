// pages/index.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Definition() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstEventRef = useRef<HTMLDivElement>(null);
  const secondEventRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the main heading
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }

    // Animate each event section on scroll
    const eventRefs = [firstEventRef, secondEventRef];
    eventRefs.forEach((ref, index) => {
      if (ref.current) {
        gsap.from(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.1,
          ease: 'power2.out',
        });
      }
    });

    // Animate the plus symbols
    gsap.from('.plus-symbols span', {
      scrollTrigger: {
        trigger: '.plus-symbols',
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      scale: 0.5,
      duration: 0.6,
      stagger: 0.03,
      ease: 'back.out(1.7)',
    });
  }, []);

  return (
    <>
      <div className='min-h-screen'>
        <main className='py-16 max-w-6xl'>
          <div className='text-center mb-16'>
            <h1 ref={headingRef} className='text-4xl md:text-4xl font-bold'>
              Khái niệm về cơ sở hạ tầng và kiến trúc thượng tầng
            </h1>
          </div>

          <div className='space-y-24'>
            {/* First Event */}
            <div
              ref={firstEventRef}
              className='grid grid-cols-1 md:grid-cols-2 gap-12 '
            >
              <div className='relative'>
                <div className='plus-symbols absolute -left-6 -top-6 grid grid-cols-4 gap-2 text-gray-300 pointer-events-none'>
                  {Array.from({ length: 16 }, (_, i) => (
                    <span key={i}>+</span>
                  ))}
                </div>
                <div className='relative overflow-hidden aspect-[4/3] bg-gray-100'>
                  <img
                    src='/mac-lenin.jpg'
                    alt='Abstract modern art'
                    width={500}
                    height={500}
                    className='w-full h-full transition-transform duration-500 hover:scale-105 object-fit'
                  />
                </div>
              </div>
              <div>
                <hr className='mb-4 border-t-4 border-[#ab332b]' />
                <h2 className='text-2xl mb-4 text-gray-800'>Cơ sở hạ tầng</h2>
                <p className='text-gray-600 mb-6 text-xl text-justify'>
                  Toàn bộ những quan hệ sản xuất hợp thành cấu trúc kinh tế của
                  một xã hội, là nền tảng kinh tế của xã hội đó. Nó quyết định
                  đến tính chất và sự vận động, phát triển của toàn bộ xã hội.
                </p>
              </div>
            </div>

            {/* Second Event */}
            <div
              ref={secondEventRef}
              className='grid grid-cols-1 md:grid-cols-2 gap-12 '
            >
              <div className='order-1 md:order-2 relative'>
                <div className='plus-symbols absolute -right-6 -top-6 grid grid-cols-4 gap-2 text-gray-300 pointer-events-none'>
                  {Array.from({ length: 16 }, (_, i) => (
                    <span key={i}>+</span>
                  ))}
                </div>
                <div className='relative overflow-hidden aspect-[4/3] bg-gray-100'>
                  <img
                    src='/philosophy.jpg'
                    alt='Artist painting'
                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                  />
                </div>
              </div>
              <div className='order-2 md:order-1'>
                <hr className='mb-4 border-t-4 border-[#ab332b]' />
                <h2 className='text-2xl mb-4 text-gray-800'>
                  Kiến trúc thượng tầng
                </h2>
                <p className='text-gray-600 mb-6 text-xl text-justify'>
                  Toàn bộ những tư tưởng xã hội với những thiết chế xã hội tương
                  ứng cùng những quan hệ nội tại của thượng tầng hình thành trên
                  một cơ sở hạ tầng nhất định.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

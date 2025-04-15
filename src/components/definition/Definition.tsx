// pages/index.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { AnimatedImageLeft } from '@/components/ui/animated-img-left';
import { AnimatedImageRight } from '@/components/ui/animated-img-right';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

export default function Definition() {
  // const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <div className='min-h-screen'>
        <main className='py-16 max-w-6xl'>
          <div className='text-center mb-16'>
            <h1 className='text-4xl md:text-4xl font-bold'>
              Khái niệm về cơ sở hạ tầng và kiến trúc thượng tầng
            </h1>
          </div>

          <div className='space-y-24'>
            {/* First Event */}

            <AnimatedImageLeft
              // autoplay
              content={{
                title: 'Cơ sở hạ tầng',
                content:
                  'Toàn bộ những quan hệ sản xuất hợp thành cấu trúc kinh tế của một xã hội, là nền tảng kinh tế của xã hội đó. Nó quyết định đến tính chất và sự vận động, phát triển của toàn bộ xã hội.',
              }}
              images={[
                {
                  src: '/csht/csht-1.jpg',
                },
                {
                  src: '/csht/csht-2.jpg',
                },
                {
                  src: '/csht/csht-3.jpg',
                },
                {
                  src: '/csht/csht-4.jpg',
                },
              ]}
            />

            {/* Second Event */}
            <AnimatedImageRight
              // autoplay
              content={{
                title: 'Kiến trúc thượng tầng',
                content:
                  'Toàn bộ những tư tưởng xã hội với những thiết chế xã hội tương ứng cùng những quan hệ nội tại của thượng tầng hình thành trên một cơ sở hạ tầng nhất định.',
              }}
              images={[
                {
                  src: '/kttt/kttt-1.jpg',
                },
                {
                  src: '/kttt/kttt-2.jpg',
                },
                {
                  src: '/kttt/kttt-3.jpg',
                },
              ]}
            />
          </div>
        </main>
      </div>
    </>
  );
}

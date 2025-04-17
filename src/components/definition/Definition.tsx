import { AnimatedImageLeft } from '@/components/ui/animated-img-left';
import { AnimatedImageRight } from '@/components/ui/animated-img-right';

// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

export default function Definition() {
  // const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <main className='pb-16'>
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
              src: '/csht/csht.jpg',
            },
            {
              src: '/csht/tan-du.jpg',
            },
            {
              src: '/csht/thong-tri.jpg',
            },
            {
              src: '/csht/mam-mong.jpg',
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
              src: '/kttt/kttt.jpg',
            },
            {
              src: '/kttt/tcxh.jpg',
            },
            {
              src: '/kttt/htttxh.jpg',
            },
          ]}
        />
      </div>
    </main>
  );
}

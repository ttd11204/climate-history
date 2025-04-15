// components/ServicesSection.tsx
import { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ServiceCard from './ServiceCard';
import FeaturedServiceCard from './FeaturedServiceCard';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 1,
    title:
      'Giải quyết mối quan hệ giữa kinh tế và chính trị trong từng giai đoạn',
    imageSrc: '/philosophy.jpg',
    iconSrc: '/philosophy.jpg',
    featured: false,
  },
  {
    id: 2,
    title:
      'Trong quá trình lãnh đạo cách mạng Việt Nam, Đảng ta đã rất quan tâm đến nhận thức và vận dụng quy luật này',
    imageSrc: '/philosophy.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Đổi mới toàn diện cả kinh tế và chính trị',
    imageSrc: '/philosophy.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Giải quyết tốt mối quan hệ giữa đổi mới - ổn định - phát triển',
    imageSrc: '/philosophy.jpg',
    featured: false,
  },
];

const ServicesSection: FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate featured service
    gsap.from(featuredRef.current, {
      x: -50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });

    // Animate service cards
    const cards = sectionRef.current?.querySelectorAll('.service-card');
    if (cards) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <div className='flex flex-col lg:flex-row gap-8'>
      {/* Featured Service - Left Side */}
      <div ref={featuredRef} className='lg:w-2/5'>
        <FeaturedServiceCard
          imageSrc='/philosophy.jpg'
          alt='Gallery visitor looking at exhibitions'
        />
      </div>

      {/* Service Cards - Right Side */}
      <div ref={sectionRef} className='lg:w-3/5 grid grid-cols-1  gap-6'>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            imageSrc={service.iconSrc || service.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

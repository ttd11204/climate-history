'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MainContent from '@/components/MainContent';
import Definition from '@/components/definition/Chapter2';
import ImpactsSection from '@/components/impact/ExhibitionsSection';
import SocialLifeSection from '@/components/social-life/SocialLifeSection';

gsap.registerPlugin(ScrollTrigger);

const StoryPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray('.section');

    sections.forEach((section: any, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
          },
          duration: 1,
          ease: 'power3.out',
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className='space-y-24 p-10 bg-[#faf9f5] '>
      <MainContent title='Chương 1' content='Bắt đầu cuộc hành trình...' />
      <MainContent title='Chương 2' content='Vượt qua rừng sâu...' />
      <Definition />
      <ImpactsSection />
      <SocialLifeSection />
      <MainContent title='Chương 3' content='Chạm đến đỉnh núi...' />
    </div>
  );
};

export default StoryPage;

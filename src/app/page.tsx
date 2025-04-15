'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MainContent from '@/components/MainContent';

import ImpactsSection from '@/components/impact/ExhibitionsSection';
import SocialLifeSection from '@/components/social-life/SocialLifeSection';
import Definition from '@/components/definition/Definition';
import Header from '@/components/header/Header';
import Hero from '@/components/header/Hero';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { SparklesPreview } from '@/components/sparkles/Sparkles';

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
    <>
      <Header />
      <Hero />
      <SparklesPreview />
      {/* <TracingBeamDemo /> */}
      <TracingBeam className='bg-[#f9f4e8] text-[#3c2f2f]'>
        <div
          ref={containerRef}
          className='space-y-24 p-10 bg-[#faf9f5] container mx-auto'
        >
          <Definition />
          <ImpactsSection />
          <SocialLifeSection />
          <MainContent title='Chương 3' content='Chạm đến đỉnh núi...' />
        </div>
      </TracingBeam>
    </>
  );
};

export default StoryPage;

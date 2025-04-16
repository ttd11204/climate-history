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
import { SVGMaskEffectDemo } from '@/components/open-question/SVGMaskEffect';
import Timeline from '@/components/timeline/Timeline';

gsap.registerPlugin(ScrollTrigger);
const timelineEvents = [
  {
    id: 1,
    number: '01',
    date: `Khái niệm về cơ sở hạ tầng và
     kiến trúc thượng tầng`,
  },
  {
    id: 2,
    number: '02',
    date: `Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và
    kiến trúc thượng tầng`,
  },
  {
    id: 3,
    number: '03',
    date: 'Giải quyết vấn đề',
  },
];

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
      <div ref={containerRef} className=' '>
        <SVGMaskEffectDemo />
        <hr className='' />
        <Timeline events={timelineEvents} />
        {/* <TracingBeamDemo /> */}
        <TracingBeam className='bg-[#f9f4e8] text-[#3c2f2f]'>
          <div className='space-y-24 p-10  container mx-auto'>
            <Definition />
            <ImpactsSection />
            <SocialLifeSection />
            <MainContent title='Chương 3' content='Chạm đến đỉnh núi...' />
          </div>
        </TracingBeam>
      </div>
      <SparklesPreview />
    </>
  );
};

export default StoryPage;

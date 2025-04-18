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
import { SparklesPreview } from '@/components/sparkles/Sparkles';
import { SVGMaskEffectDemo } from '@/components/open-question/SVGMaskEffect';
import TimelineMenu from '@/components/timeline/Timeline';
import { Timeline } from '@/components/ui/timeline';
import RelationshipShowcase from '@/components/relationship/RealtionshipShowcase';
import { BentoGridDemo } from '@/components/grid/BentoGrid';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    icon: 'database',
    title:
      'Mỗi kiểu quan hệ sản xuất nhất định sẽ hình thành nên một kiến trúc thượng tầng tương ứng.',
  },
  {
    id: 2,
    icon: 'thumbs-up',
    title:
      'Khi quan hệ sản xuất cũ lỗi thời, bị thay thế bởi quan hệ sản xuất mới, thì kiến trúc thượng tầng cũng phải thay đổi theo để phù hợp.',
  },
  {
    id: 3,
    icon: 'lightbulb',
    title:
      'CSHT là nền tảng vật chất để KTTT hình thành và phát triển, không thể tồn tại một hình thức nhà nước, pháp luật, tư tưởng… tách rời hoặc đi ngược lại hoàn toàn với nền tảng kinh tế của xã hội.',
  },
];

const content = `Cơ sở hạ tầng và kiến trúc thượng tầng là hai mặt cơ bản của xã hội, tác động biện chứng, trong đó cơ sở hạ tầng quyết định kiến trúc thượng tầng còn kiến trúc thượng tầng tác động trở lại to lớn, mạnh mẽ đối với cơ sở hạ tầng.`;

const data = [
  {
    title: 'Khái niệm',
    content: (
      <div>
        {' '}
        <Definition />
      </div>
    ),
  },
  {
    title: `Quan hệ
    biện chứng`,
    content: (
      <div className='space-y-24'>
        <RelationshipShowcase
          relationship={services}
          content={content}
          imageUrl='/relationship/relationship.jpg'
        />
        <ImpactsSection />
        <SocialLifeSection />
      </div>
    ),
  },
  {
    title: 'Vấn đề',
    content: (
      <div>
        <BentoGridDemo />{' '}
      </div>
    ),
  },
];

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
      <div ref={containerRef}>
        <SVGMaskEffectDemo />
        <hr className='w-1/2 mx-auto my-8 border-t-4 border-[#ab332b]' />
        <TimelineMenu events={timelineEvents} />
        <div className='relative w-full overflow-clip mb-10 pb-1'>
          <Timeline data={data} />
        </div>
      </div>
      <SparklesPreview />
    </>
  );
};

export default StoryPage;

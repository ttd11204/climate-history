// components/TimelineItem.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface TimelineItemProps {
  number: string;
  date: string;
  content?: string;
  position: 'left' | 'right';
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  number,
  date,
  content,
  position,
  index,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (itemRef.current) {
      gsap.fromTo(
        itemRef.current,
        {
          opacity: 0,
          x: position === 'left' ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: itemRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, [position, index]);

  return (
    <div
      ref={itemRef}
      className={`flex items-center mb-12 relative ${
        position === 'left' ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <div
        className={`w-1/2  ${
          position === 'left' ? 'pl-5 text-left' : 'pr-5 text-right'
        }`}
      >
        <h3 className='text-gray-500 font-medium uppercase text-2xl whitespace-pre-line'>
          {date}
        </h3>
        <p className='text-gray-600 mt-2'>{content}</p>
      </div>

      <div className='z-10 flex items-center justify-center bg-amber-500 text-white rounded-full w-16 h-16'>
        <span className='text-2xl font-semibold'>{number}</span>
      </div>

      <div
        className={`w-1/2 ${position === 'right' ? 'pr-8 text-right' : 'pl-8'}`}
      ></div>

      {/* Connector line */}
      <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 -z-10'></div>
    </div>
  );
};

export default TimelineItem;

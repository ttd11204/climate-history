// components/Timeline.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TimelineItem from './TimelineItem';

interface TimelineEvent {
  id: number;
  number: string;
  date: string;
  content?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const TimelineMenu: React.FC<TimelineProps> = ({ events }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.querySelector('.timeline-title'),
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, []);

  return (
    <div ref={timelineRef} className='container mx-auto py-16 max-w-6xl'>
      <div className='mb-16'>
        <h2 className='timeline-title text-4xl font-bold text-gray-800 mb-2'>
          <span className=' mr-2'>○</span>
          NỘI DUNG CHÍNH
        </h2>
      </div>

      <div className='relative pt-8'>
        {/* Vertical line */}
        <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 -z-10 '></div>

        {events.map((event, index) => (
          <TimelineItem
            key={event.id}
            number={event.number}
            date={event.date}
            position={index % 2 === 0 ? 'right' : 'left'}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineMenu;

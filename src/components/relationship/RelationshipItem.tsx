import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGSAP } from '@/hooks/useGSAP';

interface RelationshipItemProps {
  icon: string;
  title: string;
  description?: string;
  index: number;
}

export const RelationshipItem: React.FC<RelationshipItemProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAP();

  useEffect(() => {
    if (!gsap || !itemRef.current) return;

    gsap.fromTo(
      itemRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power2.out',
      }
    );
  }, [gsap, index]);

  return (
    <div ref={itemRef} className='flex flex-col items-center mb-6'>
      <div className='w-12 h-12 flex items-center justify-center text-amber-500 mb-3'>
        <Image
          src={`/relationship/${icon}.svg`}
          alt={title}
          width={32}
          height={32}
          className='text-amber-500'
        />
      </div>
      <h3 className='text-gray-700 text-xl text-justify mb-1'>{title}</h3>
      <p className='text-gray-500 text-sm text-center max-w-xs'>
        {description}
      </p>
    </div>
  );
};

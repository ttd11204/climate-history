import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGSAP } from '@/hooks/useGSAP';
import RelationshipGridPropsGrid from '@/components/relationship/RelationshipGrid';

interface RelationshipShowcaseProps {
  relationship: {
    id: number;
    icon: string;
    title: string;
    description?: string;
  }[];
  content: string;
  imageUrl: string;
}

const RelationshipShowcase: React.FC<RelationshipShowcaseProps> = ({
  relationship,
  content,
  imageUrl,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAP();

  useEffect(() => {
    if (!gsap) return;

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (titleRef.current) {
      timeline.fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    if (contentRef.current) {
      timeline.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1 },
        '-=0.5'
      );
    }

    if (imageRef.current) {
      timeline.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1 },
        '-=0.7'
      );
    }
  }, [gsap]);

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold'>
          Quy luật về mối quan hệ biện chứng giữa cơ sở hạ tầng và kiến trúc
          thượng tầng
        </h1>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-3/4 pr-0 lg:pr-8'>
          <RelationshipGridPropsGrid relationships={relationship} />

          <div className='flex mb-4 relative'>
            <div
              ref={contentRef}
              className='bg-amber-500 text-white p-6 lg:p-10 w-full lg:w-3/4 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:z-10 rounded-lg shadow-lg'
            >
              <p className='text-2xl'>{content}</p>
            </div>

            <div
              ref={imageRef}
              className='hidden lg:block w-full lg:w-3/4 lg:ml-auto lg:translate-x-80'
            >
              <Image
                src={imageUrl}
                alt='Service showcase'
                width={400}
                height={300}
                className='h-full w-full object-cover rounded-lg'
              />
            </div>
          </div>

          <div className='lg:hidden mt-4'>
            <Image
              src={imageUrl}
              alt='Service showcase'
              width={400}
              height={300}
              className='w-full h-64 object-cover'
            />
          </div>
        </div>

        <div ref={titleRef} className='w-full lg:w-1/4 mt-10 lg:mt-0'>
          <div className='flex items-center'>
            <div className='w-3 h-3 rounded-full bg-amber-500 mr-2'></div>
            <h2 className='text-2xl font-bold text-[#ab332b]'>
              Vai trò quyết định của
            </h2>
          </div>
          <h2 className='text-2xl font-bold text-[#ab332b] ml-5'>
            CSHT đối với KTTT.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RelationshipShowcase;

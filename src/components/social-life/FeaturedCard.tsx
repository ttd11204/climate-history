import { FC } from 'react';

interface FeaturedCardProps {
  imageSrc: string;
  alt: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ imageSrc, alt }) => {
  return (
    <main>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold leading-tight'>
          Ý nghĩa trong <br /> đời sống xã hội
        </h1>
      </div>
      <div className='relative'>
        {/* Yellow border decoration */}
        <div className='absolute -inset-2 border-2 border-yellow-400  z-0'></div>

        {/* Image container */}
        <div className='relative z-10 overflow-hidden  p-3'>
          <img
            src={'/y-nghia.jpg'}
            alt={alt}
            className='w-full h-auto object-cover rounded-lg'
          />
        </div>
      </div>
    </main>
  );
};

export default FeaturedCard;

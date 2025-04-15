import { FC } from 'react';

interface FeaturedCardProps {
  imageSrc: string;
  alt: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ imageSrc, alt }) => {
  return (
    <div className='relative'>
      {/* Yellow border decoration */}
      <div className='absolute -inset-2 border-2 border-yellow-400 rounded-blob z-0'></div>

      {/* Image container */}
      <div className='relative z-10 overflow-hidden rounded-blob bg-white p-4'>
        <img src={imageSrc} alt={alt} className='w-full h-auto rounded-lg' />
      </div>
    </div>
  );
};

export default FeaturedCard;

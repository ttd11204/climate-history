// components/ExhibitionCard.tsx
import { FC } from 'react';

interface ExhibitionCardProps {
  title: string;
  content: string[];
  imageSrc: string;
}

const ImpactCard: FC<ExhibitionCardProps> = ({ title, content, imageSrc }) => {
  return (
    <div className=' bg-white relative  hover:shadow-md transition-shadow duration-300 shadow-custom overflow-hidden'>
      {/* Yellow triangle decoration */}
      <div className='absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-t-[12px] border-l-transparent border-t-transparent border-r-[12px] border-r-yellow-300 border-b-[12px] border-b-yellow-300'></div>
      {/* <div className='overflow-hidden'>
        <img
          src={imageSrc}
          alt={title}
          className='w-fit mx-auto flex h-20  transform transition-transform duration-500 group-hover:scale-105'
        />
      </div> */}
      <div className='p-6 pb-12 relative'>
        <h2 className='text-xl text-center mb-2'>{title}</h2>
        <ul className='text-gray-600 text-left list-disc list-inside space-y-1'>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImpactCard;

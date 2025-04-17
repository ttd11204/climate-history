import { icons } from '@tabler/icons-react';
import { FC } from 'react';

interface SocialLifeProps {
  title: string;
  description?: string;
  imageSrc?: string;
  icon?: React.ReactNode;
}

const SocialLifeCard: FC<SocialLifeProps> = ({
  title,
  description,
  imageSrc,
  icon,
}) => {
  return (
    <div className='service-card bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow duration-300'>
      {/* Image/Icon */}
      <div className='w-16 h-16 rounded-full overflow-hidden bg-yellow-200 flex-shrink-0 items-center justify-center flex'>
        {/* <img
          src={imageSrc}
          alt={title}
          className='w-full h-full object-cover'
        /> */}
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className='text-lg font-semibold text-gray-800 mb-1'>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

export default SocialLifeCard;

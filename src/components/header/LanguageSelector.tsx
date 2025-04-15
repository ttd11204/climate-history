import { FC } from 'react';
import Link from 'next/link';

const LanguageSelector: FC = () => {
  return (
    <div className='flex items-center space-x-2 text-xs text-gray-400'>
      <Link href='#' className='hover:text-white transition-colors'>
        IT
      </Link>
      <span>·</span>
      <Link href='#' className='hover:text-white transition-colors'>
        EN
      </Link>
      <span>·</span>
      <Link href='#' className='hover:text-white transition-colors'>
        FR
      </Link>
    </div>
  );
};

export default LanguageSelector;

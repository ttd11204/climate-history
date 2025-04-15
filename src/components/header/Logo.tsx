import { FC } from 'react';

const Logo: FC = () => {
  return (
    <div className='flex items-center'>
      <span className='text-2xl font-bold tracking-tighter'>
        <span className='text-white'>Nhóm 7</span>
      </span>
      <span className='ml-2 text-xs tracking-widest uppercase text-gray-400'>
        Triết học Mác-Lênin
      </span>
    </div>
  );
};

export default Logo;

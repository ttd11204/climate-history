// components/NavMenu.tsx
import { FC } from 'react';
import Link from 'next/link';

interface NavMenuProps {
  isMobile?: boolean;
}

const menuItems = [
  { label: 'COMPANY', href: '/company' },
  { label: 'VEHICLES', href: '/vehicles' },
  { label: 'KIT', href: '/kit' },
  { label: 'CASE STUDIES', href: '/case-studies' },
  { label: 'SUPPORT', href: '/support' },
  { label: 'CAREERS', href: '/careers' },
  { label: 'CONTACTS', href: '/contacts' },
];

const NavMenu: FC<NavMenuProps> = ({ isMobile = false }) => {
  return (
    <nav
      className={`${
        isMobile
          ? 'flex flex-col space-y-4 py-4'
          : 'flex items-center space-x-6'
      }`}
    >
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className='text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors'
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavMenu;

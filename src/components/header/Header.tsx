// components/Header.tsx
import { FC, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';
import NavMenu from './NavMenu';

const Header: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className='absolute top-0 left-0 right-0 z-50'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/'>
              <Logo />
            </Link>
          </div>

          {/* Language Selector (Mobile + Desktop) */}
          <div className='flex md:hidden'>
            <LanguageSelector />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <LanguageSelector />
            <NavMenu />
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-white'
            onClick={toggleMobileMenu}
            aria-label='Toggle menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-black bg-opacity-95 absolute top-full left-0 right-0 p-4'>
          <NavMenu isMobile={true} />
        </div>
      )}
    </header>
  );
};

export default Header;

import { ReactNode } from 'react';
import Link from 'next/link';
import ChapterNavigation from './ChapterNavigation';

interface StoryLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  nextChapter?: {
    title: string;
    path: string;
  };
  timeRange?: string;
}

const StoryLayout = ({ 
  children, 
  title, 
  subtitle, 
  nextChapter,
  timeRange = "1800 — 2020"
}: StoryLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Top navigation */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="font-serif text-lg font-medium">
            Climate
            <span className="block text-sm italic font-light">history</span>
          </div>
        </Link>
        
        <div className="flex items-center">
          <div className="mr-8 text-sm opacity-70">
            {timeRange}
          </div>
          <ChapterNavigation />
        </div>
      </header>
      
      {/* Main content */}
      <main className="w-full">
        {children}
      </main>
      
      {/* Next chapter navigation */}
      {nextChapter && (
        <footer className="bg-[#FF5B41] text-white py-10">
          <div className="container mx-auto px-6">
            <div className="flex justify-center items-center flex-col">
              <div className="uppercase text-sm tracking-widest mb-4">Next Chapter</div>
              <Link
                href={nextChapter.path}
                className="text-4xl md:text-5xl font-serif uppercase tracking-wide hover:opacity-80 transition-opacity"
              >
                {nextChapter.title}
              </Link>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default StoryLayout;
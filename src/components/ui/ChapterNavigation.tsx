import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Chapter {
  id: string;
  title: string;
  path: string;
  year: string;
}

const chapters: Chapter[] = [
  { id: 'history', title: 'History of the Earth\'s Climate', path: '/climate-history', year: '1800-2020' },
  { id: 'greenhouse', title: 'The Greenhouse Effect', path: '/greenhouse-effect', year: '1760-1850' },
  { id: 'industrial', title: 'Industrial Revolution', path: '/industrial-revolution', year: '1850-1945' }
];

const ChapterNavigation = () => {
  const pathname = usePathname();
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const chapter = chapters.find(ch => ch.path === pathname) || chapters[0];
    setCurrentChapter(chapter);
  }, [pathname]);
  
  return (
    <div className="fixed top-10 right-10 z-50">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5 bg-black bg-opacity-20 backdrop-blur-sm rounded-full"
        >
          <span className="sr-only">Select a chapter</span>
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
        <span className="ml-4 font-light text-sm text-white opacity-80">
          SELECT A CHAPTER
        </span>
      </div>
      
      {isOpen && (
        <div className="absolute top-12 right-0 w-64 mt-2 bg-black bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-4">
          <ul className="space-y-3">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <Link
                  href={chapter.path}
                  className={`block px-4 py-2 text-white hover:bg-white hover:bg-opacity-10 rounded ${
                    pathname === chapter.path ? 'opacity-100 font-semibold' : 'opacity-70'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="block text-sm">{chapter.title}</span>
                  <span className="block text-xs opacity-70">{chapter.year}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChapterNavigation;
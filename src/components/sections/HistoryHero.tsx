import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

const HistoryHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const image = imageRef.current;
    
    if (!hero || !title || !image) return;
    
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Initial states
    gsap.set(title, { opacity: 0, y: 100 });
    gsap.set(image, { opacity: 0, scale: 1.1 });
    
    // Animations
    tl.to(image, { opacity: 1, scale: 1, duration: 1.2, delay: 0.5 })
      .to(title, { opacity: 1, y: 0, duration: 1.2 }, "-=0.8");
    
    return () => {
      tl.kill();
    };
  }, []);
  
  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden bg-black">
      {/* Background image */}
      <div 
        ref={imageRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-70"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/landscape.jpg"
            alt="Climate landscape"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        <div ref={titleRef} className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif uppercase tracking-wide mb-4">
            HISTORY<br />OF THE<br />EARTH&apos;S CLIMATE
          </h1>
          
          <div className="mt-12">
            <div className="inline-block">
              <span className="text-sm font-light mr-2">1800</span>
              <span className="text-sm font-light">2020</span>
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              href="#learn-more"
              className="inline-block px-6 py-3 text-sm uppercase tracking-widest border border-white rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
            >
              Begin Journey
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-xs uppercase tracking-wider mb-2">scroll down</span>
        <div className="w-px h-8 bg-white animate-pulse"></div>
      </div>
    </div>
  );
};

export default HistoryHero;
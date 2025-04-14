import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    
    if (!container) return;
    
    // Create timeline for entering animation
    const tl = gsap.timeline();
    
    // Starting state - content invisible
    gsap.set(container, { opacity: 0, y: 50 });
    
    // Animate in
    tl.to(container, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
    
    return () => {
      // Clean up any animations
      tl.kill();
    };
  }, []);
  
  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
};

export default PageTransition;
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  trigger: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  toggleActions?: string;
}

export const useGSAPScroll = () => {
  const scrollRefs = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Cleanup function
    return () => {
      scrollRefs.current.forEach(trigger => {
        if (trigger) trigger.kill();
      });
      scrollRefs.current = [];
    };
  }, []);

  // Create fade-in animation
  const createFadeIn = (element: string | Element, options?: ScrollAnimationOptions) => {
    const el = typeof element === 'string' ? document.querySelector(element) : element;
    if (!el) return;
    
    gsap.set(el, { opacity: 0, y: 50 });
    
    const trigger = ScrollTrigger.create({
      trigger: options?.trigger || el,
      start: options?.start || "top 80%",
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        });
      },
      once: true
    });
    
    scrollRefs.current.push(trigger);
  };

  // Create story section animation
  const createStorySection = (section: string | Element, options?: ScrollAnimationOptions) => {
    const el = typeof section === 'string' ? document.querySelector(section) : section;
    if (!el) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options?.trigger || el,
        start: options?.start || "top bottom",
        end: options?.end || "bottom top",
        scrub: options?.scrub !== undefined ? options.scrub : 1,
        pin: options?.pin || false,
        markers: options?.markers || false,
        toggleActions: options?.toggleActions || "play none none reverse"
      }
    });
    
    // Add animations to the timeline
    tl.fromTo(el, 
      { opacity: 0.5, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 1 }
    );
    
    return tl;
  };

  return {
    createFadeIn,
    createStorySection
  };
};
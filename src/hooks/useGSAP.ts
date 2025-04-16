import { useState, useEffect } from 'react';

export const useGSAP = () => {
  const [gsapLib, setGsapLib] = useState<any>(null);
  const [scrollTrigger, setScrollTrigger] = useState<any>(null);

  useEffect(() => {
    // Import GSAP only on client side
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/dist/ScrollTrigger');

      gsapModule.default.registerPlugin(scrollTriggerModule.ScrollTrigger);

      setGsapLib(gsapModule.default);
      setScrollTrigger(scrollTriggerModule.ScrollTrigger);
    };

    loadGSAP();
  }, []);

  return { gsap: gsapLib, ScrollTrigger: scrollTrigger };
};

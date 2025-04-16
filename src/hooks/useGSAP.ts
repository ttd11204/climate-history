// hooks/useGSAP.ts
import { useState, useEffect } from 'react';

export const useGSAP = () => {
  const [gsapLib, setGsapLib] = useState<any>(null);

  useEffect(() => {
    // Import GSAP only on client side
    const loadGSAP = async () => {
      const gsapModule = await import('gsap');
      setGsapLib(gsapModule.default);
    };

    loadGSAP();
  }, []);

  return { gsap: gsapLib };
};
